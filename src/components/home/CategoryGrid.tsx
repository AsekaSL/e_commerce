import { memo, useMemo } from 'react';
import { IconGet } from '../../utils/actions';
import { categories } from '../../config/data';

// Memoized CategoryItem component to prevent unnecessary re-renders
const CategoryItem = memo<{ category: { icon: string; name: string } }>(
  ({ category }) => (
    <div className="group cursor-pointer">
      <div className="bg-white dark:bg-[#101922] border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 transition-all hover:shadow-lg hover:border-[#1173d4]/50">
        <div className="w-12 h-12 bg-[#1173d4]/10 rounded-full flex items-center justify-center text-[#1173d4] group-hover:scale-110 transition-transform">
          {IconGet(category.icon, "text-3xl!")}
        </div>
        <span className="font-semibold text-sm">{category.name}</span>
      </div>
    </div>
  )
);

CategoryItem.displayName = 'CategoryItem';

const CategoryGrid = memo(() => {
  // Memoize the categories list to avoid unnecessary recalculations
  const categoryList = useMemo(() => categories, []);

  return (
    <section className="px-20 py-20">
        <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Shop by Category</h3>
        <a className="text-[#1173d4] text-sm font-semibold hover:underline flex items-center gap-1" href="#">
            View All {IconGet("MdArrowForward", "text-lg")}
        </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categoryList.map((category, index) => (
              <CategoryItem key={index} category={category} />
            ))}
        </div>
    </section>
  );
});

CategoryGrid.displayName = 'CategoryGrid';

export default CategoryGrid;
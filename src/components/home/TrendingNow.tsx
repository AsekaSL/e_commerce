import { MdAddShoppingCart, MdArrowBackIosNew, MdArrowForwardIos, MdFavorite, MdStar } from 'react-icons/md'
import Button from '../../layouts/Button'
import { trendingNowData } from '../../config/data'

const TrendingNow = () => {
  return (
    <section className="px-20 py-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold">Trending Now</h3>
        <div className="flex gap-2">
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 transition-colors">
          <MdArrowBackIosNew className='text-sm!' />
        </button>
        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800 transition-colors">
          <MdArrowForwardIos className='text-sm!' />
        </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          /* Product cards will be dynamically rendered here based on trendingNowData */
          trendingNowData.map((product, index) => (
            <div key={index} className="group bg-white dark:bg-[#101922] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-4/5 bg-gray-100 dark:bg-gray-900 overflow-hidden">
                {product.isSell && <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">SALE</div>}
                {product.isFavorite && <div className="absolute top-3 right-3 z-10">
                  <button className="w-8 h-8 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors">
                    <MdFavorite className='text-xl!' />
                  </button>
                </div>}
                
              <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt={product.title} style={{backgroundImage: `url(${product.imageUrl})`}}></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Button styleType="add-to-cart" title="Add to Cart" icon={<MdAddShoppingCart className='text-xl!' />} />
              </div>
              </div>
              <div className="p-4 flex flex-col grow">
                <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">{product.category}</div>
                <h4 className="font-bold text-base mb-2 line-clamp-2">{product.title}</h4>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[#1173d4] font-bold text-lg">${product.price.toFixed(2)}</span>
                    {product.originalPrice && <span className="text-gray-400 line-through text-xs">${product.originalPrice.toFixed(2)}</span>}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <MdStar className='text-sm! fill-1' />
                    <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold ml-1">{product.rating} ({product.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default TrendingNow
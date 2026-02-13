import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"
import { getRatingStars, IconGet } from "../../utils/actions"
import { productCategories, products } from "../../config/data"
import type { Product } from "../../config/types"

const ProductListingPage = () => {

  return (
    <>
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* <!-- Breadcrumbs --> */}
            <nav className="flex items-center gap-2 mb-6">
                <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#1173d4]" href="#">Home</a>
                {IconGet("MdChevronRight", "text-slate-300 dark:text-slate-600")}
                <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#1173d4]" href="#">Electronics</a>
                {IconGet("MdChevronRight", "text-slate-300 dark:text-slate-600")}
                <span className="text-slate-900 dark:text-white text-sm font-semibold">Audio &amp; Headphones</span>
            </nav>
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 shrink-0 space-y-8">

                    {/* <!-- Categories --> */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                            {IconGet("MdCategory", "text-[#1173d4]")}
                            Categories
                        </h3>
                        <div className="space-y-2">
                            {
                                productCategories.map((category, index) => (
                                    <label key={index} className="flex items-center gap-3 cursor-pointer group">
                                        <input checked={category.isChecked} className="rounded border-slate-300 text-[#1173d4] focus:ring-[#1173d4] h-4 w-4" type="checkbox"/>
                                        <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-[#1173d4]">{category.name}</span>
                                    </label>
                                ))
                            }
                        </div>
                    </div>

                    {/* <!-- Price Range Slider --> */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                            {IconGet("MdPayments", "text-[#1173d4]")}
                            Price Range
                        </h3>
                        <div className="px-2 pt-6">
                            <div className="relative h-1 bg-slate-200 dark:bg-slate-700 rounded-full">
                                <div className="absolute h-full bg-[#1173d4] rounded-full left-[20%] right-[30%]"></div>
                                <div className="absolute -top-1.5 left-[20%] size-4 bg-[#1173d4] border-2 border-white dark:border-slate-900 rounded-full shadow-md cursor-pointer"></div>
                                <div className="absolute -top-1.5 right-[30%] size-4 bg-[#1173d4] border-2 border-white dark:border-slate-900 rounded-full shadow-md cursor-pointer"></div>
                            </div>
                            <div className="flex justify-between mt-4 text-xs font-medium text-slate-500">
                                <span>$100</span>
                                <span>$500</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Ratings --> */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                            {IconGet("MdStar", "")}
                        Customer Rating
                        </h3>
                        <div className="space-y-2">
                            <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#1173d4] w-full text-left">
                            <div className="flex text-yellow-400">
                                {
                                    [...Array(5)].map(() => (
                                        IconGet("MdStar", "")
                                    ))
                                }
                            </div>
                            <span>&amp; Up</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#1173d4] w-full text-left">
                            <div className="flex text-yellow-400">
                                {
                                    [...Array(5)].map(() => (
                                        IconGet("MdStar", "")
                                    ))
                                }
                            </div>
                            <span>&amp; Up</span>
                            </button>
                        </div>
                    </div>

                    <button className="w-full py-2 bg-[#1173d4] text-white rounded-lg font-semibold hover:bg-[#1173d4]/90 transition-colors shadow-sm">
                        Apply Filters
                    </button>

                </aside>

                {/* Product Listing Area */}
                <section className="flex-1">

                    {/* <!-- Action Bar --> */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Wireless Headphones</h1>
                            <p className="text-sm text-slate-500">Showing 1-12 of 145 results</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer">
                                {IconGet("MdSort", "text-slate-400")}
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Sort by: Price High-Low</span>
                                {IconGet("MdKeyboardArrowDown", "text-slate-400")}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            /* Product cards will be dynamically rendered here based on productData */
                            products.filter((product : Product) => product.category === "Headphones").map((product, index) => (
                                <div key={index} className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

                                    <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                                        <img alt={product.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt={product.description} src={product.imageUrl}/>
                                        <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-900 dark:text-white hover:text-red-500 backdrop-blur-sm transition-colors">
                                            {IconGet("MdFavorite", "")}
                                            
                                        </button>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-linear-to-t from-black/60 to-transparent">
                                            <button className="w-full bg-[#1173d4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                                {IconGet("MdShoppingCart", "text-sm")}
                                                    Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-slate-900 dark:text-white font-bold text-base leading-tight">{product.title}</h3>
                                            <span className="text-[#1173d4] font-bold text-lg">${product.price}</span>
                                        </div>
                                        <p className="text-slate-500 text-sm mb-3">{product.description}</p>
                                        <div className="mt-auto flex items-center gap-2">
                                            <div className="flex text-yellow-400">
                                                {
                                                      getRatingStars(product.rating)
                                                }
                                            </div>
                                            <span className="text-xs text-slate-400 font-medium">({product.reviews} reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                    {/* <!-- Pagination --> */}
                    <div className="mt-12 flex justify-center items-center gap-2">
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                            {IconGet("MdChevronLeft", "")}
                        </button>
                        <button className="size-10 rounded-lg bg-[#1173d4] text-white font-bold">1</button>
                        <button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">2</button>
                        <button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">3</button>
                        <span className="px-2 text-slate-400">...</span>
                        <button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">12</button>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                            {IconGet("MdChevronRight", "")}
                        </button>
                    </div>

                </section>
            </div>
        </main>
        
        <Footer />
    </>
  )
}

export default ProductListingPage
import { MdCategory, MdChevronLeft, MdChevronRight, MdFavorite, MdKeyboardArrowDown, MdPayments, MdShoppingCart, MdSort, MdStar, MdStarHalf } from "react-icons/md"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"

const ProductListingPage = () => {
  return (
    <>
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* <!-- Breadcrumbs --> */}
            <nav className="flex items-center gap-2 mb-6">
                <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#1173d4]" href="#">Home</a>
                <MdChevronRight className="text-slate-300 dark:text-slate-600" />
                <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-[#1173d4]" href="#">Electronics</a>
                <MdChevronRight className="text-slate-300 dark:text-slate-600" />
                <span className="text-slate-900 dark:text-white text-sm font-semibold">Audio &amp; Headphones</span>
            </nav>
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 shrink-0 space-y-8">

                    {/* <!-- Categories --> */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                            <MdCategory className="text-[#1173d4]" />
                            Categories
                        </h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input checked className="rounded border-slate-300 text-[#1173d4] focus:ring-[#1173d4] h-4 w-4" type="checkbox"/>
                                <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-[#1173d4]">Wireless Headphones</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="rounded border-slate-300 text-[#1173d4] focus:ring-[#1173d4] h-4 w-4" type="checkbox"/>
                            <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-[#1173d4]">Earbuds</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="rounded border-slate-300 text-[#1173d4] focus:ring-[#1173d4] h-4 w-4" type="checkbox"/>
                            <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-[#1173d4]">Noise Cancelling</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="rounded border-slate-300 text-[#1173d4] focus:ring-[#1173d4] h-4 w-4" type="checkbox"/>
                            <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-[#1173d4]">Gaming Headsets</span>
                            </label>
                        </div>
                    </div>

                    {/* <!-- Price Range Slider --> */}
                    <div>
                        <h3 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
                            <MdPayments className="text-[#1173d4]" />
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
                            <MdStar />
                        Customer Rating
                        </h3>
                        <div className="space-y-2">
                            <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#1173d4] w-full text-left">
                            <div className="flex text-yellow-400">
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                            </div>
                            <span>&amp; Up</span>
                            </button>
                            <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-[#1173d4] w-full text-left">
                            <div className="flex text-yellow-400">
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
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
                                <MdSort className="text-slate-400" />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Sort by: Price High-Low</span>
                                <MdKeyboardArrowDown className="text-slate-400" />
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* <!-- Product Card 1 --> */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

                            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img alt="Wireless Headphones" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Professional studio headphones on minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5fbqcP7kH3ACMWhDD4hyaxeyqWKKS2ZS4bGCZrrhduvi0sRa6JdU0VBFULSACuyDacEZZBULnyC4fW1tyZZIjh0fg7QsKLRItYdwxO2GqeLPVCMvishE_-JJXPVfvGg8xsKdXbCNrAOszXiVYxKvHbOaP8MyW7rj5SMqjAYLptfFklL6G2SGIN3ZaLzdX08dzBAZWenHhLs9M2C8StTlXRwd3iTLf-srqdoNbqUBpTlKxYP4DHypa3OYwPaNSz7PGdoXa1oM33r9Q"/>
                                <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-900 dark:text-white hover:text-red-500 backdrop-blur-sm transition-colors">
                                    <MdFavorite  />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                    <button className="w-full bg-[#1173d4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                        <MdShoppingCart className="text-sm" />
                                            Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-base leading-tight">Elite Wireless V2</h3>
                                    <span className="text-[#1173d4] font-bold text-lg">$299</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-3">Premium noise cancellation with 40h battery.</p>
                                <div className="mt-auto flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStarHalf className="fill-1 text-xs" />
                                    </div>
                                    <span className="text-xs text-slate-400 font-medium">(128 reviews)</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Product Card 2 --> */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

                            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img alt="Black Headphones" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Modern black headphones with sleek design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCamS-ykeVYDfGGHeK7Vi-tBuVYZll_K7S1gvbqvTNAWrXuJfQ5pDIuuv7GzbmoVeh9sTrw0TCgU_mP6XpbOtEWNW3WttvMCweYfNCD_XsWuELxytdXbdMv342lwao2dZ5dowA20eeTiUm_SmlVpy0HvGT9HGeLm4lmXhM7PzfQNCYkCo92MJ_7WpW82HJd7ADF5lXU6ZbVkvulGWc8_uedbVfYTqR16k8W5rthekYQwh2cKFMzabQS5RK48pX8SSLlEd5QsLU-Bqgn"/>
                                <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-900 dark:text-white hover:text-red-500 backdrop-blur-sm transition-colors">
                                    <MdFavorite />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                    <button className="w-full bg-[#1173d4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                        <MdShoppingCart className="text-sm" /> Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-1">
                            <h3 className="text-slate-900 dark:text-white font-bold text-base leading-tight">Sonic Max ANC</h3>
                            <span className="text-[#1173d4] font-bold text-lg">$189</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">The perfect travel companion for audiophiles.</p>
                            <div className="mt-auto flex items-center gap-2">
                            <div className="flex text-yellow-400">
                            <MdStar className="fill-1 text-xs" />
                                <MdStar className="fill-1 text-xs" />
                                <MdStar className="fill-1 text-xs" />
                                <MdStar className="fill-1 text-xs" />
                                <MdStarHalf className="fill-1 text-xs" />
                            </div>
                            <span className="text-xs text-slate-400 font-medium">(84 reviews)</span>
                            </div>
                            </div>
                        </div>

                        {/* <!-- Product Card 3 --> */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

                            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img alt="Earbuds" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Minimalist white wireless earbuds in charging case" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBQCo1H6Xp6Sdp2Ry2hY50LV02Xbv7oQdI-4LSfETbDkTEx3F-owIRMSwr3gTClRi8XDa_VauSgpW7F05V6Nveld_BZezNVnMhwRQd-DEwmkLmw2dONPnae7uJESkdzE_Nw4sdvm49iAEBxgDzJot62d6U-0jcdREqT8gj-OtcmqKkY7cKoUxxqwYk-bNVl4RCR4Y3Rpn8zOxeNZazi2jl5dXY2EefWkZX2O750sFyDxfTm6lxYNUG2FlNQfw6-LFMTM2fshK3CkCL"/>
                                <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-900 dark:text-white hover:text-red-500 backdrop-blur-sm transition-colors">
                                    <MdFavorite />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                    <button className="w-full bg-[#1173d4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                        <MdShoppingCart className="text-sm" /> Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 flex-1 flex flex-col">

                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-base leading-tight">AirPulse Buds</h3>
                                    <span className="text-[#1173d4] font-bold text-lg">$129</span>
                                </div>

                                <p className="text-slate-500 text-sm mb-3">Ultra-lightweight with spatial audio.</p>

                                <div className="mt-auto flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStarHalf className="fill-1 text-xs" />
                                    </div>
                                    <span className="text-xs text-slate-400 font-medium">(210 reviews)</span>
                                </div>
                            </div>

                        </div>

                        {/* <!-- Additional Product Cards (Duplicates for Grid demonstration) --> */}
                        {/* <!-- Product Card 4 --> */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

                            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img alt="Silver Headphones" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Luxury silver over-ear headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMuObZymKQk97xORHVmM25WAGaTM7UYio89Gwe9YjmZhDNolr8vDxZN57wpEPkSGLsxa3R_lU2sRIaNwlC2YIvHA3rCZXzMK7OGVbPl_bzk_3GaIGTaZjpSWEkfToa3Bpt4TB5qd39Pew4R-OImXLml5j2sxWtrXsX21IcIPf-YTIfS4vDEuEpy_LdSMO9ubvbQf9gD6oRU6X7GNPvRfZbIhBlok5Aaond2RJZO17r2UMed1H8-xJTwyRCx4MZpAe8VqOHLBMxGOR-"/>
                                <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-900 dark:text-white hover:text-red-500 backdrop-blur-sm transition-colors">
                                    <MdFavorite />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                    <button className="w-full bg-[#1173d4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                        <MdShoppingCart className="text-sm" /> Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-base leading-tight">Nordic Pure</h3>
                                    <span className="text-[#1173d4] font-bold text-lg">$349</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-3">Scandinavian design meets studio sound.</p>
                                <div className="mt-auto flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                    </div>
                                    <span className="text-xs text-slate-400 font-medium">(45 reviews)</span>
                                </div>
                            </div>

                        </div>
                        
                        {/* <!-- Product Card 5 --> */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">

                        <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                            <img alt="Retro Headphones" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Vintage-style brown and silver headphones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtlm2IS3bMhmNrp0seJQuVXyxSmJHVU5LZbdx1n0VH7pJvk-qsnsDsAwEIt_auVR7rH76uUXylj0mJRNH9GmOoYKu4xlaZJ7nRqv2zwKY1zWKT2-rV5mnNmHV_lbLbBayicE9-0Kz4Ewh0Bzg1RkJubln1erFCh7K74THriXpwafMrYskkYGQZ0rwfDcLuni_XT6qvhIWRhdLojSnYI9MlvPKN44BzUS7cgn488R8QdHwFBD9P08PhQE5d68bfBv4J8_rsUBe35ebW"/>
                            <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-900 dark:text-white hover:text-red-500 backdrop-blur-sm transition-colors">
                                <MdFavorite />
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                <button className="w-full bg-[#1173d4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                <MdShoppingCart className="text-sm" /> Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-slate-900 dark:text-white font-bold text-base leading-tight">Vintage Echo</h3>
                                <span className="text-[#1173d4] font-bold text-lg">$210</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-3">classNameic look with modern wireless tech.</p>
                            <div className="mt-auto flex items-center gap-2">
                                <div className="flex text-yellow-400">
                                    <MdStar className="fill-1 text-xs" />
                                    <MdStar className="fill-1 text-xs" />
                                    <MdStar className="fill-1 text-xs" />
                                    <MdStar className="fill-1 text-xs" />
                                    <MdStar className="text-xs" />
                                </div>
                                <span className="text-xs text-slate-400 font-medium">(67 reviews)</span>
                            </div>
                        </div>

                        </div>

                        {/* <!-- Product Card 6 --> */}
                        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img alt="Gaming Headset" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="RGB gaming headset with microphone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnWmzZLgQA3ISHxnXMhGzMcAy-Xbm6vXj8Y0nVtr5idBlfT0sYXFBItVgSp63nPkEZIE4p78hoym6XjRBJIfH5hMjSDku_q5x2jbkQg9V4Jx06gQ3_0F240izzGY_o2SthyJ6PDfEs_fvA3QqnHnu8BZw9LgP4H0GCY861AvUT6qWlTc_2TjhYMwPQgQ5db50Qee1NXB79DxhzfhxlUqcYmpLKDBeFs7yhFRT5a9ldOE81jo337ehDavPLKsJGHRCBh7FGvaUunBye"/>
                                <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-slate-900/80 rounded-full text-slate-900 dark:text-white hover:text-red-500 backdrop-blur-sm transition-colors">
                                    <MdFavorite />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                                    <button className="w-full bg-[#1173d4] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                        <MdShoppingCart className="text-sm" /> Add to Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-base leading-tight">Apex Pro Gamer</h3>
                                    <span className="text-[#1173d4] font-bold text-lg">$155</span>
                                </div>
                                <p className="text-slate-500 text-sm mb-3">7.1 Surround sound and noise-gate mic.</p>
                                <div className="mt-auto flex items-center gap-2">
                                    <div className="flex text-yellow-400">
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="fill-1 text-xs" />
                                        <MdStar className="text-xs" />
                                    </div>
                                    <span className="text-xs text-slate-400 font-medium">(342 reviews)</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* <!-- Pagination --> */}
                    <div className="mt-12 flex justify-center items-center gap-2">
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                        <MdChevronLeft />
                        </button>
                        <button className="size-10 rounded-lg bg-[#1173d4] text-white font-bold">1</button>
                        <button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">2</button>
                        <button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">3</button>
                        <span className="px-2 text-slate-400">...</span>
                        <button className="size-10 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">12</button>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                            <MdChevronRight />
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
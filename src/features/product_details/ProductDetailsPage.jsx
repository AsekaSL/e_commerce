import Breadcrumbs from "../../components/productDetails/Breadcrumbs"
import ProductHero from "../../components/productDetails/ProductHero"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"

const ProductDetailsPage = () => {
  return (

    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-display text-[#111418] dark:text-white transition-colors duration-200">
        <Header />

        <main className="mx-auto max-w-300 px-4 md:px-10 py-6">
            {/* <!-- Breadcrumbs --> */}
            <Breadcrumbs />

            {/* Product Hero Section */}
            <ProductHero />

            {/* Details & Reviews Section */}
            {/* <div className="mt-20 border-t border-[#f0f2f4] dark:border-[#2a343e] pt-12">
                <div className="flex flex-col md:flex-row gap-12">

                     <!-- Detailed Specs --> 
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-bold mb-6">Product Specifications</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between py-2 border-b border-[#f0f2f4] dark:border-[#2a343e]">
                                <span className="text-[#617589]">Connectivity</span>
                                <span className="font-medium">Bluetooth 5.3, 3.5mm</span>
                            </li>
                            <li className="flex justify-between py-2 border-b border-[#f0f2f4] dark:border-[#2a343e]">
                                <span className="text-[#617589]">Battery Life</span>
                                <span className="font-medium">Up to 40 Hours</span>
                            </li>
                            <li className="flex justify-between py-2 border-b border-[#f0f2f4] dark:border-[#2a343e]">
                                <span className="text-[#617589]">Charging</span>
                                <span className="font-medium">USB-C Fast Charge</span>
                            </li>
                            <li className="flex justify-between py-2 border-b border-[#f0f2f4] dark:border-[#2a343e]">
                                <span className="text-[#617589]">Weight</span>
                                <span className="font-medium">250g</span>
                            </li>
                        </ul>
                    </div>

                     <!-- Customer Reviews --> 
                    <div className="md:w-2/3">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold">Customer Reviews</h3>
                            <button className="text-[#1173d4] text-sm font-bold border border-[#1173d4] px-4 py-2 rounded-lg hover:bg-[#1173d4]/5 transition-colors">Write a Review</button>
                        </div>
                        <div className="space-y-8">

                             <!-- Review Item 1 --> 
                            <div className="flex flex-col gap-3 pb-8 border-b border-[#f0f2f4] dark:border-[#2a343e]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-[#1173d4]/20 flex items-center justify-center font-bold text-[#1173d4]">JD</div>
                                        <div>
                                            <p className="text-sm font-bold">James Wilson</p>
                                            <div className="flex text-amber-400">
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-[#617589] text-xs">Oct 24, 2023</span>
                                </div>

                                <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                                    Best headphones I've ever owned. The noise cancellation is incredible—it blocks out everything in the office. The battery life actually lives up to the claim, I only charge them once a week.
                                </p>

                                <div className="flex gap-2">
                                    <div className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-bold rounded flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[12px]">check_circle</span> VERIFIED BUYER
                                    </div>
                                </div>
                            </div>

                             Review Item 2 
                            <div className="flex flex-col gap-3 pb-8 border-b border-[#f0f2f4] dark:border-[#2a343e]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-[#1173d4]/20 flex items-center justify-center font-bold text-[#1173d4]">SM</div>
                                        <div>
                                            <p className="text-sm font-bold">Sarah Miller</p>
                                            <div className="flex text-amber-400">
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined fill-current text-xs">star</span>
                                                <span className="material-symbols-outlined text-xs">star</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-[#617589] text-xs">Sep 12, 2023</span>
                                </div>
                                <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                                    Very comfortable for long sessions. The bass is punchy without being overwhelming. My only minor gripe is the carrying case is a bit bulky, but overall excellent value.
                                </p>
                                <div className="flex gap-2">
                                <div className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-bold rounded flex items-center gap-1">
                                <span className="material-symbols-outlined text-[12px]">check_circle</span> VERIFIED BUYER
                                                                </div>
                                </div>
                            </div>

                        </div>
                        <button className="w-full mt-8 py-3 text-sm font-bold text-[#617589] hover:text-[#1173d4] transition-colors flex items-center justify-center gap-2">
                            Load More Reviews
                            <span className="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>

                </div>
            </div> */}

            {/* <!-- Related Products Section (Small Grid) --> */}
            {/* <div className="mt-20 mb-12">
                <h3 className="text-xl font-bold mb-8">You might also like</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-white dark:bg-[#1e2936] mb-3 bg-center bg-cover transition-transform group-hover:scale-[1.02]" data-alt="Small compact earbud charging case" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAogd0K3RhIyCIpaWuWc5AKXO3hFA05GC_DfN2AiJzydvuQ4M7XjXNAKLsYNtq_T5a6EFZ15q1iUwJj7G8GAr4a8re269Fks661nT8wiwQy-bYP73R6PXgzf45EWw6BOy8DB1uc0Picd1QBpv12RtsOYSTXMj9vHhAPoRVkqnc4PS3DlaQHV6Zieg4T2z7yXNU8ppuvMC_woAuaK6wXFJ0tPuJe2U_SpwCl4IJnLugjEfPSyTrLlq4HswkH0ws4nPijJRcYF23vLLTn')"}}></div>
                        <p className="text-sm font-bold truncate">Pocket Buds Lite</p>
                        <p className="text-sm text-[#1173d4] font-medium">$89.00</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-white dark:bg-[#1e2936] mb-3 bg-center bg-cover transition-transform group-hover:scale-[1.02]" data-alt="Modern desktop speakers for home office" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfqYTmGvnxhQcWPLr-cBsE1b48LEbvXGaDRRN7LQMdyHomy2QExfEm7mNnxKfiFYHC9cmobFSvXDShePGijBrhL94pbh6jecrTJ4ONWlQspkAjPLczPePwq2ZoJmAoiWTuuQPkyQy5RfNrKCDaO4CJx63-2fZnrUfa8YIQfJcy8m1OlKU9j7b75RsWn5irEjYbakyGsdRygnNW2R-55UnzXLV17ryHPIt0ZAn-3PGyf10jz5YmsOoZX8Mzx8oDbZgNjev9Km60zEMy')"}}></div>
                        <p className="text-sm font-bold truncate">Studio Desktop Speakers</p>
                        <p className="text-sm text-[#1173d4] font-medium">$199.00</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-white dark:bg-[#1e2936] mb-3 bg-center bg-cover transition-transform group-hover:scale-[1.02]" data-alt="Durable travel case for large headphones" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpgTWaXautec_7aa14AHt1NDSQdKHv-ig36gXSwtKuw-H67cs81GtYypvlomo2eDqeCTkTPTMvzaACucIZAXwXmHuSQZxgkJQ8vSjnAxNvMaXGpitR7Y_EDr2zCgY3B3FGzHBkWpeY1THyITrvu_-nXdPg4U6rxdc1_krajdYV1vC5Sxdm2uMVTbsB5D7dLTB_kcedRLFwGXGwbdhXSfZ9JbKacjImyJ8V8p9dL2UlAz72OaQJnLVtnHEEuurGROckWjAxmeVMrb82')"}}></div>
                        <p className="text-sm font-bold truncate">Premium Travel Case</p>
                        <p className="text-sm text-[#1173d4] font-medium">$45.00</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="aspect-square rounded-xl bg-white dark:bg-[#1e2936] mb-3 bg-center bg-cover transition-transform group-hover:scale-[1.02]" data-alt="Wireless charging pad with minimal design" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6kf_5oa9AvYMr3koTA58vemXOpIzxQ6jgUjCITdP3hwLY1MYxkY8k8_X6J4Ipq0WgpX0DsUEThP2V-BZV1CkAccO2pTXpzAcRPUua3e_WXg1EGmTfmrMF3VEyU7b9narMxGcKWg52MU0uaL5YyLIZMv4RbsC8Lw50tmA0mp_UlKiXB09OCR5u4iZ__CbX9STOVRTFu5_DPeghS1I6OvqgljNgM73E3w8-vyZF-G-D7PiaOhdRWslSKspEZpKknLXEwe50OcJqL1BG')"}}></div>
                        <p className="text-sm font-bold truncate">Multi-Device Charging Pad</p>
                        <p className="text-sm text-[#1173d4] font-medium">$59.00</p>
                    </div>
                </div>
            </div> */}

        </main>
        
        <Footer />
    </div>
  )
}

export default ProductDetailsPage
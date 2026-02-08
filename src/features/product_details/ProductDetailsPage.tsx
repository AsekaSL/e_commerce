const ProductDetailsPage = () => {
  return (
    <main className="mx-auto max-w-300 px-4 md:px-10 py-6">
{/* <!-- Breadcrumbs --> */}
<nav className="flex flex-wrap gap-2 py-4 mb-2">
<a className="text-[#617589] text-sm font-medium hover:text-[#1173d4]" href="#">Home</a>
<span className="text-[#617589] text-sm font-medium">/</span>
<a className="text-[#617589] text-sm font-medium hover:text-[#1173d4]" href="#">Audio</a>
<span className="text-[#617589] text-sm font-medium">/</span>
<a className="text-[#617589] text-sm font-medium hover:text-[#1173d4]" href="#">Headphones</a>
<span className="text-[#617589] text-sm font-medium">/</span>
<span className="text-[#1173d4] text-sm font-medium">Pro Wireless X1</span>
</nav>
{/* Product Hero Section */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
{/* Left Side: Image Gallery */}
<div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
{/* Thumbnails */}
<div className="flex md:flex-col order-2 md:order-1 gap-3 overflow-x-auto md:overflow-x-visible">
<div className="size-20 min-w-20 bg-white dark:bg-[#1e2936] border-2 border-[#1173d4] rounded-lg bg-center bg-cover cursor-pointer" data-alt="Front view of matte black professional wireless headphones" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1mFNOOhJOxXbGsvAsvUU1b_vBW3jvEcccGX2yIl80sZvGSctxx_eZjp7oDPJVYhQgn9VmMRq0ArhUJeQzGsKwlkOK40y3TITq4Z6rIMpL0Mg2c8bn2HfIfx5JLKJh1wUfYGfMSkUUrUGgUQ-uunJJ4fgTs6kLhgpazIRzPpQnOXxyDe3_OnNn8OwV5cZclD0DvbVeUSq_kPxrcz421dOPpzO-JVnWns-1PvE97xaYCdk-TXdzsJYp4-RCGOqEi8pCzrrKotAf8qUm')"}}></div>
<div className="size-20 min-w-20 bg-white dark:bg-[#1e2936] border-2 border-transparent hover:border-[#1173d4]/50 rounded-lg bg-center bg-cover cursor-pointer" data-alt="Side profile of headphones showing leather ear cushions" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWLpb0_xVbVzLqLROfZ-Va2ztKPTQicI5eOwPsAvJNngT46ig1ZsbInK25uHQs_z_AyTW-yq2-OB8iIOEi7g3Jgr9G26qPFW-6nosfOttcS6m-6Gc2z9iRifh2nAsUErDUY7gAMTliq-iIw4fkKCzy4aH4OB8mLlwBPm3cVC0AUZZbjSe73gKMsq40T-o431F8swyoK9BAntksmDeIvYlu4Wn68Afg8aGU46QLAj9c-tIMuOtiI_z9r26-2fL12Z8BP--PduqJTiCy')"}}></div>
<div className="size-20 min-w-20 bg-white dark:bg-[#1e2936] border-2 border-transparent hover:border-[#1173d4]/50 rounded-lg bg-center bg-cover cursor-pointer" data-alt="Headphones folded compactly for travel storage" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIMZ3nSo90U62YPtmXDG6RXhG-MxRvX1QkOhOyWfQQFcbv6mJ73yLkHrkkDJSUt7UZ8bOZSzjDPEeli4D21P7RphMBZlgimZo8-GjyFdMoXHGFTXWkg8IUYJS_i7-qJOjvbybtxVC-ac67S_sSf4qDl6lY1oa0mQGwlbvhZPC7Xci0OJ38k2fnHAb0yXZ4su8HGVk29ryaW4w0Ay0bPEG0WHtz6Bu58cjHEiAFaO_8eDMn2itoDGDop4ZWOkqt_4F_MBkNiRZM8ruQ')"}}></div>
<div className="size-20 min-w-20 bg-white dark:bg-[#1e2936] border-2 border-transparent hover:border-[#1173d4]/50 rounded-lg bg-center bg-cover cursor-pointer" data-alt="Macro detail of the tactile control buttons" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRECXptJJZrq7yrGvZAIx7sychzf-u4UWPX3Zg-uwUiJBigQu8Lw2vxG7bnnMlLnyBFvV7R954hFnEJEn9V752os-LkvmD35X0XAQkeTNh6V5p3bWfNle9sgpsYCb_gw5i7XaUujYV5A89qM7mYQE745tHYIJQ22-EI93Bu93TACqw8K36IuzOPafOdcigsrRUkz3wbERRrfJN4uYM-KCRH5CUGmPWwXiA3OSgxE9dZpx94ZO7TXHJL3tscMI8UvSMrwLOoMlghKNf')"}}></div>
</div>
{/* <!-- Main Image --> */}
<div className="flex-1 order-1 md:order-2 bg-white dark:bg-[#1e2936] rounded-xl overflow-hidden aspect-square md:aspect-auto">
<div className="w-full h-full min-h-100 md:min-h-125 bg-center bg-no-repeat bg-cover" data-alt="Full resolution studio shot of professional wireless headphones" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCowJTfRod79jfFpMlgrGsSyDrEd5L6n52v1fSJ6Z0bqEnWKHYkA3T20A2Vli_HsEQHE-v9t54cvnMz_5ZrFssHuweGAbdXYYlv9frlenEb4hq8bP0ajykmCxIg-nC3skuon8GUuP5aku--Jafao16q23X5HTnO2v1linaBgBufpZMBNUqBeLiqyplH6-XSe6g3MJMoXtDVAMh1QqfwSqAVJHMWYsZFWRBPraLmU1Gk566FQ263dKg7YIN5_OtVqDubJrfpnqn7SM4G')"}}></div>
</div>
</div>
{/* <!-- Right Side: Product Details --> */}
<div className="lg:col-span-5 flex flex-col">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="bg-[#1173d4]/10 text-[#1173d4] text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Top Rated</span>
<span className="text-[#617589] text-sm">SKU: PW-X1-2024</span>
</div>
<h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-tight">Pro Wireless Noise-Cancelling X1</h1>
<div className="flex items-center gap-2 mt-1">
<div className="flex text-amber-400">
<span className="material-symbols-outlined fill-current text-lg">star</span>
<span className="material-symbols-outlined fill-current text-lg">star</span>
<span className="material-symbols-outlined fill-current text-lg">star</span>
<span className="material-symbols-outlined fill-current text-lg">star</span>
<span className="material-symbols-outlined text-lg">star_half</span>
</div>
<span className="text-sm font-semibold">4.8</span>
<span className="text-[#617589] text-sm">(1,248 reviews)</span>
</div>
</div>
<div className="mt-8 flex items-baseline gap-4">
<span className="text-3xl font-bold text-[#1173d4]">$299.00</span>
<span className="text-xl text-[#617589] line-through">$349.00</span>
<span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded">Save 15%</span>
</div>
<div className="mt-8">
<p className="text-[#617589] dark:text-gray-400 leading-relaxed text-base">
                        Experience audio perfection with the Pro Wireless X1. Featuring advanced Active Noise Cancellation (ANC), 40-hour battery life, and high-fidelity drivers designed for creators and music enthusiasts who demand the absolute best.
                    </p>
</div>
{/* <!-- Product Options --> */}
<div className="mt-8 space-y-6">
<div>
<span className="text-sm font-bold block mb-3 uppercase tracking-wide">Select Color</span>
<div className="flex gap-3">
<button className="size-10 rounded-full bg-[#111418] ring-2 ring-offset-2 ring-[#1173d4] border-2 border-white dark:border-[#101922]"></button>
<button className="size-10 rounded-full bg-[#e5e7eb] ring-2 ring-offset-2 ring-transparent hover:ring-gray-300 border-2 border-white dark:border-[#101922]"></button>
<button className="size-10 rounded-full bg-[#1173d4] ring-2 ring-offset-2 ring-transparent hover:ring-[#1173d4]/50 border-2 border-white dark:border-[#101922]"></button>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex items-center border border-[#f0f2f4] dark:border-[#2a343e] rounded-lg h-12">
<button className="px-4 text-xl hover:text-[#1173d4] transition-colors">−</button>
<input className="w-12 text-center bg-transparent border-none focus:ring-0 font-bold" readOnly type="text" value="1"/>
<button className="px-4 text-xl hover:text-[#1173d4] transition-colors">+</button>
</div>
<button className="flex-1 bg-[#1173d4] text-white font-bold h-12 rounded-lg hover:bg-[#1173d4]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1173d4]/20">
<span className="material-symbols-outlined">shopping_cart</span>
                            Add to Cart
                        </button>
</div>
</div>
{/* Trust Badges */}
<div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#f0f2f4] dark:border-[#2a343e] pt-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#1173d4] text-2xl">local_shipping</span>
<div>
<p className="text-xs font-bold uppercase">Free Shipping</p>
<p className="text-[11px] text-[#617589]">Orders over $100</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#1173d4] text-2xl">verified_user</span>
<div>
<p className="text-xs font-bold uppercase">2 Year Warranty</p>
<p className="text-[11px] text-[#617589]">Genuine products</p>
</div>
</div>
</div>
</div>
</div>
{/* Details & Reviews Section */}
<div className="mt-20 border-t border-[#f0f2f4] dark:border-[#2a343e] pt-12">
<div className="flex flex-col md:flex-row gap-12">
{/* <!-- Detailed Specs --> */}
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
{/* <!-- Customer Reviews --> */}
<div className="md:w-2/3">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-bold">Customer Reviews</h3>
<button className="text-[#1173d4] text-sm font-bold border border-[#1173d4] px-4 py-2 rounded-lg hover:bg-[#1173d4]/5 transition-colors">Write a Review</button>
</div>
<div className="space-y-8">
{/* <!-- Review Item 1 --> */}
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
{/* Review Item 2 */}
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
</div>
{/* <!-- Related Products Section (Small Grid) --> */}
<div className="mt-20 mb-12">
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
</div>
</main>
  )
}

export default ProductDetailsPage
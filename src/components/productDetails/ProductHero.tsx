import { MdStar} from "react-icons/md"
import { IconGet } from "../../utils/actions"

const ProductHero = () => {
  return (
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

                    {/* <!-- Main Image -->   */}
                    <div className="flex-1 order-1 md:order-2 bg-white dark:bg-[#1e2936] rounded-xl overflow-hidden aspect-square md:aspect-auto">
                        <div className="w-full h-full min-h-100 md:min-h-125 bg-center bg-no-repeat bg-cover" data-alt="Full resolution studio shot of professional wireless headphones" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCowJTfRod79jfFpMlgrGsSyDrEd5L6n52v1fSJ6Z0bqEnWKHYkA3T20A2Vli_HsEQHE-v9t54cvnMz_5ZrFssHuweGAbdXYYlv9frlenEb4hq8bP0ajykmCxIg-nC3skuon8GUuP5aku--Jafao16q23X5HTnO2v1linaBgBufpZMBNUqBeLiqyplH6-XSe6g3MJMoXtDVAMh1QqfwSqAVJHMWYsZFWRBPraLmU1Gk566FQ263dKg7YIN5_OtVqDubJrfpnqn7SM4G')"}}></div>
                    </div>

        </div>

        {/* <!-- Right Side: Product Details -->  */}
        <div className="lg:col-span-5 flex flex-col">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="bg-[#1173d4]/10 text-[#1173d4] text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Top Rated</span>
                    <span className="text-[#617589] text-sm">SKU: PW-X1-2024</span>
                </div>
                <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-tight">Pro Wireless Noise-Cancelling X1</h1>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-amber-400">
                        {[...Array(5)].map((_, index) => (
                            <MdStar className="text-lg" key={index} />
                        ))}
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
            {/* Product Options  */}
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
                    <button className="flex-1 bg-[#1173d4] text-white font-bold h-12 rounded-lg hover:bg-[#1173d4]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1173d4]/20">
                        {IconGet("MdShoppingCart", "text-lg")}
                        Add to Cart
                    </button>
                </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#f0f2f4] dark:border-[#2a343e] pt-8">
                    <div className="flex items-center gap-3">
                        {
                            IconGet("MdLocalShipping", "text-[#1173d4] text-2xl")
                        }
                        <div>
                            <p className="text-xs font-bold uppercase">Free Shipping</p>
                            <p className="text-[11px] text-[#617589]">Orders over $100</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {IconGet("MdVerified", "text-[#1173d4] text-2xl")}
                        <div>
                            <p className="text-xs font-bold uppercase">2 Year Warranty</p>
                            <p className="text-[11px] text-[#617589]">Genuine products</p>
                        </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default ProductHero
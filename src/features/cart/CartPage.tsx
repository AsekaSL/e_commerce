import { MdAdd, MdArrowBack, MdArrowForward, MdDelete, MdRemove, MdVerified } from "react-icons/md"
import Footer from "../../layouts/Footer"
import Header from "../../layouts/Header"

const CartPage = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] min-h-screen text-[#111418] dark:text-white transition-colors duration-200">

        <Header />

        <main className="max-w-7xl mx-auto px-6 py-8">
            {/* <!-- Breadcrumbs --> */}
            <nav className="flex items-center gap-2 mb-6">
                <a className="text-gray-500 hover:text-[#1173d4] text-sm font-medium" href="#">Home</a>
                <span className="text-gray-400 text-sm">/</span>
                <span className="text-gray-900 dark:text-white text-sm font-semibold">Shopping Cart</span>
            </nav>
            <div className="mb-8">
                <h1 className="text-4xl font-black tracking-tight mb-2">Shopping Cart</h1>
                <p className="text-gray-500 dark:text-gray-400">You have 3 items in your cart ready for checkout.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
            

                <div className="flex-1 space-y-4">
                    
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center shrink-0" data-alt="Professional wireless over-ear headphones in black" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVW4mQSRZ6mpN00-nkGwr3IxpqhXJzMqbeWGRaz_FSc86eYedst7_m-IMNiOcjh3lzlr5HUvz1Kqb0444jGp4W4UP_wHnLV8yOlAleE9ymbBiDd-cvn0hQCXejg42543DCXInbz7WDy1yK8hc0KBTMU-ezpxkV9qEroy-soO_gNG71yf6H52sKbvrWwjVCBJEXrIW3m18e01v6EHNzT0Gk8QBtlsWkwSK9GKTIiUBj5K_4e9qfGBjo7MNR2TQXFYguSTGpPjP2Jk24")' }}></div>
                        <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold">Premium Wireless Headphones</h3>
                                <p className="text-sm text-gray-500">Midnight Black | One Size</p>
                                <p className="text-[#1173d4] font-bold text-lg mt-2">$299.00</p>
                            </div>
                            <div className="flex items-center gap-6 mt-4 sm:mt-0">
                                <div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 p-1">
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                                        <MdRemove className="text-sm" />
                                    </button>
                                    {/* <input className="w-10 text-center bg-transparent border-none focus:ring-0 font-bold text-sm" type="number" value="1"/> */}
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                                        <MdAdd className="text-sm" />
                                    </button>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    </div>

                    
                
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center shrink-0" data-alt="Minimalist luxury watch with tan leather strap" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAop6wEvbu-cJc6rTZkyMmsPs-qrsLlm5ix6Bew1u2KsV9tmGOrMivZ7gevMH_GDiftW-r0QXi35xljWRIopYQkyZCLLODbcl4bCrhm-eR3lmUX3vqxRrlNkq0nEo-szaThmoyM5q0VRHAhnGkeqyIgyqeBiHqy4SBi8HjSCQkkmeGD2HvVV4yfDZ_SoHa4y2lrHp4oiEKzUnq-RUq0cDPinjOF1vfE3b9lSDvr-wbf8xlKWpk8lFkiPNdU0Bhtu8iyJb2oG77pVeWV")' }}></div>
                        <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold">Minimalist Leather Watch</h3>
                                <p className="text-sm text-gray-500">Tan Leather | 40mm</p>
                                <p className="text-[#1173d4] font-bold text-lg mt-2">$150.00</p>
                            </div>
                            <div className="flex items-center gap-6 mt-4 sm:mt-0">
                                <div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 p-1">
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                                        <MdRemove className="text-sm" />
                                    </button>
                                    {/* <input className="w-10 text-center bg-transparent border-none focus:ring-0 font-bold text-sm" type="number" value="1"/> */}
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                                        <MdAdd className="text-sm" />
                                    </button>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg bg-cover bg-center shrink-0" data-alt="Sleek silver portable Bluetooth speaker" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnyEQCkmcQEhqrue9xVNchhAh5BFmcQ9tzhwX35mRXltZPf3k-t00I-WD6qIY5sPnFQ-ZToPP8vDwSw4ROOsdFlAZepw5o_V2VE0KHRFHOZpNmmXwEm9jA0TtYSSM7tIznnpriFQxFj20oWUeow4PiYBQFfrSD4q4cAByjCcTW5Fl0l0LedN6FDPeORNyz-X-7X9URn2epM85r18W9YylAs7sKhcMEN6bz4wlLbggWjAePjpimlBoOxS6SM-xuNIqwHyWPz9wu1nU6")' }}></div>
                        <div className="flex-1 flex flex-col sm:flex-row justify-between w-full">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold">Smart Bluetooth Speaker</h3>
                                <p className="text-sm text-gray-500">Space Gray | Portable</p>
                                <p className="text-[#1173d4] font-bold text-lg mt-2">$120.00</p>
                            </div>
                            <div className="flex items-center gap-6 mt-4 sm:mt-0">
                                <div className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 p-1">
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                                        <MdRemove className="text-sm" />
                                    </button>
                                    {/* <input className="w-10 text-center bg-transparent border-none focus:ring-0 font-bold text-sm" type="number" value="2"/> */}
                                    <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                                        <MdAdd className="text-sm" />
                                    </button>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="pt-6">
                        <button className="flex items-center gap-2 text-[#1173d4] font-semibold hover:underline">
                            <MdArrowBack />
                            Continue Shopping
                        </button>
                    </div>

                </div>
                

                <div className="w-full lg:w-95">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span className="font-medium text-gray-900 dark:text-white">$689.00</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Estimated Tax</span>
                                <span className="font-medium text-gray-900 dark:text-white">$55.12</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-2xl font-black text-[#1173d4]">$744.12</span>
                        </div>
                        <div className="mb-6">
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Promo Code</label>
                            <div className="flex gap-2">
                                <input className="flex-1 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-[#1173d4] focus:border-[#1173d4]" placeholder="Enter code" type="text"/>
                                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-sm font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Apply</button>
                            </div>
                        </div>
                        
                        <button className="w-full bg-[#1173d4] hover:bg-[#1173d4]/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-[#1173d4]/20">
                            Proceed to Checkout
                            <MdArrowForward />
                        </button>
                        <div className="mt-8 flex flex-wrap justify-center gap-4 grayscale opacity-50">
                            <MdVerified className="text-4xl" title="Secure Payment" />
                            <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded text-[8px] flex items-center justify-center font-bold">VISA</div>
                            <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded text-[8px] flex items-center justify-center font-bold">MC</div>
                            <div className="h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded text-[8px] flex items-center justify-center font-bold">AMEX</div>
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-6">
                            Free 30-day returns and exchanges. <br/> Secure encrypted checkout.
                        </p>
                    </div>
                </div>
            </div>
        </main>
            
        <Footer />
    </div>
  )
}

export default CartPage
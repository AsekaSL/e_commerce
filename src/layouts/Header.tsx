import { IconGet } from '../utils/actions'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
            {/* <!-- Logo --> */}
            <div className="flex items-center gap-2 shrink-0">
                <div className="bg-[#1173d4] p-1.5 rounded-lg text-white">
                    {IconGet("MdShoppingBag", "text-2xl! leading-none")}
                </div>
            <h1 className="text-xl font-extrabold tracking-tight dark:text-white">PremiumShop</h1>
            </div>
            {/* <!-- Search Bar --> */}
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1173d4] transition-colors">
                        {
                            /* Search Icon */
                            IconGet("MdSearch", "text-xl!")
                        }
                </div>
                <input className="w-full h-10 bg-gray-100 dark:bg-gray-800 border-none rounded-lg pl-10 pr-4 focus:ring-2 focus:ring-[#1173d4]/20 text-sm placeholder:text-gray-500" placeholder="Search for products, brands and more..." type="text"/>
            </div>
            </div>
            {/* Nav Icons & Links */}
            <div className="flex items-center gap-6">
                <nav className="hidden lg:flex items-center gap-6">
                    <a className="text-sm font-medium hover:text-[#1173d4] transition-colors" href="#">Deals</a>
                    <a className="text-sm font-medium hover:text-[#1173d4] transition-colors" href="#">New Arrivals</a>
                </nav>
                <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative">
                        {IconGet("MdFavorite", "!text-xl")}
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative">
                        {IconGet("MdPerson", "!text-xl")}
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative">
                        {IconGet("MdShoppingCart", "!text-xl")}
                        <span className="absolute top-1 right-1 bg-[#1173d4] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
                    </button>
                </div>
                </div>
            </div>
    </header>
  )
}

export default Header
import { memo, useCallback, useRef, useState } from 'react';
import { IconGet } from '../utils/actions';

const Header = memo(() => {
  // useRef to avoid re-renders when accessing the input element
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // useCallback to memoize event handlers and prevent recreation on every render
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Searching for:', searchQuery);
  }, [searchQuery]);

  const handleFavoriteClick = useCallback(() => {
    // Navigate to favorites or implement logic
    console.log('Favorites clicked');
  }, []);

  const handleProfileClick = useCallback(() => {
    // Navigate to profile or implement logic
    console.log('Profile clicked');
  }, []);

  const handleCartClick = useCallback(() => {
    // Navigate to cart or implement logic
    console.log('Cart clicked');
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 shrink-0">
                <div className="bg-[#1173d4] p-1.5 rounded-lg text-white">
                    {IconGet("MdShoppingBag", "text-2xl! leading-none")}
                </div>
            <h1 className="text-xl font-extrabold tracking-tight dark:text-white">PremiumShop</h1>
            </div>
            
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1173d4] transition-colors">
                        {IconGet("MdSearch", "text-xl!")}
                    </div>
                    <input 
                        ref={searchInputRef}
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full h-10 bg-gray-100 dark:bg-gray-800 border-none rounded-lg pl-10 pr-4 focus:ring-2 focus:ring-[#1173d4]/20 text-sm placeholder:text-gray-500" 
                        placeholder="Search for products, brands and more..." 
                        type="text"
                    />
                </div>
            </form>
            
            {/* Nav Icons & Links */}
            <div className="flex items-center gap-6">
                <nav className="hidden lg:flex items-center gap-6">
                    <a className="text-sm font-medium hover:text-[#1173d4] transition-colors" href="#">Deals</a>
                    <a className="text-sm font-medium hover:text-[#1173d4] transition-colors" href="#">New Arrivals</a>
                </nav>
                <div className="flex items-center gap-3">
                    <button 
                        onClick={handleFavoriteClick}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
                        aria-label="Favorites"
                    >
                        {IconGet("MdFavorite", "!text-xl")}
                    </button>
                    <button 
                        onClick={handleProfileClick}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
                        aria-label="Profile"
                    >
                        {IconGet("MdPerson", "!text-xl")}
                    </button>
                    <button 
                        onClick={handleCartClick}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full relative"
                        aria-label="Shopping Cart"
                    >
                        {IconGet("MdShoppingCart", "!text-xl")}
                        <span className="absolute top-1 right-1 bg-[#1173d4] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
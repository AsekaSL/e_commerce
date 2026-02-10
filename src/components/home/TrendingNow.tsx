import { MdAddShoppingCart, MdArrowBackIosNew, MdArrowForwardIos, MdFavorite, MdStar } from 'react-icons/md'
import Button from '../../layouts/Button'

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
        {/* <!-- Product Card 1 --> */}
        <div className="group bg-white dark:bg-[#101922] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="relative aspect-4/5 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="absolute top-3 right-3 z-10">
              <button className="w-8 h-8 bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-red-500 transition-colors">
                <MdFavorite className='text-xl!' />
              </button>
            </div>
          <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="High-end wireless headphones with noise cancelling" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1Vm6CCFsEvrrsWa3kP8HMTrkAy0AVUTHFA5QUCVtCGZiyMcCo2HZc-6L7kpgARunycGSHNqWbWXKqqJt5v5vIgUJXRcfUnWYS9RYZM_pUuQtIhuzZJkOz8h4bw2MyzQmhok2IqOfgp268s89K2rHn3c3ZkVe-tQWfat4LVJVaA6un_gOIHLXmXs20-5bCPJYmpttVyB7kybhGxN2ehep3IOh3n0FKme5rHzls5vDjsy0JRkfVDtUpWGhDBXhspdADzkdJgbb2AK9T');"}}></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button styleType="add-to-cart" title="Add to Cart" icon={<MdAddShoppingCart className='text-xl!' />} />
          </div>
          </div>
          <div className="p-4 flex flex-col grow">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">Tech</div>
            <h4 className="font-bold text-base mb-2 line-clamp-2">Noise-Cancelling Wireless Headphones</h4>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[#1173d4] font-bold text-lg">$299.00</span>
              <div className="flex items-center text-yellow-400">
                <MdStar className='text-sm! fill-1' />
                <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold ml-1">4.9 (128)</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product Card 2 --> */}
        <div className="group bg-white dark:bg-[#101922] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="relative aspect-4/5 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">SALE</div>
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Minimalist white designer wristwatch" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt3bIvg54M0Y7enzfM9psdi_njqJIlAGJEcKuNccXbJW0FAfZQM3b0A0YutqjGfD1c_M_5hByfJwblgUMGvYRMAWKmc5BCwDQBMn4JOlfaxtKrmxlqeGp165X5eAFhSqA2iPNLJf1nERb4yxObddCVOUfVN4ztMHonTi83jnNHmzbt-snaof7a83tgS-496fjmkZbk25fGKbGDfNVV66RESsOrVI7xO7y0FdRK6skm4JF4FiHTr38AHopl7qRIvsE6kXTVeMJgvuDI')"}}></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <Button styleType="add-to-cart" title="Add to Cart" icon={<MdAddShoppingCart className='text-xl!' />} />
            </div>
          </div>
          <div className="p-4 flex flex-col grow">
          <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">Fashion</div>
          <h4 className="font-bold text-base mb-2 line-clamp-2">Minimalist Ceramic Watch</h4>
          <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
          <span className="text-[#1173d4] font-bold text-lg">$145.00</span>
          <span className="text-gray-400 line-through text-xs">$190.00</span>
          </div>
          <div className="flex items-center text-yellow-400">
          <MdStar className='text-sm! fill-1' />
          <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold ml-1">4.7 (85)</span>
          </div>
          </div>
          </div>
        </div>
        {/* <!-- Product Card 3 --> */}
        <div className="group bg-white dark:bg-[#101922] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="relative aspect-4/5 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Sleek red athletic running sneakers" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrHF5rFKKjXPY1hyi89hWj9PKgo2U9aTzpesehrbNUAWiSxCbhdfhC3X8FT7yhi4tWd4sbN6hyo9h9BcKi1d4-UnYU07LSbiNuOU2afuI31Wx3pldq7usiXSikF2pBhxiAHKGFkU3gKtPgdKUHqCVzXnovrSbMdsSUg5XdztKFHBGfdPlr0Vr3CLF-BThWP3BDTIvqMfnOB_CXLY7I5xYEiOh23XWMlvcut4tWXaN2oX9A_Sb9g1r6kKUCxIZ8mH_t41-dtGI5JLM6')"}}></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <Button styleType="add-to-cart" title="Add to Cart" icon={<MdAddShoppingCart className='text-xl!' />} />
            </div>
          </div>
          <div className="p-4 flex flex-col grow">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">Lifestyle</div>
            <h4 className="font-bold text-base mb-2 line-clamp-2">Speed Racer Athletic Sneakers</h4>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[#1173d4] font-bold text-lg">$120.00</span>
              <div className="flex items-center text-yellow-400">
                <MdStar className='text-sm! fill-1' />
                <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold ml-1">4.8 (210)</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Product Card 4 --> */}
        <div className="group bg-white dark:bg-[#101922] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
          <div className="relative aspect-4/5 bg-gray-100 dark:bg-gray-900 overflow-hidden">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Professional vintage style polaroid camera" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLLiLlmsbyhu6oi7xXCPw8jjzt-kR4-4N6Czx8CoxuW2Pmk0zO-NMOt27hE2BUAudukZLhZPXfNHl4URtL6Ce-HKWfJwFow6UrqFbYMxIYhQnlacndH2q1n9DipJdkCwXMtPptsxT0BRRkFMCzEa-U50S2YVlIC-Bp51MUzl2FZHClBhDWjpGjl6uNH7NQw4-23W6_obkV3ylgYaiZxhi38SkPQOTMNAgCM7cRf7-UuRd-xy9FbF8wrtoXZ-Psh-3rphhrl2xz_34y')"}}></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <Button styleType="add-to-cart" title="Add to Cart" icon={<MdAddShoppingCart className='text-xl!' />} />
            </div>
          </div>
          <div className="p-4 flex flex-col grow">
            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-semibold">Photography</div>
            <h4 className="font-bold text-base mb-2 line-clamp-2">InstaMax Professional Camera</h4>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[#1173d4] font-bold text-lg">$89.00</span>
              <div className="flex items-center text-yellow-400">
                <MdStar className='text-sm! fill-1' />
                <span className="text-gray-600 dark:text-gray-400 text-xs font-semibold ml-1">4.6 (56)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendingNow
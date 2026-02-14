import { memo, useCallback } from 'react';
import Button from "../../layouts/Button";

const HeroSection = memo(() => {
  // Memoize button handlers
  const handleShopNow = useCallback(() => {
    console.log('Navigate to shop');
  }, []);

  const handleExploreLookbook = useCallback(() => {
    console.log('Navigate to lookbook');
  }, []);

  return (
    <section className="px-20 py-20">
        <div className="relative w-full h-120 rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-cover bg-center" data-alt="Premium fashion lifestyle banner with summer collection" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByLU_tLTbu_Ky0clpK6XH1rnBFVvunyREPWi3QVhQQ0sGs_JXt8qnqFaPr_ko4y4R3sp4bZ_8uLkojZ2uEIn7--te6E8EXSxyYZwDUrVG1l9ZcHvumHjYMAwqDDns7CNKNcoomyvXnzALUmfeB3yeHf1gDjXIvQArAJRZitUtJjBuYTJCMMa5j167abBz2IqA0i4Xqa7lPa1nlXgSvo5jke88pXRbhlCulaBakVpDeYIhCTIFdKDfRl_ncdO8ppwKhT05VnRg8ng2u')"}}>
                <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent flex flex-col justify-center px-16">
                    <span className="text-[#1173d4] font-bold tracking-widest uppercase text-sm mb-4">Summer Collection 2024</span>
                    <h2 className="text-5xl font-bold text-white max-w-lg leading-tight mb-6">Redefine Your Modern Wardrobe</h2>
                    <p className="text-gray-200 text-lg max-w-md mb-8">Discover the latest trends in sustainable fashion and premium accessories. Limited time offers available.</p>
                    <div className="flex gap-4">
                        <div onClick={handleShopNow}>
                          <Button styleType="primary" title="Shop Now" />
                        </div>
                        <div onClick={handleExploreLookbook}>
                          <Button styleType="secondary" title="Explore Lookbook" />
                        </div>
                    </div>
                </div>
            </div>
        {/* Carousel Nav */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-8 h-1 bg-[#1173d4] rounded-full"></div>
                <div className="w-2 h-1 bg-white/50 rounded-full"></div>
                <div className="w-2 h-1 bg-white/50 rounded-full"></div>
            </div>
        </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
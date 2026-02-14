import { memo } from 'react';
import CategoryGrid from '../../components/home/CategoryGrid';
import HeroSection from '../../components/home/HeroSection';
import Promotional from '../../components/home/Promotional';
import TrendingNow from '../../components/home/TrendingNow';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

// HomePage is memoized to prevent unnecessary re-renders when route doesn't change
const HomePage = memo(() => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CategoryGrid />
      <TrendingNow />
      <Promotional />
      <Footer />
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
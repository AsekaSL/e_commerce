import { memo } from 'react'
import CategoryGrid from '../../components/home/CategoryGrid'
import HeroSection from '../../components/home/HeroSection'
import Promotional from '../../components/home/Promotional'
import TrendingNow from '../../components/home/TrendingNow'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'

// Memoize HomePage to prevent unnecessary re-renders
const HomePage = memo(() => {
  
  return (
    <div >
        <Header />
        <HeroSection/>
        <CategoryGrid />
        <TrendingNow />
        <Promotional />
        <Footer />
    </div>
  )
})

export default HomePage
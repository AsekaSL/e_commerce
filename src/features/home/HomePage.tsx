import CategoryGrid from '../../components/CategoryGrid'
import HeroSection from '../../components/HeroSection'
import Promotional from '../../components/Promotional'
import TrendingNow from '../../components/TrendingNow'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'

const HomePage = () => {
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
}

export default HomePage
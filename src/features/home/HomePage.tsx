import CategoryGrid from '../../components/CategoryGrid'
import HeroSection from '../../components/HeroSection'
import TrendingNow from '../../components/TrendingNow'
import Header from '../../layouts/Header'

const HomePage = () => {
  return (
    <div >
        <Header />
        <HeroSection/>
        <CategoryGrid />
        <TrendingNow />
    </div>
  )
}

export default HomePage
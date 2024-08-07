import Header from '../components/Header'
import Hero from '../components/HeroSection'
import { AnimatedLogo } from '../components/animatedImages/AnimatedLogos'
import MainPlatformSection from '../components/onePlatformSection/MainPlatformSection'
import StartSelling from '../components/startSelling/StartSelling'
import MainComponent from '../components/subscription/MainComponent'
import CheckoutComponent from '../components/checkoutSection/CheckOutComponent'
import { TrustedPartners } from '../components/trustedPartners/TrustedPartners'
import BusinessSection from '../components/businessSection/BusinessSection'
import Dashboard from '../components/discoverDashboard/DiscoverDashboard'
import Footer from '../components/footer/FooterComponent'
import ScrollableImages from '../components/animatedImages/ScrollableImages'

export default function LandingPage() {
  return (
    <div> 
    <Header/>
    <Hero/>
    <ScrollableImages/>
    <AnimatedLogo/>
     <MainPlatformSection/>
     <StartSelling/>
     <MainComponent/>
     <CheckoutComponent/>
     <TrustedPartners/>
     <BusinessSection/>
     <Dashboard/>
     
     <Footer/>
     </div>
  )
}

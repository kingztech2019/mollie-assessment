import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/HeroSection'
import AnimatedImage from './components/animatedImages/ScrollableImages'
import { AnimatedLogo } from './components/animatedImages/AnimatedLogos'
import MainPlatformSection from './components/onePlatformSection/MainPlatformSection'
 import StartSelling from './components/startSelling/StartSelling'
 import MainComponent from './components/subscription/MainComponent'
import CheckoutComponent from './components/checkoutSection/CheckOutComponent'
import Footer from './components/footer/FooterComponent'
import { TrustedPartners } from './components/trustedPartners/TrustedPartners'
import BusinessSection from './components/businessSection/BusinessSection'
import Dashboard from './components/discoverDashboard/DiscoverDashboard'
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Hero/>
      <AnimatedImage/>
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
    
    
        // <div className="bg-gray-900 text-white min-h-screen">
        //   <MegaMenu />
        //   <main className="flex justify-center items-center h-full">
        //     <div className="text-center">
        //       <h1 className="text-5xl font-bold mb-4">Gymshark</h1>
        //       <p className="text-lg">Order #3526</p>
        //     </div>
        //   </main>
        // </div>
    
    
  )
}

export default App

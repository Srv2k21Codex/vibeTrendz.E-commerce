import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'



const Home = () => {
  return (
    <div>
        {/* hero component has mounted on home page */}
       
     <Hero/>
     <LatestCollection/>
     <BestSeller/>
     <OurPolicy/>
     <NewsletterBox/>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestCollection'



const Home = () => {
  return (
    <div>
        {/* hero component has mounted on home page */}
       
     <Hero/>
     <LatestCollection/>
    </div>
  )
}

export default Home

import React from 'react'
import Articles from '../components/Articles'
import Faqs from '../components/Faqs'
import Features from '../components/Features'
import FreeVsPro from '../components/FreeVsPro'
import Hero from '../components/Hero'
import JoinConvertly from '../components/JoinConvertly'
import Navbar from '../components/Navbar'
import Poster from '../components/Poster'
import Pricing from '../components/Pricing'
import Reviews from '../components/Reviews'
import Security from '../components/Security'
import SuppFormats from '../components/SuppFormats'
import Tools from '../components/Tools'
import Trust from '../components/Trust'
import Whyus from '../components/Whyus'


function Home({ isPro, user }) {
  return (
    <div>
      <Hero />
      <Trust />
      <Tools />
      <Whyus />
      <SuppFormats />
      <Security />
      <Features />
      <Articles />
      <Poster />
      <Reviews />
      {isPro ? <></> : <Pricing  user={user} />}
      <FreeVsPro />
      <Faqs />
      <JoinConvertly isPro={isPro} />
    </div>
  )
}

export default Home
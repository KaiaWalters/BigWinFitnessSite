import React from 'react'
import HeroBanner from '../components/HeroBanner'
import CarouselSection from '../components/Carousel'
import Section from '../components/Section'
import Navbar from '../components/Navbar'

const HomePage = () => {
    return (
       <>
           <HeroBanner/>
           <CarouselSection/>
           <Section/>
       </>
     )
}

export default HomePage
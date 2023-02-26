import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import AboutUs from './AboutUs/AboutUs'
import CustomCarousel from './Carousel/CustomCarousel'
import ContactUs from './ContactUs/ContactUs'
import Services from './Services/Services'

const HomePage = () => {
    const mode = useAppSelector(state=>state.mode);
    return (
        <div style={{ backgroundColor: `${!mode ? 'rgba(244, 244, 241,0.5)' : '#333'}`}}>
            <CustomCarousel />
            <AboutUs />
            <Services />
            <ContactUs />
        </div>
    )
}

export default HomePage
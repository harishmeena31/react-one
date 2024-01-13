import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/p3.jpg"
import img2 from "../assets/p4.jpg"

function Services() {
  return (
    <div className='services'>
        <Carousel
        infiniteLoop
        autoPlay
        showStatus={false} showArrows={false}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="Item1" />
                <p className='legend'>peer-to-peer</p>
            </div>

        </Carousel>
    </div>
  )
}

export default Services
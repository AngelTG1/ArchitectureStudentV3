import React from 'react'
import '../../assets/styles/LandingPages.css'
import images from '../../assets/Images/SOLO1.png'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'

function Presentation() {
  return (
    <div className='continer-landing'>
        <div class="content">
            <Title level="h1" text="ARCHITECTURE STUDIO" />
            <Title level="h3" text="DESIGN FOR THE FUTURE" />
            <Paragraph paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores" />
            <Button text="MORE INFO" />
        </div>

        <div class="Image">
            <img src={images} alt="hola" />
        </div>
    </div>
  )
}

export default Presentation;
import {TfiLayers} from 'react-icons/tfi'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {PiBrowsersBold} from 'react-icons/pi'
import {GiLightBulb} from 'react-icons/gi'

import './services.css'

function Services() {
  return (
    <section id='services'>
      <div className="container services-container">
        <div className='services-left'>
          <h1>1+</h1>
          <h4>Anni di esperienza lavorativa</h4>
          <small>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam repudiandae ea,
            aperiam inventore ducimus a quas vitae labore fugiat ipsum quasi ipsa eligendi,
            minus porro ipsam quis dolorem optio ab?
          </small>
        </div>
        <div className='services-right'>
          <h2>Jr. Full Stack Developer</h2>
          <div className='services-cards'>
            <div className='services-card'>
              <span><TfiLayers /></span>
              <h5>Product Design</h5>
              <a href="index.html">Scopri di più <BsFillArrowRightCircleFill /> </a>
            </div>

            <div className='services-card'>
              <span><PiBrowsersBold /></span>
              <h5>Product Design</h5>
              <a href="index.html">Scopri di più <BsFillArrowRightCircleFill /> </a>
            </div>

            <div className='services-card'>
              <span><GiLightBulb /></span>
              <h5>Product Design</h5>
              <a href="index.html">Scopri di più <BsFillArrowRightCircleFill /> </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
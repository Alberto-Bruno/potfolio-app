import CV from '../../assets/CV prova.pdf'
import {HiDownload} from 'react-icons/hi'
import AboutImage from '../../assets/avatar_8.jpg'

import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className='container about-container'>
        <div className='about-left'>
          <div className='about-portrait'>
            <img src={AboutImage} alt="aboutImage"/>
          </div>
        </div>
        <div className='about-right'>
          <h2>About Me</h2>
          <div className='about-cards'>
            {
              data.map(item =>(
                <Card key={item.id} className='about-card'>
                  <span className='about-cards-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, rem quibusdam quisquam delectus temporibus quas molestiae, enim explicabo obcaecati ipsa labore id dolorem natus voluptate totam aut recusandae atque saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat corrupti soluta vero illo aut maiores ipsa eius. Minus cum optio mollitia ex sapiente ea repudiandae eaque totam voluptatem aliquid?</p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About
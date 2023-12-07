
import Comics from '../../assets/Comics.png'
import Netflix from '../../assets/Netflix.png'
import Discord from '../../assets/Discord.png'
import Dropbox from '../../assets/Dropbox.png'
import Whatsapp from '../../assets/Whatsapp.png'
import Playstation from '../../assets/PlayStation.png'

import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import './projects.css'

function Projects() {
  return (
    <section id='projects'>
      <div className='container projects-container'>
        <div className='projects-head'>
          <h3>Outwork, Successful client products</h3>
          <div className='projects-head-right'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, nostrum excepturi, tenetur aperiam facere illo eum in doloribus ipsam quo et aspernatur nobis accusantium numquam natus. Est asperiores unde aliquid.</p>
            <a href='index.html'>Explore More <BsFillArrowRightCircleFill/></a>
          </div>
        </div>

        <div className='portfolio-projects'>
          <article className='portfolio-project'>
            <span className='portfolio-project-image'>
              <img src={Discord} alt="" />
            </span>
            <div className='portfolio-cta'>
              <a href="https://github.com/Alberto-Bruno/htmlcss-discord" className='btn primary'>Github</a>
              <a href="https://github.com/" className='btn light'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio-project'>
            <span className='portfolio-project-image'>
              <img src={Dropbox} alt="" />
            </span>
            <div className='portfolio-cta'>
              <a href="https://github.com/Alberto-Bruno/htmlcss-dropbox" className='btn primary'>Github</a>
              <a href="https://github.com/" className='btn light'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio-project'>
            <span className='portfolio-project-image'>
              <img src={Playstation} alt="" />
            </span>
            <div className='portfolio-cta'>
              <a href="https://github.com/Alberto-Bruno/htmlcss-playstation" className='btn primary'>Github</a>
              <a href="https://github.com/" className='btn light'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio-project'>
            <span className='portfolio-project-image'>
              <img src={Netflix} alt="" />
            </span>
            <div className='portfolio-cta'>
              <a href="https://github.com/Alberto-Bruno/vite-boolflix" className='btn primary'>Github</a>
              <a href="https://github.com/" className='btn light'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio-project'>
            <span className='portfolio-project-image'>
              <img src={Comics} alt="" />
            </span>
            <div className='portfolio-cta'>
              <a href="https://github.com/Alberto-Bruno/laravel-dc-comics" className='btn primary'>Github</a>
              <a href="https://github.com/" className='btn light'>Live Demo</a>
            </div>
          </article>
          <article className='portfolio-project'>
            <span className='portfolio-project-image'>
              <img src={Whatsapp} alt="" />
            </span>
            <div className='portfolio-cta'>
              <a href="https://github.com/Alberto-Bruno/vue-boolzapp" className='btn primary'>Github</a>
              <a href="https://github.com/" className='btn light'>Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
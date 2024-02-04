import './experience.css'
import {BiSolidBadgeCheck} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2> My Experience</h2>

      <div className='container experience-container'>
        <div className='experience-frontend'>
          <h3>Frontend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basic</small> 
              </div>
            </article>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience-backend'>
          <h3>Backend Development</h3>
          <div className='experience-content'>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience-details'>
              <BiSolidBadgeCheck className='experience-details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
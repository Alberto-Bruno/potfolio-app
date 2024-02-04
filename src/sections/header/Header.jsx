import HeaderImage from '../../assets/Photo profile.JPG'
import data from './data'
import './header.css'

function Header() {
  return (
    <header id='header'>
      <div className="container header-container">
        <div className='header-left'>
          <div>
          <h3>I'm</h3>
            <h1>Alberto<br/>Bruno</h1>
            <p>Lorem ipsum dolor sit, 
              amet consectetur adipisicing. 
              Odit magnam incidunt praesentium 
              autem quod consectetur nisi reiciendis fuga iusto animi, 
              suscipit provident dolorem facilis laborum 
              dolorum aperiam laboriosam ducimus sit.
            </p>
            <div className='cta'>
              <a href="#contact" className='btn primary'>Conoscimi di più</a>
              <a href="#projects" className='btn'>Lavoro</a>
            </div>
          </div>
        </div>

        <div className='header-right'>
          <div className='header-image'>
            <img className='image-bg' src={HeaderImage} alt="ImageProfile" />
          </div>
        </div>

        <div className="header-socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
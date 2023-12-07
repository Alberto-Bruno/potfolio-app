import HeaderImage from '../../assets/avatar_8.jpg'
import data from './data'
import './header.css'

function Header() {
  return (
    <header id='header'>
      <div className="container header-container">
        <div className='header-profile'>
          <img src={HeaderImage} alt="" />
        </div>
        <h3>dsdgsdg dfgdfg</h3>
        <p>Lorem ipsum dolor sit, 
          amet consectetur adipisicing. 
          Odit magnam incidunt praesentium 
          autem quod consectetur nisi reiciendis fuga iusto animi, 
          suscipit provident dolorem facilis laborum 
          dolorum aperiam laboriosam ducimus sit.
        </p>
        <div className='header-cta'>
          <a href="#contact" className='btn primary'>Conoscimi di più</a>
          <a href="#projects" className='btn light'>Lavoro</a>
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
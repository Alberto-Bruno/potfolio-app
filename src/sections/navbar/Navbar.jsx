import Logo from '../../assets/avatar_8.jpg'
import data from './data'
import {MdInvertColors} from 'react-icons/md'
import './navbar.css'

function Navbar() {
  return (
    <nav>
      <div className='container nav-container'>
        <a href="index.html" className='nav-logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav-menu'>
          {
            data.map
            (item => 
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
            )
          }
        </ul>
          <button id='theme-icon'><MdInvertColors /></button>
      </div>
    </nav>
  )
}

export default Navbar
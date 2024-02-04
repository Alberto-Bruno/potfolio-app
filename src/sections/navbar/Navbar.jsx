import Logo from '../../assets/Photo profile.JPG'
import data from './data'
import CV from '../../assets/CV prova.pdf'
import { IoEyeSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
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
          <a className='btn' href={CV}><IoEyeSharp />CV</a>

          <button id='open-menu-btn'><FaBars /></button>
          <button id='close-menu-btn'><IoMdClose /></button>
      </div>
    </nav>
  )
}

export default Navbar
import React,{useState} from 'react'
import logo from  "../images/logo.png"
import {Link} from "react-scroll"
import { HashLink } from 'react-router-hash-link';
function NavBar() {
  const[nav,setNav] = useState(false);

  const changeBackground=()=>{
    if(window.scrollY>=50){
      setNav(true);
    }
    else{
      setNav(false);
    }
  }
  window.addEventListener("scroll",changeBackground);
  return (
    <div>
      <nav className={nav ? "nav-active":"nav"}>
        <Link to='#' className='logo'>
          <img src={logo} alt="GYM" />
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for="menu-btn">
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
          <li> <HashLink to='#header'>Header</HashLink></li>
          <li> <HashLink to='#feature'>FEATURE</HashLink></li>
          <li> <HashLink to='#offer'>OFFER</HashLink></li>
          <li> <HashLink to='#classes'>CLASS</HashLink></li>
          <li> <HashLink to='#schedule'>SCHEDULE</HashLink></li>
          <li> <HashLink to='#expert'>EXPERT</HashLink></li>
          <li> <HashLink to='#about'>ABOUT US</HashLink></li>
          <li> <HashLink to='#contact'>CONTACT</HashLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

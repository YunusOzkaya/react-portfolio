import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-n.png'
import LogoSubtitle from '../../assets/images/sub_logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome,  faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub,faMedium} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img  src={LogoS} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact ="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact ="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nyunus-ozkaya/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/YunusOzkaya'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://medium.com/@nasuhan.yunus.ozkaya'>
                    <FontAwesomeIcon icon={faMedium} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogoS from '../../assets/images/wIcon.webp';
import LogoSubtitle from '../../assets/images/logo_sub.webp';
import LinkedIn from '../../assets/icons/linkedin.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='slogan goes here....' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact='true' activeclassname='active' to='/'>
                    {/* <svg version="1.1" aria-hidden="true" class="svg-inline--fa fa-house " role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="#4d4d4e">
                        <path d="M22.262 10.468c-3.39-2.854-9.546-8.171-9.607-8.225l-0.655-0.563-0.652 0.563c-0.062 0.053-6.221 5.368-9.66 8.248-0.438 0.394-0.688 0.945-0.688 1.509 0 1.104 0.896 2 2 2h1v6c0 1.104 0.896 2 2 2h12c1.104 0 2-0.896 2-2v-6h1c1.104 0 2-0.896 2-2 0-0.598-0.275-1.161-0.738-1.532zM14 20h-4v-5h4v5zM18 12l0.002 8c-0.002 0-3.002 0-3.002 0v-6h-6v6h-3v-8h-3.001c2.765-2.312 7.315-6.227 9.001-7.68 1.686 1.453 6.234 5.367 9 7.681 0 0-3 0-3-0.001z"></path>
                    </svg>
                    <svg version="1.1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="svg-inline--fa fa-house " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color="#4d4d4e">
                        <path d="M22.262 10.468c-3.39-2.854-9.546-8.171-9.607-8.225l-0.655-0.563-0.652 0.563c-0.062 0.053-6.221 5.368-9.66 8.248-0.438 0.394-0.688 0.945-0.688 1.509 0 1.104 0.896 2 2 2h1v6c0 1.104 0.896 2 2 2h12c1.104 0 2-0.896 2-2v-6h1c1.104 0 2-0.896 2-2 0-0.598-0.275-1.161-0.738-1.532zM14 20h-4v-5h4v5zM18 12l0.002 8c-0.002 0-3.002 0-3.002 0v-6h-6v6h-3v-8h-3.001c2.765-2.312 7.315-6.227 9.001-7.68 1.686 1.453 6.234 5.367 9 7.681 0 0-3 0-3-0.001z">
                        </path>
                    </svg> */}
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                    <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size='3x'
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/walidmohamed07/'>
                        {/* <svg width="100" height="100">
                            {LinkedIn}
                        </svg> */}
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Walid-Mohamed07'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/WalidMohamed07/'>
                        <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/walidmohamed07/'>
                        <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size='3x'
                className='hamburger-icon'
            />
        </div>
    )
}

export default Sidebar;
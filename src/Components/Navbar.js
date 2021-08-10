import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import logo from '../images/logo.png'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton()
    },[]);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav  className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt='logo'/>
                    </Link>
                    
                    < div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            < Link to='/om-oss' className='nav-links' onClick={closeMobileMenu}>
                                Om oss
                            </Link>
                        </li>
                         <li className='nav-item'>
                            < Link to='/vara-tjanster' className='nav-links' onClick={closeMobileMenu}>
                               Våra Tjänster
                            </Link>
                        </li>


                        <li className='nav-item'>
                            < Link to='/kvalitet-miljo' className='nav-links' onClick={closeMobileMenu}>
                                Kvalitet och Miljö 
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            < Link to='/kontakta-oss' className='nav-links' onClick={closeMobileMenu}>
                               Kontakta oss
                            </Link>
                        </li> 
                        
                        <li>
                            <Link to='/offert' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Få Offert
                            </Link>
                        </li>

                    </ul>
                    {button && <Button variant='outline-light'> FÅ OFFERT</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;

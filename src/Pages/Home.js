import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index"; import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';
import banner5 from '../images/banner5.jpg';
import bild from '../images/bild.png';
import service from '../images/service.png';
import './Home.css'


class Home extends React.Component {
    renderThumbs
    render() {
        return (
            <div className='home-container'>
                <Carousel showThumbs={false} autoPlay infiniteLoop interval='2000' animationHandler='fade'>
                    <div>
                        <img src={banner1} alt='banner' style={{ height: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <img src={banner2} alt='banner' style={{ height: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <img src={banner3} alt='banner' style={{ height: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <img src={banner4} alt='banner' style={{ height: '50vh', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <img src={banner5} alt='banner' style={{ height: '50vh', objectFit: 'cover' }} />
                    </div>
                </Carousel>
                <div className='home-info'>
                    <h2 className='info-child'>Vi är Målaresset</h2>
                    <p className='info-child'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum aliquet. Curabitur mattis imperdiet eleifend. Duis sed tortor erat. Ut odio arcu, iaculis ac magna luctus, suscipit lacinia ante. Maecenas vehicula urna mi. Sed sit amet finibus sapien. In tempor interdum tortor, at tincidunt purus gravida non. Nullam egestas risus id justo ullamcorper pharetra. Nulla facilisi. Aliquam arcu risus, dignissim at urna sit amet, semper finibus ante. Nam laoreet ultrices libero, vitae vestibulum est ultrices quis. </p>
                    <img className='info-child' src={bild} alt='wet paint' />
                </div>
                <div className='home-success'>
                    <div className='success-child'>
                        <FontAwesomeIcon icon={['fas', 'star']} size='3x' className='animate__animated animate__fadeInLeft' />
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='success-child'>
                        <FontAwesomeIcon icon='thumbs-up' size='3x' className='animate__animated animate__fadeInLeft' />
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='success-child'>
                        <FontAwesomeIcon icon='check-circle' size='3x' className='animate__animated animate__fadeInLeft' />
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='home-services'>
                    <h2 className='service-child'>Våra Tjänster</h2>
                    <div className='service-child'>
                        <Link to='/'> <img src={service} alt='tjanst-bild' /><div className='service-middle'><div className='text'>Rubrik</div></div></Link>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum</p>
                    </div>
                    <div className='service-child'>
                        <Link to='/'> <img src={service} alt='tjanst-bild' /><div className='service-middle'><div className='text'>Rubrik</div></div></Link>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum</p>
                    </div>
                    <div className='service-child'>
                        <Link to='/'> <img src={service} alt='tjanst-bild' /><div className='service-middle'><div className='text'>Rubrik</div></div></Link>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum</p>
                    </div>
                    <div className='service-child'>
                        <Link to='/'> <img src={service} alt='tjanst-bild' /><div className='service-middle'><div className='text'>Rubrik</div></div></Link>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum</p>
                    </div>
                    <div className='service-child'>
                        <Link to='/'> <img src={service} alt='tjanst-bild' /><div className='service-middle'><div className='text'>Rubrik</div></div></Link>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum</p>
                    </div>
                    <div className='service-child'>
                        <Link to='/'> <img src={service} alt='tjanst-bild' /><div className='service-middle'><div className='text'>Rubrik</div></div></Link>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default Home;



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import banner1 from '../images/Banner(1).png';
import banner2 from '../images/Banner(2).png';
import banner3 from '../images/Banner(3).png';
import bild from '../images/bild.png';
// import service from '../images/service.png';
import renoveringspaket from '../images/Spackling.jpg';
import apartment from '../images/lägenhetMålning.jpg';
import window2 from '../images/window2.jpg';
import kitchen from '../images/kitchen.jpg';
import tak from '../images/takMålning.jpg';
import spray from '../images/spray.jpg';
import tapet from '../images/tapetShivan.jpg';

import './Home.css'

class Home extends React.Component{
    renderThumbs
    render(){
        return (
            <div className='home-container'> 
                <Carousel showThumbs={false} autoPlay>
                    <div>
                        <img src={banner1} alt='banner '/>
                    </div>
                    <div>
                        <img src={banner2} alt='banner' />
                    </div>
                    <div>
                        <img src={banner3} alt='banner' />
                    </div>
                </Carousel>
                <div className='home-info'>
                    <h2 className='info-child'>Målare är coola</h2>
                    <p className='info-child'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus vitae tortor bibendum aliquet. Curabitur mattis imperdiet eleifend. Duis sed tortor erat. Ut odio arcu, iaculis ac magna luctus, suscipit lacinia ante. Maecenas vehicula urna mi. Sed sit amet finibus sapien. In tempor interdum tortor, at tincidunt purus gravida non. Nullam egestas risus id justo ullamcorper pharetra. Nulla facilisi. Aliquam arcu risus, dignissim at urna sit amet, semper finibus ante. Nam laoreet ultrices libero, vitae vestibulum est ultrices quis. </p>
                    <img className='info-child' src={bild} alt='wet paint'/>
                </div>
                <div className='home-success'>
                    <div className='success-child'>
                        <FontAwesomeIcon icon={['fas','star']} size='3x'/>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='success-child'>
                        <FontAwesomeIcon icon='thumbs-up' size='3x'/>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='success-child'>
                        <FontAwesomeIcon icon='check-circle' size='3x'/>
                        <h3>Rubrik</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='home-services'>
                    <h2 className='service-child'>Våra Tjänster</h2>
                    <div className='service-child'>
                       <Link to='/'> <img src={renoveringspaket} alt='tjanst-bild'/><div className='service-middle'><div className='text'>Läs mer</div></div></Link>
                        <h3>Målaressets renoveringspaket</h3>
                    </div>
                    <div className='service-child'>
                       <Link to='/vara-tjanster'> <img src={apartment} alt='tjanst-bild' /><div className='service-middle'><div className='text'>Läs mer</div></div></Link>
                        <h3>Lägenhetsmålning</h3>
                    </div>
                    <div className='service-child'>
                       <Link to='/vara-tjanster'> <img src={tapet} alt='tjanst-bild'/><div className='service-middle'><div className='text'>Läs mer</div></div></Link>
                        <h3>Tapetsering</h3>
                    </div>
                    <div className='service-child'>
                       <Link to='/vara-tjanster'> <img src={tak} alt='tjanst-bild'/><div className='service-middle'><div className='text'>Läs mer</div></div></Link>
                        <h3>Tak Målning</h3>
                    </div>
                    <div className='service-child'>
                       <Link to='/vara-tjanster'> <img src={window2} alt='tjanst-bild'/><div className='service-middle'><div className='text'>Läs mer</div></div></Link>
                        <h3>Fönstermålning</h3>
                    </div>
                    <div className='service-child'>
                       <Link to='/vara-tjanster'> <img src={kitchen} alt='tjanst-bild'/><div className='service-middle'><div className='text'>Läs mer</div></div></Link>
                        <h3>Total renovering</h3>
                    </div>
                    <div className='service-child'>
                       <Link to='/vara-tjanster'> <img src={spray} alt='tjanst-bild'/><div className='service-middle'><div className='text'>Läs mer</div></div></Link>
                        <h3>Sprutmålning</h3>
                    </div>
                    
                </div>
            </div>
            )
    }
}
export default Home;



import  Button  from 'react-bootstrap/Button';
import React from 'react';
import '../App.css';

import './ServiceSection.css';
import { Link } from 'react-router-dom';
function ServiceSection() {
  return (
    <div className='service-container'>

      <p>Behöver du rådgivning?</p>

      <p>Kontakta oss för ett kostnadsfritt hembesök</p>
      <div className='service-btns' >
        <Link to='/kontakta-oss'><Button variant='outline-light'>
          Kontakta oss
        </Button></Link>
      </div>
    </div>
  );
}

export default ServiceSection;


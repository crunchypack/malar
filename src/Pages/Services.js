import '../App.css';
import React from 'react'
import ServiceCards from '../Components/ServiceCards';
import ServiceSection from '../Components/ServiceSection';

class Services extends React.Component {
    render(){
        return (
            <React.Fragment>     
                <ServiceSection/>
                <ServiceCards/>
            </React.Fragment>
        )
    }
    
}

export default Services;
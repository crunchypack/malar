import '../App.css';
import React from 'react'
import ServiceCards from '../Components/ServiceCards';
import Banner from '../Components/Banner';
import serviceBanner from '../images/ServiceCard.jpg';

class Services extends React.Component {
    render(){
        return (
            <React.Fragment>     
                <Banner title="Behöver du rådgivning?" mainTitle="Kontakta oss för ett kostnadsfritt besök" banner={serviceBanner} text='hahhahaha' button={true}/>
                <ServiceCards/>
            </React.Fragment>
        )
    }
    
}

export default Services;
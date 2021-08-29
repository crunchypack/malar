import '../App.css';
import React from 'react'
import ServiceCards from '../Components/ServiceCards';
import Banner from '../Components/Banner';
import serviceBanner from '../images/ServiceCard.jpg';
import maleri from '../images/maleriforetagen.png';
import nojd from '../images/nojdkund.png';

class Services extends React.Component {
    render(){
        return (
            <React.Fragment>     
                <Banner title="Behöver du rådgivning?"
                 mainTitle="Kontakta oss för ett kostnadsfritt besök"
                  banner={serviceBanner} text='Målaresset lämnar gärna en offert på önskade arbeten. Klicka på "kontakta oss" för att komma till formuläret, ange dina kontaktuppgifter och beskriv så utförligt du kan, dina önskemål, visioner och tankar. Vi lovar att återkomma så fort vi kan.'
                   button={true}
                   nojd={nojd} 
                   Malforetag={maleri} 
                   middle={true}
                   />
                <ServiceCards/>
            </React.Fragment>
        )
    }
    
}

export default Services;
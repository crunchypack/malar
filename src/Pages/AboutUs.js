import React from 'react';
import Banner from '../Components/Banner';
import aboutBanner from '../images/about.jpg';

class AboutUs extends React.Component{
    
    render(){
        let text = "Företaget har ärvts i 5 generationer och lyckats innovera samt anpassa sig till dagens omständiga samhälle.";
        return(
            <Banner title="Grundad 1899" mainTitle="Över 100 års erfarenhet" text={text} banner={aboutBanner}/>
        )
    }
}
export default AboutUs;
import React from 'react';
import alcro from '../images/alcro.svg';
import caparol from  '../images/caparol.png';
import jotuin from '../images/jotun.svg';
import teknos from '../images/teknos.svg'
import colorama from '../images/colorama.png';
import nordsjo from '../images/nordsjo.png';
import flugger from '../images/flugger.png';

class Partners extends React.Component{
    render(){
        return(
            <section id='partner-banner'>
                <h2>Våra samarbetspartners</h2>
                <div className='partner-images'>
                <img src={flugger} alt='Flugger logga'/>
                <img src={jotuin} alt='Jotun logga'/> 
                <img src={colorama} alt='Colorama logga'/>
                <img src={alcro} alt='Alcro logga'/>
                <img src={caparol} alt='Caparol logga'/>

                              
                <img src={teknos} alt='Ljungdalhs Färg logga'/>
                <img src={nordsjo} alt='Nordsjö logga'/>
                </div>
                
            </section>
        )
    }
}
export default Partners;
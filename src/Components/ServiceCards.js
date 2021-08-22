import React from 'react';
import CardItemLink from './CardItemLink';
import CardItem from './CardItem';
import './ServiceCard.css';
import serviceCard from '../images/ServiceCard.jpg';
import sprayPaint from '../images/SprayPaint.jpg';
import rollerPaint from '../images/RollerPaint.jpg';
import totalRenovering from'../images/TotalRenovering.jpg';
import tapet from '../images/Tapet.jpg';
import roof from '../images/roof.jpg';
import window from '../images/window.jpg';
function ServiceCards() {
    return (
        <div className='cards'>
             <h1>
            Våra tjänster</h1>  
            <p>Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum. ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.
                </p>
            
            <div className='cards_container'>
                <div className='cards_wrapper'>
                <CardItemLink 
                        src={serviceCard}
                        text='För att förenkla vårt erbjudande har vi delat in våra tjänster i tre olika renoveringspaket gällande pris och finish. Självklart gäller våra riktlinjer för ”Garanterat Hantverk” oavsett vilket paket du beställer.
                        Klicka på bilden för att läsa mer.'
                        label='Renoveringspaket'
                        path='/renoveringspaket'
                        />
                    <ul className='cards_items'>
                        <CardItem
                        src={sprayPaint}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Sprutmålning'
                        path='/vara-tjanster'
                        />
                         <CardItem
                        src={rollerPaint}
                        text="Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum."
                        label='Lägenhetsmålning'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem 
                        src={tapet}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Tapetsering'
                        />
                         <CardItem
                        src={roof}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Takmålning'
                        />
                        </ul>
                        <ul className='cards_items'>
                        <CardItem
                        src={totalRenovering}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Total Renoverig'
                        />
                         <CardItem
                        src={window}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Fönster målning'
                        />
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;

import React from 'react';
//import CardItemLink from './CardItemLink';
import CardItem from './CardItem';
import './ServiceCard.css';
import ServiceCard from '../images/ServiceCard.jpg';
function ServiceCards() {
    return (
        <div className='cards1'>
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
            
            <div className='cards_container1'>
                <div className='cards_wrapper1'>
                    
                    <ul className='cards_items1'>
                        <CardItem
                        src={ServiceCard}
                        text='Målaresset har en gedigen erfarenhet av utomhusmålning.
                        Vi målar på trä, puts, kalk m.m. Som i alla projekt är underbehandligen viktigast för det slutgiltliga resulatet.
                        Vi målar allt från stora bostadsområden, nyproducerade villor till sommarstugor.
                        Vi hjälper er att ta fram de bästa produkterna för ett långsiktigt resultat..'
                        label='Utvändig Målning'
                        path='/malaresset/vara-tjanster'
                        />
                        <CardItem
                        src={ServiceCard}
                        text='Beskrivning.'
                        label='Utvändig Målning'
                        path='/vara-tjanster'
                        />
                         <CardItem
                        src={ServiceCard}
                        text="Beskrivning."
                        label='Lägenhetsmålning'
                        />
                    </ul>
                    <ul className='cards_items1'>
                        <CardItem 
                        src={ServiceCard}
                        text='Beskrivning.'
                        label='Tapetsering'
                        />
                        <CardItem
                        src={ServiceCard}
                        text='Beskrivning.'
                        label='Utvändig Målning'
                        path='/vara-tjanster'
                        />
                         <CardItem
                        src={ServiceCard}
                        text='Beskrivning.'
                        label='Takmålning'
                        />
                        </ul>
                        <ul className='cards_items1'>
                        <CardItem
                        src={ServiceCard}
                        text='Beskrivning.'
                        label='Takmålning'
                        />
                        <CardItem
                        src={ServiceCard}
                        text='Beskrivning.'
                        label='Utvändig Målning'
                        path='/vara-tjanster'
                        />
                         <CardItem
                        src={ServiceCard}
                        text='Beskrivning.'
                        label='Tvätt av hus och fasader'
                        />
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;

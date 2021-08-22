import React from 'react';
import CardItemLink from './CardItemLink';
import CardItem from './CardItem';
import './ServiceCard.css';
import ServiceCard from '../images/ServiceCard.jpg';
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
                        src={ServiceCard}
                        text='För att förenkla vårt erbjudande har vi delat in våra tjänster i tre olika renoveringspaket gällande pris och finish. Självklart gäller våra riktlinjer för ”Garanterat Hantverk” oavsett vilket paket du beställer.
                        Klicka på bilden för att läsa mer.'
                        label='Renoveringspaket'
                        path='/renoveringspaket'
                        />
                    <ul className='cards_items'>
                        <CardItem
                        src={ServiceCard}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Utvändig Målning'
                        path='/vara-tjanster'
                        />
                         <CardItem
                        src={ServiceCard}
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
                        src={ServiceCard}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Tapetsering'
                        />
                         <CardItem
                        src={ServiceCard}
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
                        src={ServiceCard}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Total Renoverig'
                        />
                         <CardItem
                        src={ServiceCard}
                        text='Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. In fringilla
                        convallis felis vel feugiat. Mauris gravida elit facilisis,
                        cursus ante ac, accumsan enim. Mauris ut odio fringilla,
                        dapibus dui quis, tristique sapien. Etiam a vestibulum libero,
                        eget mattis nisl. Vestibulum tincidunt aliquet vestibulum.'
                        label='Tvätt av hus och fasader'
                        />
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;

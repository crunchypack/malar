import React from 'react';
//import CardItemLink from './CardItemLink';
import CardItem from './CardItem';
import './ServiceCard.css';
import ServiceCard from '../images/ServiceCard.jpg';
import spray from '../images/spray-paint.jpg';
import roof from '../images/roof.jpg';
import wallPaint from '../images/wall-paint.jpg';
import window from '../images/window.jpg';
import total from '../images/total.jpg';
import tapet from '../images/tapet.jpg';
import floor from '../images/floor.png';
function ServiceCards() {
    return (
        <div className='cards1'>
             <h1>
            Våra tjänster</h1>  
            <p>Målaresset i Göteborg är en säker och trygg partner, oavsett storlek på projekt.
                 Tack vare vår långa erfarenhet i branschen och dokumenterade yrkesbevis håller vi alltid en hög standard på de arbeten vi utför.
                 Vårt breda nätverk av olika profesionella hantverkargrupper säkerställer att vi kan erbjuda dig en trygg resa från start till slut i ditt projekt.
                 Vi hjälper dig med allt inom måleri, tapetsering, entreprenad och plåtmålning.
                 För att förenklar vårt erbjudande till dig som kund har vi tagit fram <b>Målaressets renoveringspaket.</b>
                   <ul>
                       <li>Brons</li><li>Silver</li><li>Guld</li>
                   </ul>
                    Välj det paket som passar dig bäst gällande pris och behandlingar som ska ingå i arbetet.
                </p>
            
            <div className='cards_container1'>
                <div className='cards_wrapper1'>
                    
                    <ul className='cards_items1'>
                    <CardItem
                        src={total}
                        text='Vi tar gärna totalansvaret över hela renoveringsprojektet, från idé till slutbesiktning.
                        Med vårt breda kontaktnät av entreprenörer inom VVS, el, bygg m.m har vi de förutsättningarna som krävs för att ge dig det bästa resultatet.
                        Med oss som ansvariga över hela projektet blir din roll som beställare enklare, tryggare och mer hanterligt.
                        Vi sköter projekteringen och samordningen mellan de olika hantverkargrupperna och du får en kontaktperson som förser dig med den information du önskar och behöver.'
                        label='Totelentrepenad'
                        />
                        <CardItem
                        src={ServiceCard}
                        text='Målaresset har en gedigen erfarenhet av utomhusmålning.
                        Vi målar på trä, puts, kalk m.m. Som i alla projekt är underbehandligen viktigast för det slutgiltiga resultatet.
                        Vi målar allt från stora bostadsområden, nyproducerade villor till sommarstugor.
                        Vi hjälper er att ta fram de bästa produkterna för ett långsiktigt resultat.'
                        label='Fasadmålning'
                        path='/malaresset/vara-tjanster'
                        />
                        <CardItem
                        src={ServiceCard}
                        text='Att tvätta och sköta om sin villas fasad och tak lyfter husets utseende och får området att se trevligare ut.
                        Dessutom så förlängs fasadens livslängd och slitaget minskar.'
                        label='Fasadtvätt'
                        path='/vara-tjanster'
                        />
                    </ul>
                    <ul className='cards_items1'>
                    <CardItem
                        src={wallPaint}
                        text="Målaresset tar hand om hela målningsprojektet.
                         Förarbetet är otroligt viktigt och avgörande för slutresultatet, vi är noggranna med att tvätta väggarna med målartvätt för att avlägsna smuts och fett.
                         Innan vi målar är vi noggranna med att spackla och slipar ytorna för att de ska bli jämna och släta.
                         Vi utför alla våra målningsuppdrag med största noggrannhet och med en hög standard."
                        label='Lägenhetsmålning'
                        />
                        <CardItem 
                        src={tapet}
                        text='När det ska tapetseras är det mycket att tänka på för att få ett bra slutresultat.
                         Grundarbetet är det mest tidskrävande momentet där erfarenhet är av stor betydelse.
                         Vi sätter upp alla tapeter oavsett pris och design med största omsorg och noggrannhet.'
                        label='Tapetsering'
                        />
                        <CardItem
                        src={roof}
                        text='Trasiga och slitna tak är en vanlig anledning till fuktskador.
                         Plåttak måste målas om med jämna mellanrum för att undvika rostangrepp.
                         Med rätt underhåll förlänger du livslängden på ditt tak och ökar skyddet mot fuktskador.
                         Vi på Målaresset har lång erfarenhet av att utföra både reparationer och målning på alla typer av tak, såväl plåt som betongpannor. '
                        label='Takmålning'
                        path='/vara-tjanster'
                        />
                        </ul>
                        <ul className='cards_items1'>
                        <CardItem
                        src={window}
                        text='Fönster är svårt utsatta för temperaturväxlingar i det svenska klimatet och det är viktigt med ordentlig och profesionellt underhåll innan stommen tar skada.
                         Om det finns möjlighet renoverar vi dina fönster i vår verkstad eller så gör vi det på plats.'
                        label='Fönstermålning'
                        />
                        <CardItem
                        src={spray}
                        text='Sprutmålning kräver noggrannhet och teknisk kunskap av utföraren.
                         För att få till fina och släta ytor sprutmålar vi dörrar, paneltak, köksluckor m.m. '
                        label='Sprutmålning'
                        />
                        <CardItem
                        src={floor}
                        text='Målaresset i Göteborg målar garagegolv, industrigolv och lagergolv.
                         Epoxigolv och dess fogfria beläggning skapar en slitstark yta som klarar av miljöer med mycket trafik och även när det är tungt.
                         Målade epoxigolv används även i offentliga miljöer, butiker och personalutrymmen.'
                        label='Epoximålning'
                        path='/vara-tjanster'
                        />
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;

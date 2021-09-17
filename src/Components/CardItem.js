import React from 'react'

import './ServiceCard.css';

function CardItem(props) {
    return (
        <>
            <li className='cards_item1'>
                <div className='cards_item_link1'>
                    <figure className='cards_item_pic-wrap1'>
                        <img src={props.src} alt='Service ' className='cards_item_img1'/>
                    </figure>
                    <div className='cards_item_info1'>
                        <h3><strong>{props.label}</strong></h3>
                        <h6 className='cards_item_text1'>
                            {props.text}
                        </h6>
                    </div>
                </div>
            </li>
        </>
    );
}
export default CardItem;
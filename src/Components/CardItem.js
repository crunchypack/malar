import React from 'react'

import './ServiceCard.css';

function CardItem(props) {
    return (
        <>
            <li className='cards_item'>
                <div className='cards_item_link'>
                    <figure className='cards_item_pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='Service ' className='cards_item_img'/>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>
                            {props.text}
                        </h5>
                    </div>
                </div>
            </li>
        </>
    );
}
export default CardItem;
import React from 'react'

import './ServiceCard.css';

function CardItem(props) {
    return (
        <>
            <li className='cards_item1'>
                <div className='cards_item_link1'>
                    <figure className='cards_item_pic-wrap1' data-category={props.label}>
                        <img src={props.src} alt='Service ' className='cards_item_img1'/>
                    </figure>
                    <div className='cards_item_info1'>
                        <h5 className='cards_item_text1'>
                            {props.text}
                        </h5>
                    </div>
                </div>
            </li>
        </>
    );
}
export default CardItem;
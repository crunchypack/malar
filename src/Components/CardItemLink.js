import React from 'react'
import {Link} from 'react-router-dom';
import './ServiceCard.css';

function CardItemLink(props) {
    return (
        <>
            <li className='cards_item_link1'>
                <Link className='cards_item_link1' to={props.path}>
                    <figure className='cards_item_pic-wrap1' data-category={props.label}>
                        <img src={props.src} alt='Service ' className='cards_item_img1'/>
                    </figure>
                    <div className='cards_item_info1'>
                        <h5 className='cards_item_text1'>
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    );
}
export default CardItemLink;

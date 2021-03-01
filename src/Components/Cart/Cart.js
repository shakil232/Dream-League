
import React from 'react';
import './Cart.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClipboard, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  const cart = props.cart
    return (
        <div>
             <div className="cart mt-3">
                <h5 className="review "><i>
                <FontAwesomeIcon className="clipbboard" icon={faClipboard} />Selected Player Summary </i></h5>
                <h5 id="counter"><i>Total Select Player- <span className="counter">{cart.length}</span></i></h5>
                <p id="grand"><i>Total Transfer Amount- <span className="grand"></span></i></p>
                <button className="buttonn"> 
                <FontAwesomeIcon className="thumbs" icon={faThumbsUp} />Submit</button>
             </div>

        </div>
    );
};

export default Cart;
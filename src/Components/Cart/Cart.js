
import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div>
             <div className="cart mt-3">
                <h5 className="review "><i>Select Players Review </i></h5>
                <h5 id="counter"><i>Total Select Player- <span className="counter"></span></i></h5>
                <p id="grand"><i>Total Transfer Amount- <span className="grand"></span></i></p>
                <button>Players Review</button>
             </div>

        </div>
    );
};

export default Cart;
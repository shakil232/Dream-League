
import React from 'react';
import './Cart.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
  const cart = props.cart
  const GrandTransfer = cart.reduce((sum, totalSum) => sum + totalSum.salary, 0)
  return (
    <div>
      <div className="cart mt-3">
        <h5 className="review "><i>
          <FontAwesomeIcon className="clipbboard" icon={faClipboard} />Selected Player Summary </i></h5>
        <h5 id="counter"><i>Total Select Player- <span className="counter mt-5">{cart.length}</span></i></h5>
        <p id="grand"><i>Total Transfer Amount- $ {GrandTransfer}<span className="grand mt-5"></span></i></p>
        <button className="buttonn">
          <FontAwesomeIcon className="thumbs" icon={faThumbsUp} />Submit</button>
      </div>

      <div className="players-list">
        <div className="salary-lish mt-5">
          <div className="players-name">
            <h4>Name</h4>
          </div>
          <div className="players-salary">
            <h4>Salary</h4>
          </div>
        </div>


        <div className="added-players">
          <ul>
            {
              cart.map(res => <li> <span id="name">{res.name}</span> <span id="salary">$ {res.salary}</span></li>)
            }
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Cart;
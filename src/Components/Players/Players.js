import React from 'react';
import './Players.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faPlusCircle, faInfoCircle, faUserCircle, faFlag, faGamepad, faEnvelope, faSocks, faPhoneVolume, faFutbol } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
     const { image, salary, name, nationality, currentClub, position, PreferredFoot, phone, email,  } = props.player;
    return (
        <div className="player-container ">
            
            <div className="player-profile">

                <div className="player-image">
                    <img src={image} alt="" />
                </div>

                <div className="player-details mt-3">
                    <p className="salary"><i>Transfer-Value <span className="value">${salary}</span></i></p>
                    <h5 >
                    <FontAwesomeIcon className="font-icon" icon={faUserCircle} /><i className="name">{name}</i></h5>

                    <div className="rating">
                        <p>
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star-half" icon={faStarHalfAlt} />
                        </p>
                    </div>

                    <div className="player-info mt-3">

                        <div className="info-left">
                            <p className="nationality"><i>
                            <FontAwesomeIcon className="font-icon"  icon={faFlag} />{nationality}</i></p>
                            <p className="currentClub"><i>
                            <FontAwesomeIcon className="font-icon"  icon={ faGamepad} />{currentClub}</i></p>
                            <p className="email"> <i>
                            <FontAwesomeIcon className="font-icon"  icon={faEnvelope} />{email}</i></p>
                        </div>
                        <div className="info-right">
                            <p className="position"> <i>
                            <FontAwesomeIcon className="font-icon"  icon={faFutbol} /> {position}</i></p>
                            <p className="PreferredFoot">  <i>
                            <FontAwesomeIcon className="font-icon"  icon={faSocks} />{PreferredFoot}</i></p>
                            <p className="phone">  <i>
                            <FontAwesomeIcon className="font-icon"  icon={faPhoneVolume} />{phone}</i></p>
                        </div>

                    </div>
                    <div className="buttons">
                    <button
                        className="button"
                        onClick={ ()=> props.handelAddPlayer(props.player)}
                        >
                            <i><FontAwesomeIcon icon={faPlusCircle} /> 
                        add to cart</i>
                    </button>
                </div>

                </div>
                

            </div>

        </div>
    );
};

export default Players;
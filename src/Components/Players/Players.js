import React from 'react';
import './Players.css'

const Players = (props) => {
    console.log(props.player)
    const { image, name } = props.player
    return (
        <div className="player-container">

            <div className="player-profile">
                <img src={image} alt="" />
                <h5 className="name"> {name}</h5>
            </div>

        </div>
    );
};

export default Players;
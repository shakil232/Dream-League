
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import fakeData from '../../fakeData/Data.json'
import Players from '../Players/Players';
import Cart from '../Cart/Cart';

const Dashboard = () => {

    const [players, setPlayers] = useState([]);
    const [ cart , setCart ] = useState([])

    useEffect(() => {
        setPlayers(fakeData)
    }, [])
    
    const handelAddPlayer = (players) => {
        const totalPlayers = [...cart, players];
        setCart(totalPlayers);
    };

    return (

        <div className=" dashboard-container ">
            {/* start playersDiv */}
            <div className="players">
                {
                    players.map(player => <Players 
                        player={player}  
                        handelAddPlayer={handelAddPlayer}
                    ></Players>)
                }
            </div>

            {/* start cartDiv */}
            <div>
               <Cart cart={cart}></Cart>
            </div>
            
            
          
            

        </div>
    );
};

export default Dashboard;
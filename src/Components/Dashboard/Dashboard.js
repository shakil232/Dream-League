
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import fakeData from '../../fakeData/Data.json'
import Players from '../Players/Players';
import Cart from '../Cart/Cart';

const Dashboard = () => {

    const [players, setPlayers] = useState([]);
    // const [ cart , setCart ] = useState([])
    useEffect(() => {
        setPlayers(fakeData)
    }, [])

    return (

        <div className=" dashboard-container ">
            {/* start playersDiv */}
            <div className="players">
                {
                    players.map(player => <Players player={player}></Players>)
                }
            </div>
            {/* start cartDiv */}
            <div className="cart">
               <Cart></Cart>
            </div>
            
            
          
            

        </div>
    );
};

export default Dashboard;
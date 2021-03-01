
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import fakeData from '../../fakeData/Data.json'
import Players from '../Players/Players';

const Dashboard = () => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(fakeData)
    }, [])

    return (

        <div dashboard-container >
            {/* start playersDiv */}
            <div className="players">
                {
                    players.map(player => <Players player={player}></Players>)
                }
            </div>

            {/* start CartDiv */}
            <div>
                <h3>cart</h3>
            </div>

        </div>
    );
};

export default Dashboard;
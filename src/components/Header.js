import React from 'react';
import './header.css';
import Astronauta from '../assets/astronauta.png';


const Header = () => {
    return (
        <div className="header">
            
            <div className="venuspizza">
                <h1>VenusPizza</h1>
                <h2>Una pizza de otro planeta</h2>
                <button className="btnyellow">
                    Arma tu pizza
                </button>
            </div>
            <div className="astronauta"><img src={Astronauta} alt="Astronauta" width="100%"/></div>
        </div>
    );
}

export default Header;

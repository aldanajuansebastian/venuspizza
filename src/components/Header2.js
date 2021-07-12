import React from 'react';
import './header2.css';
import Astronauta from '../assets/astronauta.png';
import Space from '../assets/spacebg.jpg'


const Header2 = () => {
    return (
        <div className="header2">
            <img src={Space} alt="Fondo espacio" className="spacebg1"/>
            <div className="venuspizza2">
                <h1>VenusPizza</h1>
            </div>
            <div className="astronauta2"><img src={Astronauta} alt="Astronauta" width="100%"/></div>
        </div>
    );
}

export default Header2;
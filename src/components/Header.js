import React from 'react';
import './header.css';
import Astronauta from '../assets/astronauta.png';
import {Link} from 'react-scroll';
import Space from '../assets/spacebg.jpg'


const Header = () => {
    return (
        <div className="header">
            <img src={Space} alt="Fondo espacio" className="spacebg"/>
            <div className="venuspizza">
                <h1>VenusPizza</h1>
                <h2>Una pizza de otro planeta</h2>
                <button className="btnyellow" type="button"><Link to="customize" smooth={true} duration={1000}>
                    Arma tu pizza
                </Link></button>
            </div>
            <div className="astronauta"><img src={Astronauta} alt="Astronauta" width="100%"/></div>
        </div>
    );
}

export default Header;

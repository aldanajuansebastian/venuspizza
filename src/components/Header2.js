import React from 'react';
import './header2.css';
import Astronauta from '../assets/astronauta.png';
import { Link } from 'react-router-dom';


const Header2 = () => {
    return (
        <div className="header2">
            <Link to="/"><div className="venuspizza2"><h1>VenusPizza</h1></div>
                
            </Link>
            <div className="astronauta2"><img src={Astronauta} alt="Astronauta" width="100%"/></div>
        </div>
    );
}

export default Header2;
import React from 'react';
import './header.css';
import Astronauta from '../assets/astronauta.png';
import {Link} from 'react-scroll';
import Space from '../assets/spacebg.jpg'
import { motion } from 'framer-motion';


const Header = () => {
    return (
        <div className="header">
            <img src={Space} alt="Fondo espacio" className="spacebg" />
            <div className="venuspizza">
                <h1>VenusPizza</h1>
                <h2>Una pizza de otro planeta</h2>
                <motion.button whileHover={{ scale: 1.1 }} className="btnyellow" type="button"><Link to="customize" smooth={true} duration={1000}>
                    Arma tu pizza
                </Link></motion.button>
            </div>
            <motion.div className="astronauta" whileTap={{scale:0.01, rotate:560}} transition={{duration: 3}}><img src={Astronauta} alt="Astronauta" width="100%"/></motion.div>
        </div>
    );
}

export default Header;

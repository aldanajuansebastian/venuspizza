import React from 'react';
import './header.css';
import Astronauta from '../assets/astronauta.png';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';


const Header = () => {
    return (
        <div className="header">
            <div className="venuspizza">
                <h1>Venus Pizza</h1>
                <h2>Una pizza de otro planeta</h2>
                <Link to="/personalizar" smooth={true} duration={1000}>
                    <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} className="btnyellow" type="button">
                        Arma tu pizza
                    </motion.button>
                </Link>
            </div>
            <motion.div className="astronauta" animate={{scale:[1, 0.01, 1.2]}} transition={{duration: 10, delay:1}}>
                <motion.img animate={{rotate:720}} transition={{duration:10}} src={Astronauta} alt="Astronauta" width="100%"/>
            </motion.div>
        </div>
    );
}

export default Header;

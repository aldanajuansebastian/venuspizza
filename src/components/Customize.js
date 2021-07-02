import React from 'react';
import './customize.css';
import Queso from '../assets/BaseCheese.png';
import Albahaca from '../assets/Basil.png';
import Champinion from '../assets/Mushroom.png';
import Cebolla from '../assets/Olive.png';
import Pinia from '../assets/Pineapple.png';
import Tomate from '../assets/Tomato.png';
import Base from '../assets/PizzaBase.png';
import {motion} from 'framer-motion';
import { useHistory } from "react-router-dom";

const Customize = ({ingredients, setIngredients}) => {

    let history = useHistory();

    const onChange = (event, name) => {
        console.log(localStorage);
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients", JSON.stringify(newIngredients))
    }

    return (
        <section className="customize" id="customize">
            <div className="image">
                <h2>Tu pizza:</h2>
                <div className="ingredientImage">
                    <motion.div 
                        initial={{scale:0}}
                        animate={{
                            scale: ingredients["queso"] ? 1: 0
                        }}
                        transition={{duration:0.5}}
                    >
                        <img src={Queso} className="cheese" alt="Pizza Cheese" />
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients["albahaca"] ? 100 : -100,
                            opacity: ingredients["albahaca"] ? 1 : 0
                        }}
                        transition={{duration:0.5}}
                    >
                        <img src={Albahaca} alt="Basil" className="ingredient"/>
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients["champinion"] ? 100 : -100,
                            opacity: ingredients["champinion"] ? 1 : 0
                        }}
                        transition={{duration:0.5}}
                    >
                        <img src={Champinion} alt="Mushroom"  className="ingredient"/>
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients["cebolla"] ? 100 : -100,
                            opacity: ingredients["cebolla"] ? 1 : 0
                        }}
                        transition={{duration:0.5}}
                    >
                        <img src={Cebolla} alt="Olive" className="ingredient"/>
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients["pinia"] ? 100 : -100,
                            opacity: ingredients["pinia"] ? 1 : 0
                        }}
                        transition={{duration:0.5}}
                    >
                        <img src={Pinia} alt="Pineapple"  className="ingredient"/>
                    </motion.div>

                    <motion.div 
                        initial={{opacity:0}}
                        animate={{
                            y: ingredients["tomate"] ? 100 : -100,
                            opacity: ingredients["tomate"] ? 1 : 0
                        }}
                        transition={{duration:0.5}}
                    >
                        <img src={Tomate} alt="Tomato" className="ingredient"/>
                    </motion.div>
                    
                    <img src={Base} alt="Base" width="100%"/>
                </div>
            </div>
            <div className="checkbox">
                    <label className="container">Queso
                        <input type="checkbox" onChange={(event)=> onChange(event.currentTarget.checked, "queso")}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">Albahaca
                        <input type="checkbox" onChange={(event)=> onChange(event.currentTarget.checked, "albahaca")}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">Champiñones
                        <input type="checkbox" onChange={(event)=> onChange(event.currentTarget.checked, "champinion")}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">Aros de cebolla
                        <input type="checkbox" onChange={(event)=> onChange(event.currentTarget.checked, "cebolla")}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">Piña
                        <input type="checkbox" onChange={(event)=> onChange(event.currentTarget.checked, "pinia")}/>
                        <span className="checkmark"></span>
                    </label>

                    <label className="container">Tomate
                        <input type="checkbox" onChange={(event)=> onChange(event.currentTarget.checked, "tomate")}/>
                        <span className="checkmark"></span>
                    </label>

                    <button className="btnyellow" onClick={() => history.push('/checkout')}>
                        Ordenar
                    </button>
                </div>

            
        </section>
    );
}

export default Customize;

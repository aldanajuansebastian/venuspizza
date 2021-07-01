import React, { useState } from "react";
import './checkout.css';
import { useHistory } from "react-router-dom";
import Check from '../assets/check.png';

const Checkout = ({ingredients}) => {

    let history = useHistory();

    const [success, setSuccess] = useState(false);

    return (
        <div className="checkout">
            <div className="tuorden">
            {success && (
                <div className="success">
                    <div className="check"><img src={Check} alt="success" width="100%"/></div>
                    <div className="confirmation">
                        <h2>Tu pedido fue recibido</h2>
                        <h4>Recibirás tu orden entre 30 y 40 minutos</h4>
                    </div>
                </div>
            )};
                <h1>Tu orden</h1>
                <h3>Una pizza con los siguientes ingredientes:</h3>
                
                {Object.keys(ingredients).map((ingredient) =>{
                    return (
                        ingredients[ingredient] && (
                        <h4>
                        •{" "}{" "}{ingredient[0].toUpperCase()}
                        {ingredient.substr(1)}
                        </h4>
                        )
                    );
                })}
                <button className="btnyellow" onClick={() => setSuccess(true)}>
                    Confirmar pedido
                </button>
                <button className="btnred" onClick={() => history.push("/")}>
                    Atrás
                </button>
            </div>

            
        </div>
    );
}

export default Checkout;

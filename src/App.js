import {HashRouter  as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header.js';
import Customize from './components/Customize.js';
import Checkout from './components/Checkout.js';
import React, { useState, useEffect } from "react";
import Bg from "./components/Bg.js";

function App() {
  const [ingredients, setIngredients] = useState({
    albahaca: false,
    queso: false,
    champinion: false,
    cebolla: false,
    pinia: false,
    tomate: false
  })

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if(data){
      setIngredients(JSON.parse(data));
    }
    

  }, []);

  return (
    <div>
      <Router>
            <Switch>
                <Route path="/personalizar">
                    <Bg />
                    <Customize ingredients={ingredients} setIngredients={setIngredients}/>
                </Route>
                <Route path="/confirmarpedido">
                    <Bg />
                    <Checkout ingredients={ingredients}/>
                </Route>
                
                <Route exact path="/">
                    <Bg />
                    <Header />
                </Route>
            </Switch>
        </Router>
      {/*<Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Customize ingredients={ingredients} setIngredients={setIngredients}/>
          </Route>
          <Route path="/checkout">
            <Header2 />
            <Checkout ingredients={ingredients}/>
          </Route>
        </Switch>
      </Router>
      */}
    </div>
  );
}
export default App;

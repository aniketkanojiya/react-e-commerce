import React from 'react';
import Home from './Screen/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Screen/About';
import Product from "./Screen/Product";
import Card from './Screen/Card';
import Cart from './Screen/Cart';
import { useState, useEffect } from 'react';
function App() {
  const [Users, setUsers] = useState([])
  const JsonData = () => {
    fetch(" https://course-api.com/javascript-store-products")
        .then((response) => response.json())
        .then(data => setUsers(data));
}

useEffect(() => {
    JsonData()
}, [])
  return (
    <div className="App">
     
     <Router>
      <Switch>
        <Route exact path="/">
          <Home Users={Users} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/product">
          <Product Users={Users}/>
        </Route>
        
            <Route path="/product/:id">
              <Card item ={Users}/>
            </Route>
            <Route path = "/Cart">
              <Cart/>
            </Route>
      </Switch>
    </Router>

      
    
    </div>
    
  );
}

export default App;

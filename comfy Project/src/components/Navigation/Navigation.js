import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import { FaBars,FaShoppingCart  } from 'react-icons/fa'; 
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { total } from '../../Redux/actions';
import { accordionSummaryClasses } from '@mui/material';


const Navigation = (props)=>{
  
  const state = useSelector((state)=>state.addItem)
 
  const addition = (acc, currentValue)=>{
    return(acc += currentValue.qty) 
 }
 const totalItem = state.reduce(addition,0);
    return(
        <div>
        <nav className="navbar">
        <div className="nav-center">
          
          <div className='color-nav'>
            <button className="toggle-nav">
              <i className="fas fa-bars"><FaBars/></i>
            </button>
            <ul className="nav-links" >
              <li>
                 <Link to="/" className="nav-link"id ="navlogo">
                  Home
                  </Link>
              </li>
              <li>
              <Link to="/product" className="nav-link">
                  Product
                  </Link>
              </li>
              <li>
              <Link to="/about" className="nav-link">
                  About
                  </Link>
              </li>
            </ul>
          </div>
          <h1 className='nav-logo' id="comfylogo">COMFY</h1>
          {/* <img src = './comfy.png' className="nav-logo" alt="COMFY"/> */}
          
          <Link to={"Cart"} className="toggle-cart"  >
         
              <Badge badgeContent = {totalItem} 
              fontSize="large">
                <ShoppingCartIcon/>
              </Badge>

              {/* <div className="fas fa-shopping-cart" id='cartlogo'><FaShoppingCart size={30}/></div>
            
            <span className="cart-item-count">{myState.length}</span> */}
            
          </Link>
         
        </div>
      </nav>
      </div>
    
    );
          }


export default Navigation; 
import React from 'react';
import Navigation from '../Navigation/Navigation'
import Product from './Product';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cover from '../Cover/Cover';
import { FaSearch,FaShoppingCart} from 'react-icons/fa'; 


const Home = ({Users})=>{



   


    return(
      <div>
       <div className='Homecover'>
          <Navigation/>
          </div>
          <Cover/>
         
            <section class="section-featured">
        <div class="featured-title">
          <h1>Featured</h1>
        </div>
        <div class="products-container">
          {
            Users.filter((item, index) => index < 3).map((item) => (
              <div key={item.id} className='product'>
                <div className='product-container'>
                  <img className='product-img' src={item.fields.image[0].url} />
                 <div className="product-icons">
                   <Link to={`/product/${item.id}`} className="product-icon">
                <i className="fas fa-search"><FaSearch/></i>
             </Link>
              <Link to ={`/product/${item.id}`} className="product-cart-btn product-icon" >
                <i className="fas fa-shopping-cart"><FaShoppingCart/></i>
              </Link>
              
            </div>
                </div>

                <div className="footer">
                  <div className='product-name'>{item.fields.name}</div>
                  <div className="product-price">${item.fields.price}</div>
                </div>

              </div>
            ))
          }
        </div>
        <div className='footer'>
        <Link to="product" className="btn">
                  View All Products
                  </Link>
         
      
        </div>
        
      </section>
    
        </div>
    );
}

export default Home; 
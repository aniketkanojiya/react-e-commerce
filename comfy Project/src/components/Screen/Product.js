import React from 'react';
import { useState, useEffect } from 'react'
import "./styles.css";
import Hero from '../Hero/Hero';
import Navigation from '../Navigation/Navigation';


import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';



const Product = ({Users}) => {
   
    const [query, setQuery] = useState("")
    const [category, setCategory] = useState(Users);
    const [value, setValue] = useState([10000])



    const categoryFilter = (categoryItem) => {

        const newItems = Users.filter((current) => {
            return current.fields.company === categoryItem;
        });
        setCategory(newItems);

    }
    useEffect(() => {
       
    }, [])


    const rangeSelector = (handle)=>{
        setValue(handle.target.value);
    }

    return (
        <><div className='productPage'>
            <Navigation />
        </div>
            <Hero name={"Products"} />
            <section className='products'>
                <div className="filters">
                    <div className="filter-container">
                        <form className="input-form">
                            <input type="text" className="search-input" value={query}
                                placeholder="search" onChange={(searchevent) => setQuery(searchevent.target.value)} />
                        </form>

                        <h4>company</h4>
                        <div className="companies">
                            <button className="company-btn" onClick={()=>setCategory(Users)}>all</button>
                            <button className="company-btn" onClick={() => categoryFilter('ikea')} >ikea</button>
                            <button className="company-btn" onClick={() => categoryFilter('marcos')}>marcos</button>
                            <button className="company-btn" onClick={() => categoryFilter('caressa')}>caressa</button>
                            <button className="company-btn" onClick={() => categoryFilter('liddy')}>liddy</button>
                        </div>
                        

                        <div className='price-slider'>
                            <h4>Price</h4>
                            <form className="price-form">
                                <input type="range" onInput={rangeSelector} className="price-filter" min="999" value ={value}max="10000" />
                            </form>
                            <p className="price-value">Value: ${value}</p>
                        </div>
                    </div>
                </div>

                <div className="products-container">


                    {
                    category.filter(x => x.fields.price < parseInt(value, 10) && x.fields.name.toLowerCase().includes(query)).map((item) => (
                        <div key={item.id} className='product'>
                            <div className='product-container'>
                                <img className='product-img' src={item.fields.image[0].url} />
                                <div className="product-icons">
                                    <Link to={`/product/${item.id}`} className="product-icon">
                                        <i className="fas fa-search"><FaSearch /></i>
                                    </Link>
                                    <Link to={`/product/${item.id}`} className="product-cart-btn product-icon" >
                                        <i className="fas fa-shopping-cart"><FaShoppingCart /></i>
                                    </Link>

                                </div>
                            </div>

                            <div className="footer">
                                <div className='product-name'>{item.fields.name}</div>
                                <div className="product-price">${item.fields.price}</div>

                            </div>

                        </div>
                    ))}

                </div>
            </section>
        </>
    );
}

export default Product
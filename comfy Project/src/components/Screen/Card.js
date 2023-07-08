import React from 'react';
import Hero from '../Hero/Hero';
import Navigation from '../Navigation/Navigation';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/actions';

const Card = ({item})=>{
  const {id}=useParams();
  const singleItem = item.filter(x=>x.id===id)
  const singleProduct = singleItem[0]
  
  const dispatch = useDispatch()
  const manageClick=(singleProduct)=>{
   
      dispatch(addItem(singleProduct))
    }
  
    return(
        <>
       <div className='productPage'>
        <Navigation/>
        </div>
        <Hero name={singleProduct.fields.name}/>
        <section className="single-product">
        <div className="section-center single-product-center">
          <img src={singleProduct.fields.image[0].url} className="single-product-img img" alt=""/>
          <article className="single-product-info">
            <div>
              <h2 className="single-product-title">{singleProduct.fields.name}</h2>
              <p className="single-product-company text-slanted">by {singleProduct.fields.company}</p>
              <p className="single-product-price">${singleProduct.fields.price}</p>
              {/* <div className="single-product-colors">
                <span className="product-color" style="background-color: rgb(241, 80, 37);"></span>
                <span className="product-color" style="background-color: rgb(34, 34, 34);"></span>
                </div> */}
              <p className="single-product-desc">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
              <Link to={"/Cart"}><button className="btn" onClick={()=>manageClick(singleProduct)}>
             ADD TO CART
              </button>
              </Link>
            </div>
          </article>
        </div>
      </section>
      </>
    );
}

export default Card; 
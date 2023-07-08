import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import { addItem, delItem, clear } from '../../Redux/actions'
import "./cart.css"
const Cart = () => {
  const state = useSelector((state) => state.addItem)
  const dispatch = useDispatch()
  const removeItem = (product) => {
    dispatch(delItem(product))
  }
  const incItem = (product) => {
    dispatch(addItem(product))
  }
  const decItem = (product) => {
    dispatch(delItem(product))
  }

  const removeAll = () => {
    
    dispatch(clear())
    
  }

  const addition = (acc, currentValue) => {
    return (acc + currentValue.fields.price * currentValue.qty)
  }
  const totalAmount = state.reduce(addition, 0);
  // if(state.length===0){
  //   return(
  //     <>
  //     <Navigation />
  //     </>
  //   )
  // }

  const showItem = (item) => {
    return (


      <div className="Cart-Items">
        <div className="image-box">
          <img className="image" src={item.fields.image[0].url} />
        </div>
        <div className="about">
          <h1 className="title">{item.fields.name}</h1>
        </div>
        <div className="counter">
          <div className="btn" onClick={() => incItem(item)}>+</div>
          <div className="count">{item.qty}</div>
          <div className="btn" onClick={() => decItem(item)}>-</div>
        </div>
        <div className="prices">
          <div className="amount">${item.fields.price * item.qty}</div>
          <button onClick={() => { removeItem(item) }} className="remove"><u className='btn'>DELETE</u></button>


          <hr />

        </div>
      </div>
    );

  }
  const emptyCart = () => {
    return (
      <h1> Cart is Empty!</h1>
    );
  }
  return (
    <><Navigation />
      <div className='main-container'>
        <div className="Header">
          <h3 className="Heading">Your Bag</h3>
          <button className="btn" onClick={() => removeAll()}>CLEAR CART</button>
        </div>
        <div className="CartContainer">
     

          {state.length === 0 && emptyCart()}

          {state.length !== 0 && state.map(showItem)}

        </div><div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Total</div>
            </div>
            <div className="total-amount">${totalAmount}</div>
          </div>
          <button className="btn">PAY</button></div>
      </div>    </>
  )
}

export default Cart

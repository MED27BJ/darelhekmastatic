import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../styles/BookCard.css"
import { decrement, increment } from '../Redux/SliceAmount';
const InBag = () => {
    const bookData=useSelector((state)=>state.bookData.BookData);
const amount=useSelector((state)=>state.amount.value)
const dispatch=useDispatch();
console.log(amount)
    return (
    <div>{bookData.filter((el)=>el.isInBag===true)
  
      .map((item) => (
        <div className='bagCard'>
    <main role="main">
    <div className="product">
      <figure>
        <img src={item.posterURL} alt="Product Image" className="product-image"/>
          </figure>
  
        <div className="product-description">
  
          <div className="info">
            <h1>{item.title}</h1>
            <h3>
              {item.writer}
            </h3>
            <h3>
              {item.theme}
            </h3>
          </div>
  
          <div className="price">
            {item.price}
          </div>
        </div>
        </div>
      </main>
      <div>
      <button onClick={()=>dispatch(decrement())}>-</button>{" "}Quantity:{" "}{amount}
      <button onClick={()=>dispatch(increment())}>+</button>{`Amount: ${amount*item.price}`}
      </div>
      </div>
      ))}
    </div>
  )
}

export default InBag

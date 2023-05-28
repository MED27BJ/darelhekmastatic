import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import "../styles/BookCard.css"
const InBag = () => {
    const bookData=useSelector((state)=>state.bookData.BookData);
    

    return (
    <div>{bookData.filter((el)=>el.isInBag===true)
  
      .map((item) => (
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
      </main>))}
    </div>
  )
}

export default InBag

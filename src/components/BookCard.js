import React from 'react'
import "../styles/BookCard.css"
import { useSelector } from 'react-redux'
const BookCard = () => {
  const bookData=useSelector((state)=>state.bookData.BookData);
  console.log(bookData);
  return (
    <div className='BookCard'>
    {bookData.map((el)=>(
    <main role="main">
    <div className="product">
      <figure>
        <img src={el.posterURL} alt="Product Image" className="product-image"/>
          </figure>
  
        <div className="product-description">
  
          <div className="info">
            <h1>{el.title}</h1>
            <h3>
              {el.writer}
            </h3>
            <h3>
              {el.theme}
            </h3>
          </div>
  
          <div className="price">
            {el.price}
          </div>
        </div>
  
        <div className="product-sidebar">
          <button className="buy">
            <span>BUY ITEM</span>
          </button>
  
          <button className="info">
            <span>MORE INFO</span>
          </button>
  
          <button className="size">
            <span>SIZES</span>
          </button>
  
          <button className="colors">
            <span>
              <a href="" className="color black"></a>
              <a href="" className="color white"></a>
              <a href="" className="color red"></a>
            </span>
          </button>
        </div>
        </div>
      </main>
  ))}
    </div>
  )
}

export default BookCard

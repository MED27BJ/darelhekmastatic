import React from 'react'
import { useSelector } from 'react-redux';
import "../styles/BookCard.css"
const InBag = () => {
    const el=useSelector((state)=>state.bookData.BookData);
  console.log(el)
    return (
    <div>
    <main role="main">
    <div className="product">
      <figure>
        <img src={el[0].posterURL} alt="Product Image" className="product-image"/>
          </figure>
  
        <div className="product-description">
  
          <div className="info">
            <h1>{el[0].title}</h1>
            <h3>
              {el[0].writer}
            </h3>
            <h3>
              {el[0].theme}
            </h3>
          </div>
  
          <div className="price">
            {el[0].price}
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default InBag

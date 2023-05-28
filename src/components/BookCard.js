import React from "react";
import "../styles/BookCard.css";
import { useDispatch, useSelector } from "react-redux";
import InBag from "./InBag";
import { addBag } from "../Redux/SliceAddToBag";
const BookCard = () => {
  const bookData = useSelector((state) => state.bookData.BookData);
  const dispatch=useDispatch()
  console.log(bookData)
  return (
    <div className="BookCard">
      {bookData.map((el) => (
        <main role="main" >
          <div
            className="product"
            style={{
              backgroundImage: `url(${el.posterURL})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <figure>
              <img
                src={el.posterURL}
                alt="Product Image"
                className="product-image"
              />
            </figure>

            <div className="product-description">
              <div className="info">
                <h1>{el.title}</h1>
                <h3>{el.writer}</h3>
                <h3>{el.theme}</h3>
              </div>

              <div className="price">{el.price}</div>
            </div>

            <div className="product-sidebar">
              <button className="buy" onClick={()=>(dispatch(addBag(el.id)))}>
                <span>
                📚<img src="https://emojigraph.org/media/whatsapp/shopping-cart_1f6d2.png"/>
                  </span>
              </button>

              <button className="info">
                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWd8vnR4hXG4khZTuWSoQDhad6YRF_YPv5A&usqp=CAU"/> </span>
              </button>

              </div>
          </div>
        </main>
      ))}
    </div>
  );
};

export default BookCard;

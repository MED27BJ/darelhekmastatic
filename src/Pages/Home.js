// THIS IS THE HOME PAGE
//importation
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
//the main function that filter the three first movies to be recommanded and puted in carousel
const Home = ({movies}) => {
     const first = movies.filter((el)=>(el.pub === 1))
     const second=movies.filter((el)=>(el.pub === 2))
     const third=movies.filter((el)=>(el.pub === 3))

  return (
<div className='presentation'>
<div className='welcome'>
    <h1>Welcome to the First MovieUp site in Tunisia</h1>
    </div>
    <div className="pub">
    
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={first[0].posterURL}
        alt="First slide"
      />
      <Carousel.Caption>
        <h2>First One</h2>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={second[0].posterURL}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h2>Second One</h2>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={third[0].posterURL}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h2>Third One</h2>
        <p>
          
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <h1>This are the Three recommanded Movies</h1>
    </div>
    </div>
  )
}
//exportation
export default Home

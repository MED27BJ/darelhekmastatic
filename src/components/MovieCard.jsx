// the compoent return the movie card
// the importation 
import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
// the main function that use a props of the data
const MovieCard = ({movie}) => {
 
 return (
  <Link to ={`/movie/${movie.title}`}>
  <div className='moviecard'>
  <Card style={{ width: '17rem'}}>
  
  <Card.Img variant="top" src={movie.posterURL} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>{movie.description}</ListGroup.Item>
    <div>
    <ReactStars
    count={5}
    size={24}
    value={movie.rating}
    activeColor="#ffd700"
  />
  </div>{movie.rating}
  </ListGroup>

</Card>

</div>
</Link>
  )
}
// exporation of the component
export default MovieCard
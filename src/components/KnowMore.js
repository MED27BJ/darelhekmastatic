// This component return the descriptionand retailer of the movie
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactStars from "react-rating-stars-component";
import { useNavigate, useParams } from 'react-router-dom'
// the main function
const KnowMore = ({movies}) => {
  // useParams for the path of the compoent
  const para=useParams()
  const prefilteredMovie=movies.filter((el)=>el.title==para.id)[0]
  //useNavigate for button goback and home 
  const navigate=useNavigate();

  return (
    <div className='main-knowmore'>
    <Button className='home' variant="primary" onClick={()=>{navigate('/')}}>Home</Button>{' '}
    <Button className="back" variant="primary" onClick={()=>{navigate(-1)}}>Go Back</Button>{' '}
    <div className='knowmorecard'>
    <div className='moviecard'>
    <Card style={{ width: '17rem'}}>
    
    <Card.Img variant="top" src={prefilteredMovie.posterURL} />
    <Card.Body>
      <Card.Title>{prefilteredMovie.title}</Card.Title>
      </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>{prefilteredMovie.description}</ListGroup.Item>
      <div>
      <ReactStars
      count={5}
      size={24}
      value={prefilteredMovie.rating}
      activeColor="#ffd700"
    />
    </div>
    </ListGroup>
  
  </Card>
  
  </div>
  <div className='tadhmin'>
  <iframe width="400" height="400" src={prefilteredMovie.tadhmin} title={prefilteredMovie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
 
    </div>
    </div>
  )
}

export default KnowMore

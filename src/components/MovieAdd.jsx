// this component to add a new movie and it contain the navbar
// importation
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReactStars from "react-rating-stars-component";

// the main of the compoent a function that have three props add, search by title and search by rate
const MovieAdd = ({funcAdd,setSearchTitle,setSearchRate}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie,setNewMovie]=useState({
    posterURL:"URL image",
    title:"Movie Title",
    description:"Description",
    rating:0,
  })
  // the return of the function the navbar and modale form and it contains the search

   return (
    <div className='movieadd'>
    
    {['md'].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Our Movies</Navbar.Brand>
           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown
                  title="Search by Stars"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
              <ReactStars
    count={5}
    size={24}
    onChange={(e)=>setSearchRate(e)}
    activeColor="#ffd700"
  />,
                 </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search By Title"
                  className="me-2"
                  aria-label="Search"
                   onChange={(e)=>setSearchTitle(e.target.value)}
                 
                />
                <Button className="btn-add-movie" onClick={handleShow} variant="outline-success">Add New</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              autoFocus
              onChange={(e)=>setNewMovie({...newMovie, title:e.target.value})}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Description"   onChange={(e)=>setNewMovie({...newMovie, description:e.target.value})}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image copier l'adresse de l'image</Form.Label>
            <Form.Control
              type="text"
              
              placeholder="URL image"
              autoFocus
              onChange={(e)=>setNewMovie({...newMovie, posterURL:e.target.value})}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Link Trailer Copier src sans guillemet</Form.Label>
          <Form.Control
            type="text"
            placeholder="Link Trailer"
            autoFocus
            onChange={(e)=>setNewMovie({...newMovie, tadhmin:e.target.value})}
          />
        </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="Rating"
              autoFocus
              onChange={(e)=>setNewMovie({...newMovie, rating:e.target.value})}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{handleClose();funcAdd(newMovie);}}>
          ADD
        </Button>
      </Modal.Footer>
    </Modal>
   
    </div>
    )
  }
  

// the exportation
export default MovieAdd

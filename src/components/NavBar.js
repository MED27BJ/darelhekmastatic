import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";


function NavBar({ setSearchtext, setSearchrating }) {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
       
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" , textDecoration:"none"}}
            navbarScroll
          >
            <Nav.Link ><Link style={{textDecoration:"none", color:"white"}} to="/" >Home</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration:"none", color:"white"}} to="/about" >About</Link></Nav.Link>
          </Nav>

          <Form className="d-flex" >
            <Form.Select
              aria-label="Default select example"
              className="rate"
              onChange={(e) => setSearchrating(e.target.value)}
            >
              <option value="0">Search by Theme</option>
              <option value="1">Roman</option>
              <option value="2">Storie</option>
              <option value="3">Ressource Humaine</option>

            </Form.Select>

            <Form.Control
            style={{ marginLeft: "50px" }}
              type="search"
              placeholder="Search by name"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchtext(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavBar

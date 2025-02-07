
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';


const Navbar1 = () => {
    return (
        <div>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link style={{ textDecoration: 'none', color: 'black' }} to="/home">E-learning</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link style={{ textDecoration: 'none', color: 'black' }} to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link style={{ textDecoration: 'none', color: 'black' }} to="/courses">Courses</Link></Nav.Link>
            <Nav.Link ><Link style={{ textDecoration: 'none', color: 'black' }} to="/support">Support</Link></Nav.Link>
            <Nav.Link ><Link style={{ textDecoration: 'none', color: 'black' }} to="/careers">Career</Link></Nav.Link>
            <Nav.Link ><Link style={{ textDecoration: 'none', color: 'black' }} to="/contactus">Contact</Link></Nav.Link>
           
            <Button className="justify-content-end" variant="dark">Student Hub</Button>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    


            
        
 
        </div>
    );
};

export default Navbar1;
import React from "react";
import './Navs.css';
import { Navbar, Nav , Container } from "react-bootstrap";
const Navs = () => {
    return(
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="logo" href="#home">Food..</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links ml-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Explore Food</Nav.Link>
                        <Nav.Link href="#">Review</Nav.Link>
                        <Nav.Link href="#">faq</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link className="number" id="lastnav">
                            0123456789
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navs;
import React from "react";
import { Navbar, Button, ButtonGroup, ButtonToolbar} from 'react-bootstrap';

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Suzanne Jucaitis</Navbar.Brand>
    <ButtonToolbar>
    <ButtonGroup className="mr-2"><Button variant="outline-info" href="https://sjucaitis.github.io/ResponsivePortfolio/contact.html">Contact</Button></ButtonGroup>
    <ButtonGroup className="mr-2"><Button variant="outline-info" href="https://sjucaitis.github.io/ResponsivePortfolio/portfolio.html">Portfolio</Button></ButtonGroup>
    <ButtonGroup className="mr-2"><Button variant="outline-info" href="https://sjucaitis.github.io/ResponsivePortfolio/assets/SFJ%20Resume.pdf">Resume</Button></ButtonGroup>
    <ButtonGroup className="mr-2"><Button variant="outline-info" href="https://www.linkedin.com/in/suzanne-foley-jucaitis-56b0705/">LinkedIn</Button></ButtonGroup>
    </ButtonToolbar>
    
    
    
    </Navbar>
  );
}

export default Nav;

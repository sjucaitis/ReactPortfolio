import React from 'react';
import './Footer.css';
import {Container, Row, Col } from '../Grid/Grid';

function Footer(){
    return (
        <footer className="footer">
            <div></div>
            <Container>
            <span className="text-muted">
                <Row>          
                    <Col size="md-12" >
                        <div>Suzanne Foley Jucaitis // Ohio Bar No: 0085611 // Foley Jucaiis Law, LLC // P.O. Box 112135 // Cleveland, OH 44111</div>
                        <div>phone: 216-586-4160 // fax: 216-920-9677 // email: suzanne.jucaitis@gmail.com</div>
                    </Col>       
                </Row>
            </span>
            </Container>
        </footer>
       
           
    );
    }
export default Footer; 
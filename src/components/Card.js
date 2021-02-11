import React from "react";
import { Card, Button } from 'react-bootstrap';

function Cards() {
  return (

<div class="row">
      <div class="col-lg-4 col-sm-12">
        <Card>
          <Card.Img variant="top" src="https://media1.fdncms.com/clevescene/imager/u/blog/6992282/courthouse.jpg?cb=1531348439"/>
          <Card.Body>
              <Card.Title>Attorney at Law</Card.Title>
              <Card.Text>Full service solo practice in Cleveland, Ohio, practicing juvenile and family law, probate, and civil litigation.</Card.Text>
              <Button variant="dark">Coming Soon</Button>
          </Card.Body>
        </Card>
      </div>
      <div class="col-lg-4 col-sm-12">
        <Card>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/68/04/89/680489d07b90c3622d565fe95a7148d7.jpg"/>
          <Card.Body>
            <Card.Title>Full-Stack Web Development</Card.Title>
            <Card.Text>Case Western Reserve University Coding Bootcamp (MERN Stack). Certificate of completion expected February, 2020.</Card.Text>
            <Button variant="dark" href="https://github.com/sjucaitis">GitHub</Button>
          </Card.Body>
        </Card>
      </div>
      <div class="col-lg-4 col-sm-12">
      <Card>
          <Card.Img variant="top" src="https://sjucaitis.github.io/ResponsivePortfolio/assets/clevelandsky.jpg"/>
          <Card.Body>
            <Card.Title>Outside in Cleveland</Card.Title>
            <Card.Text>Paddling, sailing, cycling, hiking, and outdoor photography in Cleveland, the Great Lakes, and beyond.</Card.Text>
            <Button variant="dark">Coming Soon</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

   

    
  );
}

export default Cards;

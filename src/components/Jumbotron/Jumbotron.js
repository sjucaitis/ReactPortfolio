import React from "react";
import './Jumbotron.css';
import {Jumbotron } from 'react-bootstrap';


function Heading() {
  return (
   
       <Jumbotron>
        <h1>About</h1>
          <p>
          I am a licensed private attorney in transition to a career in web development. I believe that my excellent written and oral communication, problem-solving, and collaboration skills are well-suited to the development environment. My skill in parsing, understanding, and applying statutes and administrative codes translates well to the learning and application of new technologies. I participated in the Full-Stack Web Development Certificate Program at Case Western Reserve University, and have experience using HTML5, CSS, JavaScript, Node, Express, React, SQL, and Mongo (MERN Stack).
          </p>
       </Jumbotron>
  );

}

export default Heading;

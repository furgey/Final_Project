import React, { Component } from "react";
import { Card } from "react-bootstrap";
import main from "./images/main.jpg";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";


class Home extends Component {
  render() {
    return (
      <div>
      <Card className="test2">
      <Card.Img src={main}/>
      <Card.Body className="greytheme2">
        <Card.Title className="greytheme2">Biomutant</Card.Title>
        <Card.Text className="greytheme2">
        Combine mutant powers, bionics and weapons
        BIOMUTANT® is an open-world, post-apocalyptic 
        Kung-Fu fable RPG, with a unique martial arts 
        styled combat system allowing you to mix melee, 
        shooting and mutant ability action.
        </Card.Text>
      </Card.Body>
      </Card>
      <div class="parent">
        <div class="col">
      <Card className="test">
        <Card.Img src={card1}/>
        <Card.Body className="greytheme2">
        <Card.Title className="greytheme2">Biomutant</Card.Title>
        <Card.Text className="greytheme2">
        Combine mutant powers, bionics and weapons
        BIOMUTANT® is an open-world, post-apocalyptic 
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div class="col">
      <Card className="test">
        <Card.Img src={card2}/>
        <Card.Body className="greytheme2">
        <Card.Title className="greytheme2">Biomutant</Card.Title>
        <Card.Text className="greytheme2">
        Combine mutant powers, bionics and weapons
        BIOMUTANT® is an open-world, post-apocalyptic 
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>
      </div>
    );
  }
}
 
export default Home;
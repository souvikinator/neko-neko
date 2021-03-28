import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Badge from "./Badge";

class Collection extends Component {
  constructor() {
    super();
    let c = localStorage.getItem("nekoCollection");
    let nekolist;
    if (c !== null) {
      nekolist = c.split(",");
    }

    this.state = {
      nekoCollection: nekolist, //will be object property
    };
  }

  render() {
    return (
      <div>
        <Card className="neko-Collection">
          <Card.Body>
            <Card.Title>️😻 Your Collection</Card.Title>
            <Card.Text>
              <Badge
                url="https://picsum.photos/200/200"
                width="40rem"
                height="40rem"
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Collection;

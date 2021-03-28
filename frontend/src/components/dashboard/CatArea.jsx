import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
// import Badge from "./Badge";

class CatArea extends Component {
  constructor() {
    super();
    this.state = {
      nekoCollection: [],
    };
  }
  // TODO: check if any active timer exists in localstorage
  // TODO: start timer function

  render() {
    return (
      <div>
        <Card className="neko-FoodTray">
          <Card.Body>
            <Card.Title>🧶 Cat Area</Card.Title>
            <Card.Text>
              <p>Oops! nothing in here</p>
              <p>add food from food list to lure a cat</p>
              {/* TODO: display three times. If localstorage empty them show empty */}
              <div style={{ display: "inline-flex" }}>
                {/* <Badge
                  url="https://picsum.photos/200/200"
                  width="48rem"
                  height="48rem"
                /> */}
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button align="right" size="sm" variant="info">
              Meow!
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CatArea;

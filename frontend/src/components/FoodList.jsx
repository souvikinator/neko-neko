import React, { Component } from "react";
import {Card} from "react-bootstrap";

class FoodList extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Food List</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              choose a food to fill the tray
            </Card.Subtitle>
            <Card.Text>
              <ul>
                  <li>food 1</li>
                  <li>food 2</li>
                  <li>food 3</li>
                  <li>food 4</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FoodList;

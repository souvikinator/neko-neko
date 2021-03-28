import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Badge from "./Badge";
import axios from "axios";

class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      food: [],
    };
  }

  componentDidMount() {
    // get food list and render them
    axios
      .get("http://localhost:5000/api/food")
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp.data.food);
        }
      })
      .catch((err) => {
        // alert(err.message);
        console.log(err.message);
      });
  }

  render() {
    return (
      <div>
        <Card className="neko-FoodList">
          <Card.Body>
            <Card.Title>🐟 Food List</Card.Title>
            <Card.Text>
              <div style={{ display: "inline-block" }}>
                <Badge
                  url="https://picsum.photos/200/200"
                  width="45rem"
                  height="40rem"
                />{" "}
                <Badge
                  url="https://picsum.photos/200/200"
                  width="45rem"
                  height="40rem"
                />{" "}
                <Badge
                  url="https://picsum.photos/200/200"
                  width="45rem"
                  height="40rem"
                />
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FoodList;

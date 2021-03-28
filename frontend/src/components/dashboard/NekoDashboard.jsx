import React, { Component } from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import FoodList from "./FoodList";
import CatArea from "./CatArea";
import Collection from "./Collection";
import "./dashboard.css";
import DashboardFooter from "./DashboardFooter";

class NekoDashboard extends Component {
  constructor() {
    super();
    this.state = {
      neko_player: window.localStorage.getItem("neko_player"),
    };
    // if user doesn't exists then redirect to homepage
    if(this.state.neko_player==null){
      window.location.pathname="/";
    }
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="dashboard-container">
          <h1>Welcome! {this.state.neko_player}</h1>
          <Container>
            <Row>
              <Col style={{ padding: "2px" }}>
                <CatArea />
                <br />
                <Collection />
              </Col>
              <Col style={{ padding: "2px" }}>
                <FoodList />
              </Col>
            </Row>
            <DashboardFooter />
          </Container>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default NekoDashboard;

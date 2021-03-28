import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import NekoFooter from "./NekoFooter";
import EntryForm from "./EntryForm";
import "./home.css";

class NekoMain extends Component {
  constructor() {
    super();
    this.state = {
      cats: ["😻", "🐱", "😾", "🐈", "🙀", "😽", "😹", "😸", "😺"],
    };
  }

  genRandomCat() {
    let catList = this.state.cats;
    let len = catList.length;
    let index = Math.floor(Math.random() * (len-1) + 0);
    console.log("changed!",catList[index]);
    return catList[index];
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="jumbotron-main">
          <Container>
            <h1>{this.genRandomCat()}</h1>
            <h3>Neko Neko</h3>
            <p>Android 7 & 11 easter egg on you browser!</p>
            <p>Enter player name or continue with the deafult one</p>
          </Container>
          <Container>
            <EntryForm />
          </Container>
          <NekoFooter />
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default NekoMain;

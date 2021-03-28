import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
var generate = require("project-name-generator");

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neko_player: this.genRandomName(),
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.genRandomName=this.genRandomName.bind(this);
  }

  //generates random name
  genRandomName() {
    return generate({ words: 2, alliterative: true }).spaced;
  }

  //handles change in state of input type text
  handleInputChange(e) {
    this.setState({
      neko_player: e.target.value,
    });
  }

  //handles form submission request
  handleFormSubmit(e) {
    e.preventDefault();
    //saving player name in localstorage
    localStorage.setItem("neko_player", this.state.neko_player);
    //redirect user to /neko-dashboard
    window.location.pathname = "/neko-dashboard";
  }

  componentDidMount(){
    let playerName=window.localStorage.getItem("neko_player");
    if(playerName!=null){
      let cont=window.confirm(`Welcome ${playerName}! continue to saved game? OK will take you to the dashboard and CANCEL will delete current saved game and you have to start with a new name.`);
      if(cont) window.location.pathname="/neko-dashboard";
      else window.localStorage.removeItem("neko_player");
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form style={{ padding: "10px" }} onSubmit={this.handleFormSubmit}>
          <Form.Row size="lg">
            <Col>
              <Form.Control
                name="player"
                onChange={this.handleInputChange}
                required
                size="lg"
                value={this.state.neko_player}
              />
            </Col>
            <br />
            <Col>
              <Button
                size="lg"
                className="neko-form-button"
                variant="warning"
                type="submit"
              >
                Meow Meow!
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </React.Fragment>
    );
  }
}

export default EntryForm;

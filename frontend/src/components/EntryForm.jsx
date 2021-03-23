import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
var generate = require('project-name-generator');

class EntryForm extends Component {

    genRandomName(){
        return generate({ words: 2, alliterative: true }).spaced; 
    }
  render() {
    return (
      <React.Fragment>
        <Form style={{ padding: "20px" }}>
          <Form.Row size="lg">
            <Col>
              <Form.Control size="lg" value={this.genRandomName()} placeholder={this.genRandomName()} />
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

import React, { Component } from "react";
import { ImBin, FaInfoCircle, AiFillGithub, FaShareAlt } from "react-icons/all";
import { Button } from "react-bootstrap";

class DashboardFooter extends Component {
  constructor() {
    super();
    this.deleteSavedGame = this.deleteSavedGame.bind(this);
  }

  deleteSavedGame() {
    let sure = window.confirm(
      "This will lead to loss of the game data. Are you sure you want to delete the saved game?"
    );
    if (sure) {
      //TODO:later update as the data increases
      localStorage.removeItem("player");
      window.location.pathname = "/";
    }
  }

  render() {
    return (
      <div className="dashboard-footer">
        <Button href="#" onClick={this.deleteSavedGame} variant="link">
          <ImBin />
        </Button>
        <Button href="#" variant="link">
          <FaInfoCircle />
        </Button>
        <Button href="#" variant="link">
          <FaShareAlt />
        </Button>
        <Button href="https://github.com/DarthCucumber/neko-neko/blob/master/README.md" variant="link">
          <AiFillGithub />
        </Button>
      </div>
    );
  }
}

export default DashboardFooter;

import React, { Component } from 'react';
import {FaInfoCircle,AiFillGithub} from "react-icons/all";

class NekoFooter extends Component {
    render() {
        return (
            <div className="neko-footer">
                <a href="https://github.com/DarthCucumber/neko-neko"><FaInfoCircle /></a>
                <a href="https://github.com/DarthCucumber/neko-neko/blob/master/README.md"><AiFillGithub /></a>
            </div>
        )
    }
}

export default NekoFooter

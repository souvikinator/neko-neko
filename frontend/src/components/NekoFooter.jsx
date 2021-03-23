import React, { Component } from 'react';
import {FaInfoCircle,AiFillGithub} from "react-icons/all";

class NekoFooter extends Component {
    render() {
        return (
            <div className="neko-footer">
                <a href="#"><FaInfoCircle /></a>
                <a href="#"><AiFillGithub /></a>
            </div>
        )
    }
}

export default NekoFooter

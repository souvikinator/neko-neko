import React, { Component } from 'react';
import {Image} from "react-bootstrap";

class Badge extends Component {
    render() {
        const {url,width,height}=this.props;
        return (
            <div className="neko-badge-container">
                {/* w=h=40rem looks good */}
               <Image src={url} width={width} height={height} rounded /> 
            </div>
        )
    }
}

export default Badge

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import "./css/FaButton.css";

class FaButton extends Component {
    //noinspection JSMethodCanBeStatic
    render() {

        const linkInner = (
            <div className="fabutton-shade">
                <div className="fabutton-inner">
                    <FontAwesome name={this.props.icon}/>
                    <div className="fabutton-text">
                        {this.props.text}
                    </div>
                </div>
            </div>
        );

        // Check if <a> tag is required or router Link tag. Link tags do not support other origins
        if (/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(this.props.to)) {
            return (
                <div className="FaButton">
                    <a href={this.props.to} style={{backgroundColor: this.props.color}}>
                        {linkInner}
                    </a>
                </div>
            )
        } else {
            return (
                <div className="FaButton">
                    <Link to={this.props.to} style={{backgroundColor: this.props.color}}>
                        {linkInner}
                    </Link>
                </div>
            )
        }
    }
}

export default FaButton;
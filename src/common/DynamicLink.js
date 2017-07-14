import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DynamicLink extends Component {
    //noinspection JSMethodCanBeStatic
    render() {
        if (/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/.test(this.props.to)) {
            return (<a href={this.props.to}>
                {this.props.children}
            </a>)
        } else {
            return (<Link to={this.props.to} className={location.pathname === this.props.to ? "current" : null}>
                {this.props.children}
            </Link>)
        }
    }
}

export default DynamicLink;
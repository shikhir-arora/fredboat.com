import React, { Component } from 'react';
import FA from 'react-fontawesome';

class PlayerButton extends Component {

    render() {
        return (
            <div className="PlayerButton">
                <FA name={this.props.icon} className="fa-fw"/>
            </div>
        )
    }
}

export default PlayerButton;
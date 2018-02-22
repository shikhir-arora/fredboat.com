import React, { Component } from 'react';
import FA from 'react-fontawesome';

class PlayPauseButton extends Component {

    constructor(props) {
        super(props);
        this.state = { play: false };
    }

    play = () => {
        this.setState({play: !this.state.play});
    }

    render() {
        return (
            <div onClick={this.play} className="PlayPauseButton">
                <FA name={!this.state.play ? "play" : "stop"} className="fa-fw"/>
            </div>
        )
    }
}
export default PlayPauseButton;

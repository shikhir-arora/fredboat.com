import React, { Component } from 'react';
import './css/PlayerArea.css'
import PlayerButton from "./PlayerButton";

const mock = {
    id: "dQw4w9WgXcQ",
    title: "Never gonna give you up",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Nullable
    image: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg", // Nullable
    author: "RickAstleyVEVO", // Nullable
    duration: 3 * 60 + 33, // Nullable if stream
    startTime: 0 // Unix time
};

class PlayerArea extends Component {

    constructor(props) {
        super(props);
        this.state = {track: mock};
    }

    // todo: Image modal with link to source?
    render() {
        return (
            <div className="PlayerArea">
                <div className="player-area-flex">
                    <img className="track-image" src={this.state.track.image} alt=""/>
                    <div className="player-controls">
                        <p className="player-info">
                            {this.state.track.title}
                        </p>
                        <div className="player-seeking">
                            <span>0:00</span>
                            <div className="seek-bar">
                                <div className="seek-bar-inner"/>
                            </div>
                            <span>3:33</span>
                        </div>
                        <div className="player-buttons">
                            <PlayerButton icon="play"/>
                            <PlayerButton icon="step-backward"/>
                            <PlayerButton icon="stop"/>
                            <PlayerButton icon="step-forward"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerArea;
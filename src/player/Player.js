import React, { Component } from 'react';
import "./css/Player.css";
import Header from "../common/Header";
import NavigationArea from "./NavigationArea";
import QueueArea from "./QueueArea";
import PlayerArea from "./PlayerArea";

class Player extends Component {
    render() {
        return (
            <div className="Player">
                <Header/>
                <div className="player-root">
                    <NavigationArea/>
                    <div className="player-root__center">
                        <QueueArea/>
                        <PlayerArea/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;
import React, { Component } from 'react';
import "./css/Player.css";
import Header from "../common/Header";
import NavigationArea from "./NavigationArea";
import EventsArea from "./EventsArea";
import QueueArea from "./QueueArea";
import PlayerArea from "./PlayerArea";

class Player extends Component {
    render() {
        return (
            <div className="Player">
                <Header/>
                <div className="player-root-container">
                    <NavigationArea/>
                    <div className="player-center-column">
                        <QueueArea/>
                        <PlayerArea/>
                    </div>
                    <EventsArea/>
                </div>
            </div>
        )
    }
}

export default Player;
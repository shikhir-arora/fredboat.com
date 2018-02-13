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
                    <div className="player-root-side-column">
                        <NavigationArea/>
                    </div>
                    <div className="player-center-container">
                        <div className="player-info-container">
                            <QueueArea/>
                            <EventsArea/>
                        </div>
                        <PlayerArea/>
                    </div>
                    <div className="player-root-side-column">
                        {/* Spacer */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;
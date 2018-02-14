import React, { Component } from 'react';
import "./css/Queue.css";
import QueueItem from "./QueueItem";

const mock = {
    id: "dQw4w9WgXcQ",
    title: "Never gonna give you up",
    source: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Nullable
    image: "https://i.ytimg.com/vi/teIYXCDnJvc/mqdefault.jpg", // Nullable
    author: "RickAstleyVEVO", // Nullable
    duration: 3 * 60 + 33, // Nullable if stream
    startTime: 0 // Unix time
};

class QueueArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [mock, mock, mock, mock]
        };
    }

    render() {
        const queueItems = [];
        for (const i in this.state.tracks) {
            // noinspection JSUnfilteredForInLoop
            queueItems.push(<QueueItem key={i} track={this.state.tracks[i]}/>);
        }

        return (
            <div className="QueueArea">
                {queueItems}
            </div>
        )
    }
}

export default QueueArea;
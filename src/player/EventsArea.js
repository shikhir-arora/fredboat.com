import React, { Component } from 'react';
import './css/EventsArea.css'
import EventsAreaItem from './EventsAreaItem'

var trackName = "Jon Bellion - 80's Films"

const test = {
    chooseFrom: 1,
    name: trackName,
    trackLength: "69:69"
};

class EventsArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [test, test]
        };
    }

    render() {
        const eventsItems = [];
        for (const i in this.state.events) {
            eventsItems.push(<EventsAreaItem key={i} events={this.state.events[i]}/>);
        }

        return (
            <div className="EventsArea">
                {eventsItems}
            </div>
        )
    }
}

export default EventsArea;

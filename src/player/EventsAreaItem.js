import React, { Component } from 'react';


class EventsAreaItem extends Component {

    render() {
        return (
            <div className="EventsAreaItem">
                Selected song #{this.props.events.chooseFrom} - {this.props.events.name} ({this.props.events.trackLength})
            </div>
        )
    }
}

export default EventsAreaItem;

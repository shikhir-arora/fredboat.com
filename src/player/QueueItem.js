import React, { Component } from 'react';

class QueueItem extends Component {
    render() {
        const imageStyle = {};
        imageStyle["backgroundImage"] = this.props.track.image;
        return (
            <div className="QueueItem">
                <div className="queue-item-body">
                    <div className="queue-item-image" style={{backgroundImage: `url('${this.props.track.image}')`}}/>
                    <div className="queue-item-inner">
                        <div className="queue-item-title">
                            {this.props.track.title}
                        </div>
                    </div>
                </div>
                <i className="queue-item-cross fa fa-times" aria-hidden="true"/>
            </div>
        )
    }
}

export default QueueItem;
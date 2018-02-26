import React, {Component} from 'react';

class QueueItem extends Component {
    render() {
        const imageStyle = {};
        imageStyle["backgroundImage"] = this.props.track.image;
        // noinspection JSUnresolvedVariable
        return (
            <div className="QueueItem">
                <div>
                    <span className="QueueItem__number">
                        {"#" + this.props.num}
                    </span>
                    <span className="QueueItem__image" style={{backgroundImage: `url('${this.props.track.image}')`}}/>
                    <span className="QueueItem__title">
                        {this.props.track.title}
                    </span>
                </div>
                <i className="QueueItem__cross fa fa-times" aria-hidden="true"/>
            </div>
        )
    }
}

export default QueueItem;
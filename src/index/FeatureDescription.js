import React, { Component } from 'react';

class FeatureDescription extends Component {
    render() {

        return (
            <div className="FeatureDescription">
                <h2 className="feature-title">
                    {this.props.title}
                </h2>
                <div className="overline"/>
                <p>
                    {this.props.text}
                </p>
                {this.props.under}
            </div>
        )
    }
}

export default FeatureDescription;
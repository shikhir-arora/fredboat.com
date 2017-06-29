import React, { Component } from 'react';

class FeatureDescription extends Component {
    render() {

        return (
            <div className="FeatureDescription">
                <p className="feature-title">
                    {this.props.title}
                </p>
                <div className="overline"/>
                <p>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default FeatureDescription;
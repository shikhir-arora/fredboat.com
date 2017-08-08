import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import "./css/TocHeader.css";

class TocHeader extends Component {
    render() {
        if (this.props.activePage === this.props.page) {
            document.title = this.props.name;

            if (this.props.name === "Quickstart") document.title = "Commands";
        }

        return (
            <div className="TocHeader">
                <Link to={"/docs/" + this.props.page}>
                    <h1 className={this.props.activePage === this.props.page ? "active" : ""}>
                        {this.props.name}
                    </h1>
                </Link>
            </div>
        )
    }
}

export default TocHeader;
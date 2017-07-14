import React, { Component } from 'react';
import "./css/Header.css";
import logo from "../../public/logo/logo.svg";

class MobileHeader extends Component {
    render() {

        return (
            <div className="MobileHeader mobile-header">
                <img className="logo" src={logo} alt="Logo" draggable="false"/>
            </div>
        )
    }
}

export default MobileHeader;
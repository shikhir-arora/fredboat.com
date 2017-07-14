import React, { Component } from 'react';
import "./css/Header.css";
import {Link} from 'react-router-dom';
import logo from "../../public/logo/logo.svg";

class MobileHeader extends Component {
    render() {

        return (
            <div className="MobileHeader mobile-header">
                <Link to="/" className="logo-link">
                    <img className="logo" src={logo} alt="Logo" draggable="false"/>
                </Link>
            </div>
        )
    }
}

export default MobileHeader;
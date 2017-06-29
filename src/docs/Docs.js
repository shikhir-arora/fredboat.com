import React, { Component } from 'react';
import "./css/App.css";
import Markdown from "./Markdown";
import Toc from "./Toc";
import BottomBar from "./BottomBar";
import Header from "../common/Header";

class Docs extends Component {
    render() {
        return (
            <div className="Docs">
                <Header/>

                <div className="page-body">
                    <Toc page={this.props.page}/>

                    <Markdown name={this.props.page}/>
                </div>

                <BottomBar page={this.props.page}/>
            </div>
        )
    }
}

export default Docs;
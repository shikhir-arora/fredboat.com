import React, { Component } from 'react';
import Header from "../common/Header";
import "./css/IndexPage.css";
import logo from "../../public/logo/logo.svg";
import FeatureDescription from "./FeatureDescription";
import FontAwesome from 'react-fontawesome';

class Index extends Component {
    render() {

        return (
            <div>
                <Header/>
                <div className="page-body">
                    <div className="feature-section index-top">
                        <div className="logo-wrapper">
                            <img className="logo" src={logo} alt="Logo" draggable="false"/>
                        </div>
                        <FeatureDescription title="Meet FredBoat♪♪" text="FredBoat is a free Discord music bot that delivers high-quality music to your Discord server.
                        The music bot is made to be easy plug in to your Discord server with no configuration."/>
                    </div>

                    <div className="feature-section index-second">
                        <FeatureDescription title="Wide range of integrations" text="FredBoat can play music from YouTube, Soundcloud, Bandcamp, direct links, Twitch. Yes, it also supports playlists and livestreams!"/>
                        <div className="feature-sources">
                            <div>
                                <FontAwesome name="youtube-play"/>
                                <FontAwesome name="soundcloud"/>
                            </div>
                            <div>
                                <FontAwesome name="bandcamp"/>
                                <FontAwesome name="twitch"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
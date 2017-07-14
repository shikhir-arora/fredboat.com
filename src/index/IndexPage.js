import React, { Component } from 'react';
import Header from "../common/Header";
import "./css/IndexPage.css";
import logo from "../../public/logo/logo.svg";
import FeatureDescription from "./FeatureDescription";
import FontAwesome from 'react-fontawesome';
import FaButton from "../common/FaButton";
import MobileHeader from "../common/MobileHeader";

class Index extends Component {
    //noinspection JSMethodCanBeStatic
    render() {

        return (
            <div>
                <Header/>
                <div className="index-page-body">
                    <div className="feature-section index-top">
                        <div className="feature-deco">
                            <div className="logo-wrapper">
                                <img className="logo" src={logo} alt="Logo" draggable="false"/>
                            </div>
                        </div>
                        <FeatureDescription title="Meet FredBoat♪♪"
                                            text="FredBoat is a free Discord music bot that delivers high-quality music to your Discord server.
                        You can easily add the music bot to your Discord server with zero configuration."
                                            under={
                                                (
                                                    <div>
                                                        <FaButton to="https://discordapp.com/oauth2/authorize?&client_id=184405253028970496&scope=bot" text="Add to Discord" icon="sign-in" color="rgb(114, 137, 218)"/>
                                                        <FaButton to="/docs" text="Read the docs" icon="book" color="#3399ff"/>
                                                    </div>
                                                )}/>
                    </div>

                    <div className="feature-section">
                        <FeatureDescription title="Wide range of integrations"
                                            text="FredBoat can play music from YouTube, Soundcloud, Bandcamp, direct links, Twitch. Yes, it also supports playlists and livestreams!"/>
                        <div className="feature-deco">
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

                    <div className="feature-section">
                        <div className="feature-deco">
                            <div className="feature-search">
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <FontAwesome name="search"/>
                                </div>
                                <div>
                                    <FontAwesome name="youtube-play"/>
                                    <FontAwesome name="soundcloud"/>
                                </div>
                            </div>
                        </div>
                        <FeatureDescription title="YouTube and Soundcloud search"
                                            text="Instead of linking directly to a track, you can also choose to simply just type in the name of your song and let FredBoat find it for you."/>
                    </div>

                    <div className="feature-section">
                        <FeatureDescription title="Shuffle and repeat"
                                            text="FredBoat has full support for shuffling your playlist. You can even choose to put just one or the entire queue on repeat."/>
                        <div className="feature-deco">
                            <FontAwesome name="random" style={{fontSize: "7em", marginRight: "25px"}}/>
                            <FontAwesome name="repeat" style={{fontSize: "7em"}}/>
                        </div>
                    </div>

                    <div className="feature-section">
                        <div className="feature-deco">
                            <FontAwesome name="lock" style={{fontSize: "10em"}}/>
                        </div>
                        <FeatureDescription title="Easy and secure permission system"
                                            text="FredBoat was initially created to be easy to use in small servers, but if you are the admin of a larger server you can keep the trolls at bay by restricting who can modify the queue."
                                            under={
                                                (
                                                    <div>
                                                        <FaButton to="/docs/permissions" text="Read about permissions" icon="book" color="#3399ff"/>
                                                    </div>
                                                )}/>
                    </div>

                    <div className="feature-section">

                        <FeatureDescription title="Completely open source"
                                            text="Since development began, FredBoat has always been open source! This means that FredBoat is shaped by the community, and advanced users can even host their own FredBoat."
                                            under={
                                                (
                                                    <div>
                                                        <FaButton to="https://github.com/Frederikam/FredBoat" text="View the source code" icon="github" color="#3399ff"/>
                                                    </div>
                                                )}/>
                        <div className="feature-deco">
                            <FontAwesome name="github" style={{fontSize: "10em"}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
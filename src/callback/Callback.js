import React, {Component} from 'react';
import "./css/Callback.css";
import Header from "../common/Header";
import FontAwesome from 'react-fontawesome';
import FaButton from "../common/FaButton";
import MobileHeader from "../common/MobileHeader";
import Footer from "../common/Footer";

class Callback extends Component {
    //noinspection JSMethodCanBeStatic
    render() {
        let music = this.props.music;

        let title = music ? "FredBoatMusic was successfully added" : "FredBoat was successfully added";
        let desc = music ? "If you haven't already, be sure to check out some of the commands you can use by reading the documentation."
            : "However! You just added the non-music version of FredBoat. If you want music, click the purple button below.";
        let lowerDesc = music ? "We hope you enjoy FredBoat♪♪!" : "We hope you enjoy FredBoat!";
        let docsLink = music ? "/docs" : "/docs/non_music";
        let addBtnText = music ? "Add to another server" : "Add music bot";

        let error = window.location.search.substr(1).includes("error");
        if(error) {
            title = "Looks like Discord returned an error";
            desc = "This usually happens when you hit \"cancel\" in the authorize dialog."
            lowerDesc = null;
            addBtnText = "Add music bot";
        }

        return (
            <div className="Callback">
                <Header/>
                <div className="callback-page">
                    <MobileHeader/>
                    <div className="callback-title">
                        <FontAwesome name={error ? "times" : "check"}/>
                        <span>{title}</span>
                    </div>
                    <div className="callback-lower">
                        <p>{desc}</p>
                        <p>{lowerDesc}</p>
                        <div className="buttons">
                            <FaButton to={docsLink} icon="book" text="Commands" color="#1CBFE2"/>
                            <FaButton to="https://goo.gl/cFs5M9"
                                      icon="sign-in" text={addBtnText} color="#7289DA"/>
                            <FaButton to="/docs/donate" icon="money" text="Donate" color="rgb(249, 104, 84)"/>
                        </div>
                        <div id="callback-ad"/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

    //noinspection JSMethodCanBeStatic
    componentDidMount() {
        console.log("Spawned ad");
        const script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = "//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=fredboatcom";
        script.id="_carbonads_js";
        document.getElementById("callback-ad").appendChild(script);
    }
}

export default Callback;
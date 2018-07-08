import React, { Component } from 'react';
import "./css/Footer.css";
import DynamicLink from "./DynamicLink";

class Footer extends Component {
    render() {

        return (
            <div className="Footer">
                <div className="footer-column">
                    <p>
                        Site
                    </p>
                    <DynamicLink to="/">
                        Index
                    </DynamicLink>
                    <DynamicLink to="/docs">
                        Documentation
                    </DynamicLink>
                    <DynamicLink to="https://goo.gl/cFs5M9">
                        Add FredBoat
                    </DynamicLink>
                    <DynamicLink to="/docs/donate">
                        Donate
                    </DynamicLink>
                </div>

                <div className="footer-column">
                    <p>
                        Social
                    </p>
                    <DynamicLink to="https://discordapp.com/invite/cgPFW4q">
                        Discord server
                    </DynamicLink>
                    <DynamicLink to="https://twitter.com/DiscordFredBoat">
                        Twitter (FredBoat)
                    </DynamicLink>
                    <DynamicLink to="https://twitter.com/Frederikam00">
                        Twitter (Fre_d)
                    </DynamicLink>
                    <DynamicLink to="https://niu.moe/@fred">
                        Mastodon (Fre_d)
                    </DynamicLink>
                </div>

                <div className="footer-column">
                    <p>
                        Development
                    </p>
                    <DynamicLink to="https://github.com/Frederikam/FredBoat">
                        Main repository
                    </DynamicLink>
                    <DynamicLink to="https://github.com/FredBoat/fredboat.com">
                        Web repository
                    </DynamicLink>
                    <DynamicLink to="https://crowdin.com/project/fredboat">
                        Translations
                    </DynamicLink>
                </div>
            </div>
        )
    }
}

export default Footer;

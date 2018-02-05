import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import './docs/css/index.css';
import IndexPage from "./index/IndexPage";
import Player from "./player/Player";
import './common/css/layout.css';
import Callback from "./callback/Callback";

const IndexRoute = ({ match }) => {
    return <IndexPage/>
};

const DocsRoute = ({ match }) => {
    if(match.params.page === "index") {
        return <Redirect to="/docs/"/>
    }

    const page = match.params.page === undefined ? "index" : match.params.page;

    return <Docs page={page}/>
};

const CallbackRoute = ({ match }) => {
    return <Callback music={match.path.endsWith("/music")}/>
};

/**
 * @return {null}
 */
const Analytics = ({location}) => {
    if (typeof window.ga === 'function') {
        window.ga('send', 'pageview', location.pathname + location.search);
    }
    console.log(location.pathname + location.search);
    return null;
};

ReactDOM.render(
    <BrowserRouter id="UA-25845175-7">
        <div>
            <Route exact path="/" render={IndexRoute}/>
            <Route exact path="/docs/" component={DocsRoute}/>
            <Route exact path="/player/" component={Player}/>
            <Route exact path="/callback/music" component={CallbackRoute}/>
            <Route exact path="/callback/nonmusic" component={CallbackRoute}/>
            <Route path="/docs/:page" component={DocsRoute}/>
            <Route path="/" render={Analytics}/>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/App';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import './docs/css/index.css';
import IndexPage from "./index/IndexPage";
import './common/css/layout.css';

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
            <Route path="/docs/:page" component={DocsRoute}/>
            <Route path="/" render={Analytics}/>
        </div>
    </BrowserRouter>,
  document.getElementById('root')
);

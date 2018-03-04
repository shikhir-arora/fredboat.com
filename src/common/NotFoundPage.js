import React, { Component } from 'react'
import Header from './Header'
import MobileHeader from "./MobileHeader";
import NotFound from './NotFound'
import Footer from './Footer'
import './css/NotFoundPage.css'

class NotFoundPage extends Component {
  render() {

    return(
      <div>
        <Header/>
        <div className="error-page-body">
          <MobileHeader/>
          <NotFound/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default NotFoundPage;

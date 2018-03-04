import React, { Component } from 'react';
import "./css/NotFound.css";

const messages = [
"Lost at sea...",
"Wait. Where is the water?",
"Where'd the music go?"
];

function chosenMessage(message) {
    return messages[Math.floor(Math.random() * messages.length)]
}

class NotFound extends Component
{
  render() {
    return(
        <div className="not-found-contents">
          <h1>Error 404</h1>
          <p>{chosenMessage()}</p>
        </div>
    )
  }
}
export default NotFound;

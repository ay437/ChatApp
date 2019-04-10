import {Component} from "react";
import React from "react";

class Messages extends Component {

render() {
 const {messages} = this.props;
 return (

    <ul className = "Messages-List">
        { messages.map(m => this.renderMessage(m)) }
    </ul>
 );
}


}

export default Messages;
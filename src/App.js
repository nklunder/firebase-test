import React, { Component } from "react";
import firebase from "./firebase.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 33,
      messages: {}
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const msgsRef = rootRef.child("messages");
    console.log(msgsRef);
    msgsRef.on("value", snap => {
      this.setState({
        messages: snap.val()
      });
    });
  }

  render() {
    console.log(this.state.messgaes);
    return (
      <div className="App">
        <ul>
          {Object.keys(this.state.messages).map(key =>
            <li>
              {this.state.messages[key].text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

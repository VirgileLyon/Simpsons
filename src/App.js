import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Lamp from "./Lamp";

class homer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        Working : props.Working
      };
    }
    handleClick = () => {
      this.setState({ Working: !this.state.Working });
    };
render() {
  const pause = this.state.Working ? 'Working' : 'Holidays';
  return (
    <div className="homer">
     <img src={logo} className={`App-logo ${pause}`} alt="logo" />
            <Lamp on />
            <Lamp />
      <button
          className={pause}
          onClick={this.handleClick}>
          {pause.toUpperCase()}
      </button>
      <figure className={pause} />
    </div>
  );
}
}

export default homer;
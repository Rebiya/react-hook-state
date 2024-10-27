// MyCounter.js
import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>Click Me</button>
        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer count={this.state.count} />
      </div>
    );
  }
}

export default MyCounter;

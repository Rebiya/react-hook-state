// CounterDisplayer.js
import React from "react";

class CounterDisplayer extends React.Component {
  render() {
    return <p>Total Clicks: {this.props.count}</p>;
  }
}

export default CounterDisplayer;

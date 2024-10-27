// EvenCounterDisplayer.js
import React from "react";

class EvenCounterDisplayer extends React.Component {
  render() {
    const evenCount =
      this.props.count % 2 === 0 ? this.props.count : this.props.count - 1;
    return <p>Even Clicks: {evenCount}</p>;
  }
}

export default EvenCounterDisplayer;

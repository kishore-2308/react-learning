import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : props.initialValue 
    };
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h2", null,"count : ", this.state.value),
      React.createElement("button", { onClick: this.decrement }, "increase"),
      React.createElement("button", { onClick: this.increment }, "decrease")
    );
  }
}

export default Counter;

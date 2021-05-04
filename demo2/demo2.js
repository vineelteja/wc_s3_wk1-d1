class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", null, "hello ", this.props.name);
  }
}

ReactDOM.render(
  React.createElement(HelloMessage, { name: "westcliff" }),
  document.getElementById("hello-example")
);

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement("div", null, "Seconds: ", this.state.seconds);
  }

  // render() {
  //   return <div>seconds: {this.state.seconds}</div>;
  // }
}

ReactDOM.render(
  React.createElement(Timer, null),
  document.getElementById("timer-example")
);

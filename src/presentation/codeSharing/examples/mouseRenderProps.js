class MousePosition extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  };

  render() {
    const { x, y } = this.state;
    return this.props.render(x, y);
  }
}

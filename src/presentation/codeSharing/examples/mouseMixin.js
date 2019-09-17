const MouseMixin = {
  getInitialState() {
    return { x: 0, y: 0 };
  },

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }
};

const MousePosition = createReactClass({
  mixins: [MouseMixin],

  render() {
    const { x, y } = this.state;

    return (
      <div onMouseMove={this.handleMouseMove}>
        The mouse position is ({x}, {y})
      </div>
    );
  }
});

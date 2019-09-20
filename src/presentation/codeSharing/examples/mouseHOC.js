const withMousePosition = WrappedComponent => {
  return class MousePosition extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove = e => {
      this.setState({ x: e.clientX, y: e.clientY });
    };

    render() {
      const { x, y } = this.state;
      return (
        <WrappedComponent
          x={x}
          y={y}
          onMouseMove={this.handleMouseMove}
          {...this.props}
        />
      );
    }
  };
};

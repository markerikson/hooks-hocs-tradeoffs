function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handler = e => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return [pos, handler];
}

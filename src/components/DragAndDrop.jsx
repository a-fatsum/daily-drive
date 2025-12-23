import { useState } from "react";

export default function DragAndDrop() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - 50,
      y: e.clientY - 50,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f0f0f0",
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          width: 100,
          height: 100,
          background: "dodgerblue",
          position: "absolute",
          left: position.x,
          top: position.y,
          cursor: "grab",
        }}
      />
    </div>
  );
}

import React, { useEffect, useRef } from "react";
const MovingDots: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // ✅ Add type here

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Guard against null

    const numDots = 20;

    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.className = "dot";

      const size = Math.random() * 5 + 3;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.backgroundColor = getRandomColor();
      dot.style.top = `${Math.random() * 100}vh`;
      dot.style.left = `${Math.random() * 100}vw`;
      dot.style.setProperty("--move-x", `${Math.random() * 200 - 100}vw`);
      dot.style.setProperty("--move-y", `${Math.random() * 200 - 100}vh`);
      dot.style.animationDuration = `${Math.random() * 10 + 10}s`;

      container.appendChild(dot); // ✅ TS now knows container is HTMLDivElement
    }

    function getRandomColor() {
      const colors = [
        "#FF0000", "#00FF00", "#0000FF", "#FFFF00",
        "#FF00FF", "#00FFFF", "#3B3663", "#3399FF",
        "#93C230", "#FFAE35",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }, []);

  return <div id="movingDotsAnimation" ref={containerRef}></div>;
};

export default MovingDots;

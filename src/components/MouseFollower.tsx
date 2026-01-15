import React, { useEffect, useRef } from "react";

const MouseFollower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = document.body.getBoundingClientRect().width;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let lastX = mouse.x;
    let lastY = mouse.y;
    const ease = 0.05;
    const lerp = (current: number, target: number) =>
      current + (target - current) * ease;
    let mouseEntered = false;

    const animate = () => {
      if (!ctx) return;

      if (mouse.x === canvas.width / 2 && mouse.y === canvas.height / 2) {
        canvas.style.opacity = "0";
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const currentX = lerp(lastX, mouse.x);
        const currentY = lerp(lastY, mouse.y);

        // Draw outer ring
        ctx.beginPath();
        ctx.arc(currentX, currentY, 16, 0, 2 * Math.PI);
        ctx.strokeStyle = "#a7a9be";
        ctx.stroke();
        ctx.closePath();

        lastX = currentX;
        lastY = currentY;

        if (
          (Math.ceil(lastX) === mouse.x || Math.floor(lastX) === mouse.x) &&
          (Math.ceil(lastY) === mouse.y || Math.floor(lastY) === mouse.y)
        ) {
          canvas.style.opacity = "0";
        } else {
          canvas.style.opacity = "1";
        }
      }
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseEntered) {
        mouseEntered = true;
        animate();
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseEnter = () => {
      if (!mouseEntered) {
        mouseEntered = true;
        animate();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MouseFollower;

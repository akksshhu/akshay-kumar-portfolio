"use client";
import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8; // natural loading feel
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setShow(false), 400);
      }
      setProgress(value);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1f3a4a]">
      {/* TEXT */}
      <p className="mb-4 text-sm tracking-widest text-(--primary)">
        loading...
      </p>

      {/* PROGRESS BAR */}
      <div className="relative h-5 w-80 overflow-hidden rounded-full border-2 border-(--primary)">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-(--primary) transition-all duration-200"
          style={{ width: `${progress}%` }}
        >
          {/* STRIPES */}
          <div
            className="h-full w-full opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 4px, transparent 4px, transparent 8px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

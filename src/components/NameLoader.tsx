"use client";

import { useEffect, useState } from "react";

type Props = {
  onFinish: () => void;
};

export default function NameLoader({ onFinish }: Props) {
  const name = "Akshay Designer";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < name.length) return prev + 1;
        clearInterval(interval);
        setTimeout(onFinish, 600); // wait before site loads
        return prev;
      });
    }, 200); // letter speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-(--primary)">
      <h1 className="text-5xl md:text-7xl font-bold text-center tracking-widest">
        {name.slice(0, visibleCount)}
        <span className="animate-pulse">|</span>
      </h1>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

type CounterProps = {
  end: number;
  duration?: number;
};

export function Counter({ end, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

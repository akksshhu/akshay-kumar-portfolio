"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
export default function ScrollArrow() {
  const [atBottom, setAtBottom] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 120);

      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 20;
      setAtBottom(isBottom);
    };






    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: atBottom ? 0 : document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-8 right-8 z-50
        w-10 h-10 rounded-full
        bg-(--primary) text-black
        flex items-center justify-center
        shadow-xl

        transition-all duration-500 ease-out
        hover:scale-110 hover:rotate-6
        animate-bounceSlow
      `}
    >
      {atBottom ? (
        <ArrowUp className="animate-arrowRotate" size={26} />
      ) : (
        <ArrowDown className="animate-arrowPulse" size={26} />
      )}
    </button>
  );
}

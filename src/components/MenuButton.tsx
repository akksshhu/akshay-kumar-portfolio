"use client";

import { Menu } from "lucide-react";

export default function MenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 z-50
      w-12 h-12 rounded-full border border-white/20
      flex items-center justify-center
      bg-black/60 backdrop-blur hover:border-(--primary) transition"
    >
      <Menu className="text-white" size={22} />
    </button>
  );
}

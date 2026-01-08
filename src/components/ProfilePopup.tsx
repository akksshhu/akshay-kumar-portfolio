"use client";
import { useState } from "react";
import ProfileCard from "./ProfileCard";
import { UserRoundPen } from 'lucide-react';

export default function ProfilePopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON (2XL ke baad) */}
      <button
        onClick={() => setOpen(true)}
        className="
          block 2xl:hidden
          fixed left-6 bottom-6 z-40
          rounded-full bg-(--primary)
          p-2 text-black font-semibold
          hover:scale-105 transition
          "
      >
        <UserRoundPen/>
      </button>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* card */}
          <div className="relative z-10 animate-popup">
            <ProfileCard />
          </div>
        </div>
      )}
    </>
  );
}

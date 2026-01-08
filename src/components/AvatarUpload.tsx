"use client";

import { useRef, useState, useCallback } from "react";
import { Lock, X } from "lucide-react";

const OWNER_PIN = "7206"; // 🔴 apna secret PIN yahan rakho

export default function AvatarUpload() {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [image, setImage] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("profile-avatar");
  });

  const [showModal, setShowModal] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  // Open popup
  const handleUnlock = () => {
    setShowModal(true);
    setPin("");
    setError("");
  };

  // Check PIN
  const handleSubmit = useCallback(() => {
    if (pin === OWNER_PIN) {
      setShowModal(false);
      fileRef.current?.click();
    } else {
      setError("❌ Wrong password");
    }
  }, [pin]);

  // Image change
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setImage(base64);
        localStorage.setItem("profile-avatar", base64);
      };
      reader.readAsDataURL(file);
    },
    []
  );

  return (
    <>
      {/* Avatar */}
      <div className="relative mx-auto w-40 h-40 group">
        <img
          src={image ?? "https://i.pravatar.cc/300"}
          alt="Avatar"
          className="w-full h-full rounded-3xl object-cover border border-white/10"
          draggable={false}
        />

        {/* Lock Overlay */}
        <button
          type="button"
          onClick={handleUnlock}
          className="
            absolute inset-0 rounded-3xl
            bg-black/40 opacity-0
            flex items-center justify-center
            group-hover:opacity-100
            transition cursor-pointer
          "
          aria-label="Change profile photo"
        >
          <Lock className="text-white" />
        </button>

        {/* Hidden file input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {/* 🔐 PASSWORD POPUP */}
      {showModal && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60">
          <div className="w-[90%] max-w-sm rounded-3xl bg-black border border-white/10 p-6 text-white relative">
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-white"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-semibold mb-2 text-center">
              Owner Access
            </h3>

            <p className="text-sm text-white text-center mb-4">
              Enter password to change profile photo
            </p>

            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter password"
              className="
                w-full rounded-xl bg-black border border-white/20
                px-4 py-3 text-white outline-none
                focus:border-(--primary)
              "
            />

            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {error}
              </p>
            )}

            <button
              onClick={handleSubmit}
              className="
                mt-5 w-full rounded-full bg-(--primary)
                py-3 text-black font-semibold
                hover:scale-[1.03] transition
              "
            >
              Unlock
            </button>
          </div>
        </div>
      )}
    </>
  );
}

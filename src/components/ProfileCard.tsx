"use client";

import { useEffect, useState } from "react";
import { Instagram, Twitter, Dribbble, Github, Mail, Download } from "lucide-react";

export default function ProfileCard() {
  const [isActive, setIsActive] = useState(false);

  // Check IST active time
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      const currentMinutes =
        istTime.getHours() * 60 + istTime.getMinutes();

      const start = 9 * 60 + 30; // 9:30 AM
      const end = 18 * 60 + 30; // 6:30 PM

      setIsActive(currentMinutes >= start && currentMinutes <= end);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        w-[320px] rounded-4xl border border-white/10
        bg-black/70 backdrop-blur-xl p-6 text-center text-white
      "
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2">
          {/* Status Dot */}
          <span
            className={`h-3 w-3 rounded-full ${
              isActive ? "bg-(--primary)" : "bg-gray-500"
            }`}
          />

          <h2 className="text-2xl font-semibold">
            Akshay <span className="text-sm align-top">©</span>
          </h2>
        </div>

        <p className="text-sm text-white text-right">
          Web Designer
          <br />
          <span className="text-xs">
            {isActive ? "Active (9:30 – 6:30 IST)" : "Offline"}
          </span>
        </p>
      </div>

       <img
        src="/resume/c1d88-akshay-kumar-biography.jpg"
        className="mx-auto w-40 h-40 rounded-3xl object-cover mb-6"
        alt="Akshay Kumar"
      />

      {/* Info */}
      <p className="text-lg">Aklic7206@gmail.com</p>
      <p className="text-white mt-1">Based in India 🇮🇳</p>

      <p className="text-xs text-gray-500 mt-4">
        © {new Date().getFullYear()} Akshay Kumar
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
        {[Instagram, Twitter, Dribbble, Github].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 rounded-full border border-white/20
            flex items-center justify-center
            hover:border-(--primary) hover:text-(--primary) transition"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Hire Me Button (MAIL) */}
      <a
        href="#contact"
        className="
          mt-8 w-full rounded-full bg-(--primary)
          py-3 text-black font-semibold
          flex items-center justify-center gap-2
          hover:scale-[1.03] transition cursor-pointer
        "
      >
        <Mail size={18} /> HIRE ME
      </a>

      {/* Resume Button */}
      <a
        href="/resume/dummy-pdf_2.pdf"
        download
        className="
          mt-4 w-full rounded-full border border-(--primary)
          py-3 text-(--primary) font-semibold
          flex items-center justify-center gap-2
          hover:bg-(--primary)/10 transition
        "
      >
        <Download size={18} /> DOWNLOAD RESUME
      </a>
    </div>
  );
}

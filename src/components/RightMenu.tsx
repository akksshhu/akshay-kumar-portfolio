"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Layers,
  UsersRound,
  Grid,
  MessageSquare,
  MessageCircle,
  FolderKanban, // ⭐ PROJECT ICON
} from "lucide-react";

type MenuItem = {
  icon: React.ElementType;
  id: string;
  label: string;
};

const items: MenuItem[] = [
  { icon: Home, id: "home", label: "Home" },
  { icon: User, id: "about", label: "About" },
  { icon: Briefcase, id: "resume", label: "Resume" },
  { icon: Layers, id: "services", label: "Services" },
  // { icon: Grid, id: "skill", label: "Skills" },
  { icon: MessageCircle, id: "testimonial", label: "Testimonial" },
  { icon: FolderKanban, id: "projects", label: "Projects" },
  { icon: UsersRound, id: "team", label: "Team" },
  { icon: MessageSquare, id: "contact", label: "Contact" },
];



export default function RightMenu() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  // SCROLL SPY
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="flex flex-col gap-4 rounded-full bg-black/70 px-3 py-5 border border-[#575757]">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="relative group">
              {/* TOOLTIP */}
              <div
                className="
                absolute right-full mr-4 top-1/2 -translate-y-1/2
                opacity-0 group-hover:opacity-100
                transition-all duration-200
                pointer-events-none
              "
              >
                <div className="relative rounded-md bg-[#2b2b2b] px-3 py-1 text-xs text-white shadow-lg">
                  {item.label}

                  {/* ARROW */}
                  <span
                    className="
          absolute right-[-6px] top-1/2 -translate-y-1/2
          w-3 h-3 rotate-45 bg-[#2b2b2b]
        "
                  />
                </div>
              </div>

              {/* ICON BUTTON */}
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition
      ${
        active === item.id
          ? "bg-(--primary) text-black"
          : "text-white hover:text-(--primary)"
      }`}
              >
                <Icon size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

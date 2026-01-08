"use client";
import { useState } from "react";
import Heading from "./Heading";
import { FolderOpenDot } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    tech: "Next.js · Tailwind · Shopify",
    image: "https://picsum.photos/900/600?1",
  },
  {
    title: "Corporate Landing Page",
    tech: "React · Tailwind · UI/UX",
    image: "https://picsum.photos/900/600?2",
  },
  {
    title: "Portfolio Website",
    tech: "Next.js · Animation · SEO",
    image: "https://picsum.photos/900/600?3",
  },
  {
    title: "Dashboard UI",
    tech: "Next.js · Charts · Admin",
    image: "https://picsum.photos/900/600?4",
  },
];

export default function ProjectSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="lg:py-28 py-8  text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ">
           {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-white/20 text-xs">
          <FolderOpenDot  className="text-(--primary)" size={20}/> PROJECTS
        </div>

        {/* Heading */}
        <Heading
          as="h2"
          className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
        >
          Selected
          <span className="text-(--primary) font-normal"> Works</span>
        </Heading>
      

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT LIST */}
          <div className="space-y-10">
            {projects.slice(0, 3).map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`w-full text-left border-b pb-6 transition-all
                  ${
                    active === i
                      ? "border-(--primary)"
                      : "border-white/20 hover:border-white/50"
                  }`}
              >
                <h3 className="text-2xl font-light mb-1">{p.title}</h3>
                <p className="text-sm text-white">{p.tech}</p>
              </button>
            ))}

            {/* VIEW ALL */}
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm tracking-wide border-b border-white/30 hover:border-(--primary)"
            >
              View All Projects →
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              key={active}
              src={projects[active].image}
              className="rounded-3xl border border-white/20 transition-all duration-500"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

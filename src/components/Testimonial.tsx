"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight ,ShieldCheck } from "lucide-react";
import Heading from "./Heading";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder",
    company: "TechGrow Agency",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `Sunil is an excellent web designer with a strong eye for detail.
    He delivered our website on time with a clean, modern UI.
    Communication was smooth and professional throughout the project.`,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head",
    company: "Creative Hub India",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `Working with Sunil was a great experience.
    His design sense and frontend skills are impressive.
    He understood our requirements perfectly and delivered beyond expectations.`,
  },
  {
    name: "Amit Verma",
    role: "Co-Founder",
    company: "StartupX Solutions",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text: `Very professional and reliable designer.
    Sunil helped us build a responsive and user-friendly website.
    I would definitely recommend him for any web design project.`,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  const prev = () => {
    setIndex((index - 1 + total) % total);
  };

  const next = () => {
    setIndex((index + 1) % total);
  };

  return (
    <section
      className="relative min-h-screen text-white flex items-center overflow-hidden"
      id="testimonial"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40"
        style={{
          backgroundImage:
            "url('https://wpriverthemes.com/drake/wp-content/uploads/2023/06/testimonial-bg.png')",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12  w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-white/20 text-xs">
          <ShieldCheck className="text-(--primary)" size={20}/> TESTIMONIAL
        </div>

        {/* Heading */}
        <Heading
          as="h2"
          className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
        >
          Trusted by
          <span className="text-(--primary) font-normal"> Hunderd Clients</span>
        </Heading>

        {/* Card */}
        <div className="relative rounded-3xl border border-white/20 p-10 md:p-14 bg-white/5 backdrop-blur-sm transition-all duration-500">
          {/* Profile */}
          <div className="flex items-center gap-4 mb-8">
            <img src={t.image} className="w-12 h-12 rounded-full" alt="" />
            <div>
              <h4 className="font-medium">{t.name}</h4>
              <p className="text-sm text-white">
                {t.role} <span className="text-(--primary)">{t.company}</span>
              </p>
            </div>
          </div>

          {/* Text */}
          <p className="text-xl md:text-[16px] leading-relaxed text-gray-200 max-w-4xl">
            “{t.text}”
          </p>

          {/* Footer */}
          <div className="mt-10 text-xs tracking-widest text-white">
            PROJECT
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-10 flex items-center gap-4 ">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-(--primary)"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="text-sm text-white">
              {index + 1} / {total}
            </span>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-(--primary)"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

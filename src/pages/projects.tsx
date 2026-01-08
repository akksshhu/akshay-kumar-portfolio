"use client";
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const allProjects = [
  {
    title: "E-commerce Website",
    tech: "Next.js · Tailwind · Shopify",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
  },
  {
    title: "Corporate Business Website",
    tech: "React · Tailwind · UI Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Personal Portfolio",
    tech: "Next.js · Animation · SEO",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
  },
  {
    title: "Landing Page Design",
    tech: "HTML · CSS · Tailwind",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
  {
    title: "WordPress Business Site",
    tech: "WordPress · Elementor · UI",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Admin Dashboard UI",
    tech: "React · Tailwind · Charts",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Shopify Store Design",
    tech: "Shopify · Liquid · CSS",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Marketing Website",
    tech: "Next.js · Framer Motion",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "Agency Website",
    tech: "React · Tailwind · UX",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
  },
  {
    title: "SaaS Landing Page",
    tech: "Next.js · Tailwind · UI",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
  },
  {
    title: "Blog Website",
    tech: "Next.js · Markdown · SEO",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  {
    title: "Startup Website",
    tech: "React · Tailwind · Responsive",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
  },
];

const PER_PAGE = 6;

export default function ProjectsPage() {
  const [visible, setVisible] = useState(PER_PAGE);

  const handleSeeMore = () => {
    setVisible((prev) => prev + PER_PAGE);
  };

  return (
    <section className="lg:py-28 py-8  text-white" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 ">
        <div className=" flex items-center justify-between ">
          <div
            className="
            w-12 h-12 rounded-full
            flex items-center justify-center
            bg-(--primary) text-black
            cursor-pointer
          "
          >
            <Link to="/">
              <ArrowLeftIcon size={20} />
            </Link>
          </div>
          <Heading
            as="h2"
            className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
          >
            All
            <span className="text-(--primary) font-normal"> Projects</span>
          </Heading>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.slice(0, visible).map((p, i) => (
            <div
              key={i}
              className="
                group relative rounded-2xl overflow-hidden
                border border-white/15
                transition-all duration-500 ease-out
                hover:border-(--primary)/50
                hover:-translate-y-2
              "
            >
              {/* IMAGE */}
              <img
                src={p.image}
                className="
                  h-56 w-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
                alt={p.title}
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-black/0
                  transition-all duration-500
                  group-hover:bg-black/30
                "
              />

              {/* CONTENT */}
              <div className="relative p-5">
                <h3 className="text-lg mb-1">{p.title}</h3>
                <p className="text-sm text-white">{p.tech}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE */}
        {visible < allProjects.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleSeeMore}
              className="
                px-8 py-3 rounded-full
                border border-white/20
                text-sm tracking-wide
                transition-all duration-300
                hover:border-(--primary)
                hover:text-(--primary)
              "
            >
              See More Projects →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

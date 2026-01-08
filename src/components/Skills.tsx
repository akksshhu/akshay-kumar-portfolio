import { Figma ,Brain } from "lucide-react";

import {
  SiNextdotjs,
  SiReact,
  SiWebflow,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiAntdesign,
  SiShopify,
  SiWix,
} from "react-icons/si";
import Heading from "./Heading";

const skills = [
  {
    name: "Figma",
    percent: "100%",
    icon: <Figma size={34} className="text-(--primary)" />,
  },

  {
    name: "WordPress",
    percent: "86%",
    icon: <SiWordpress size={34} className="text-(--primary)" />,
  },

  {
    name: "HTML",
    percent: "70%",
    icon: <SiHtml5 size={34} className="text-(--primary)" />,
  },

  {
    name: "CSS",
    percent: "70%",
    icon: <SiCss3 size={34} className="text-(--primary)" />,
  },

  {
    name: "Bootstrap",
    percent: "30%",
    icon: <SiBootstrap size={34} className="text-(--primary)" />,
  },

  {
    name: "Shopify",
    percent: "60%",
    icon: <SiShopify size={34} className="text-(--primary)" />,
  },

  {
    name: "Wix",
    percent: "70%",
    icon: <SiWix size={34} className="text-(--primary)" />,
  },
];

export default function Skills() {
  return (
    <section
      className="relative min-h-screen text-white md:py-24 py-5"
      id="skill"
    >
      {/* Background */}
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12  md:px-12">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1 mb-8
        rounded-full border border-white/20 text-sm text-white"
        >
          <Brain className="text-(--primary)" size={20}/> MY SKILLS
        </div>

        {/* Heading */}
        <Heading
          as="h2"
          className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
        >
          My
          <span className="text-(--primary) font-normal"> Advantages</span>
        </Heading>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Oval */}
              <div
                className=" w-32 sm:w-44 h-32 sm:h-32 rounded-2xl
                border border-white/20
                flex flex-col items-center justify-center
                mb-6 hover:border-(--primary)/40 transition"
              >
                <div className="mb-4 text-white">{skill.icon}</div>
                <div className="text-(--primary) text-2xl font-medium">
                  {skill.percent}
                </div>
              </div>

              {/* Name */}
              <p className="text-sm text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

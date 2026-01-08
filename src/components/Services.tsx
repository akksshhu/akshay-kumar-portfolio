import { Code, Layout, Rocket ,Toolbox } from "lucide-react";
import Heading from "./Heading";

const services = [
  {
    title: "Website Design",
    desc: "I created digital products with unique ideas use Figma & Framer",
    projects: "24 PROJECTS",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Development",
    desc: "I build website go live with WordPress using themes, Shopify liquid code, Weebly, Go High Level(GHL), Wix, Squarespace",
    projects: "50 PROJECTS",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "SEO/Marketing",
    desc: "Increase the traffic for your website with SEO optimized",
    projects: "20 PROJECTS",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen  text-white py-24" id="services">
      {/* Background */}
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12  md:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8
        rounded-full border border-white/20 text-sm text-white">
          <Toolbox className="text-(--primary)" size={20}/> SERVICES
        </div>

        {/* Heading */}
        <Heading
                  as="h2"
                  className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
                >
                  My
                  <span className="text-(--primary) font-normal"> Specializations</span>
                </Heading>
      
        {/* Cards */}
        <div className="space-y-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/15
              p-8 md:p-10 flex justify-between items-start
              hover:border-(--primary)/40 transition"
            >
              {/* Left Content */}
              <div>
                <h3 className="text-2xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-white max-w-xl mb-8">
                  {item.desc}
                </p>
                <span className="text-sm text-white">
                  {item.projects}
                </span>
              </div>

              {/* Icon */}
              <div className="text-(--primary)">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

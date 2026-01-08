import { Counter } from "./Counter";
import Heading from "./Heading";
import { Hand } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen
        flex items-center justify-center
        md:pt-0 pt-28
        text-white overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20  md:px-8 lg:px-12 xl:px-20 2xl:px-20">
        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-2 px-4 py-1 mb-6
            rounded-full border border-white/20
            text-sm text-white
          "
        >
         <Hand  className="text-(--primary)" size={20} /> HELLO, I’M
        </div>

        {/* Heading */}

        <Heading as="h1" className="text-4xl md:text-7xl font-semibold">
           Akshay Kumar <span className="text-(--primary) font-normal"> Web Designer</span>
        </Heading>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-white leading-relaxed">
          I design modern, clean, and user-friendly websites that help
          businesses stand out online. Passionate about UI design, responsive
          layouts, and smooth user experiences.
        </p>

        {/* Stats */}
        <div className="mt-14 flex gap-12">
          <div>
             <Heading as="h3" className="text-4xl md:text-5xl font-semibold text-(--primary) ">
               <Counter end={2.5} />+
             </Heading>
            <p className="text-sm text-white mt-2 leading-tigh t">
              YEARS OF <br /> EXPERIENCE
            </p>
          </div>

          <div>
             <Heading as="h3" className="text-4xl md:text-5xl font-semibold text-(--primary) ">
                <Counter end={60} />+
             </Heading>
            <p className="text-sm text-white mt-2 leading-tight">
              PROJECTS COMPLETED <br /> WORLDWIDE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

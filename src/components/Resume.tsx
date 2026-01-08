import Heading from "./Heading";
import { FileUser } from 'lucide-react';

export default function Resume() {
  return (
    <section
      className="relative min-h-screen text-white flex items-center"
      id="resume"
      data-aos="zoom-in"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-2 px-4 py-1 mb-8
            rounded-full border border-white/20 text-sm text-white
          "
        >
          <FileUser className="text-(--primary)" size={20}/> RESUME
        </div>

        {/* Heading */}
        <Heading
          as="h2"
          className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
        >
          My
          <span className="text-(--primary) font-normal"> Journey</span>
        </Heading>

        {/* Timeline */}
        <div className="relative pl-10 border-l border-white/20 space-y-16">
          {/* EXPERIENCE */}
          <div className="relative">
            <span className="absolute -left-[21px] top-2 w-3 h-3 rounded-full bg-(--primary)" />
            <p className="text-sm text-white mb-4">2022 – Present</p>
            <h3 className="text-xl font-medium">Web Designer</h3>
            <p className="text-gray-500 mb-2">Remote</p>
            <p className="text-white text-sm leading-relaxed">
              Designing modern, responsive websites using HTML, CSS,
              WordPress using themes, Shopify liquid code, Hubspot, Weebly, Go High Level(GHL), Wix, Squarespace and converting UI designs into pixel-perfect
              layouts.
            </p>
          </div>
           {/* EXPERIENCE */}
          <div className="relative">
            <span className="absolute -left-[21px] top-2 w-3 h-3 rounded-full bg-white/40" />
            <p className="text-sm text-white mb-4">2019 – 2021</p>
            <h3 className="text-xl font-medium">3D Artist</h3>
            <p className="text-gray-500 mb-2">D-NEG Industry</p>
            <p className="text-white text-sm leading-relaxed">
              Worked on the Movies as a 3D and the rotoscopy artist.
            </p>
          </div>
          {/* EDUCATION */}
          <div className="relative">
            <span className="absolute -left-[21px] top-2 w-3 h-3 rounded-full bg-white/40" />
            <p className="text-sm text-white mb-4">2015 – 2018</p>
            <h3 className="text-xl font-medium">Bachelor’s Degree</h3>
            <p className="text-gray-500">
              Bechelor of Computer Applications(BCA) 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

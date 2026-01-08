import Heading from "./Heading";
import { UsersRound } from 'lucide-react';

const team = [
  {
    name: "Rohit Sharma",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/400?img=11",
    email: "sahil@gmail.com",
  },
  {
    name: "Aman Verma",
    role: "UI / UX Designer",
    image: "https://i.pravatar.cc/400?img=12",
    email: "aman@gmail.com",
  },
  {
    name: " Abhinav Developer",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/400?img=13",
    email: "rohit@gmail.com",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="lg:py-28 py-8 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ">
         {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-white/20 text-xs">
          <UsersRound  className="text-(--primary)" size={20}/> TEAM
        </div>
        {/* Heading */}
        <Heading
          as="h2"
          className="text-4xl md:text-6xl font-semibold lg:leading-17 leading-10 pb-10"
        >
          Our
          <span className="text-(--primary) font-normal"> Team</span>
        </Heading>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <a
              key={i}
              href={`mailto:${member.email}`}
              className="
                group relative rounded-2xl overflow-hidden
                border border-white/15
                transition-all duration-900 ease-out
                hover:border-(--primary)/50
              "
            >
              {/* IMAGE */}
              <img
                src={member.image}
                alt={member.name}
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-black/0
                  transition-all duration-500
                  group-hover:bg-black/60
                "
              />

              {/* CONTENT */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 p-6
                  translate-y-8 opacity-0
                  transition-all duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-sm text-white">{member.role}</p>

                <span className="inline-block mt-3 text-sm text-(--primary)">
                  Contact via email →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

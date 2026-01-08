import {
  Home,
  User,
  Briefcase,
  Layers,
  UsersRound,
  Grid,
  MessageSquare,
  MessageCircle,
  FolderKanban,
  Mail, // ⭐ PROJECT ICON
} from "lucide-react";
import { Instagram, Twitter, Dribbble, Github } from "lucide-react";
import { Link } from "react-router-dom";
import ResumeButton from "./ResumeButton";
const menu = [
  { icon: Home, id: "home", label: "Home" },
  { icon: User, id: "about", label: "About" },
  { icon: Briefcase, id: "resume", label: "Resume" },
  { icon: Layers, id: "services", label: "Services" },
  { icon: Grid, id: "skill", label: "Skills" },
  { icon: MessageCircle, id: "testimonial", label: "Testimonial" },
  { icon: FolderKanban, id: "projects", label: "Projects" },
  { icon: UsersRound, id: "team", label: "Team" },
  { icon: MessageSquare, id: "contact", label: "Contact" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function RightMenuSide({ open, onClose }: Props) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    onClose();
  };

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40" />
      )}

      {/* MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 bg-black text-white z-50
          border-l border-white/15
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <h2 className="text-3xl absolute top-4 left-6 text-(--primary)">
          SP<span className="text-white">.</span>
        </h2>
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 w-10 h-10
            rounded-full border border-[#575757]
            bg-[#1f1f1f]
            transition hover:border-(--primary)
          "
        >
          ✕
        </button>

        {/* MENU LIST */}
        <ul
          className=" mt-24
          border-t border-white/15
          relative
          max-h-[80vh]
          overflow-y-auto
          pr-2"
        >
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className="border-b border-white/15 px-3 py-4 m-0"
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="
                    group flex items-center gap-4 w-full text-left
                    text-lg font-medium
                    text-white transition
                    hover:text-(--primary)
                  "
                >
                  {/* ICON */}
                  <Icon
                    size={18}
                    className="text-(--primary) transition group-hover:text-(--primary)"
                  />

                  {/* LABEL */}
                  <span className="relative inline-block">
                    {item.label}

                    {/* underline */}
                    <span
                      className="
                        absolute left-0 -bottom-1 h-0.5 w-0
                        bg-(--primary)
                        transition-all duration-300
                        group-hover:w-full
                      "
                    />
                  </span>
                </button>
              </li>
            );
          })}
              <div className="px-3">
           <Link to="mailto:deepak@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Deepak,%0A%0AI%20want%20to%20hire%20you.">
            <button
              className="
              mt-8 w-full rounded-full bg-(--primary)
              py-3 text-black font-semibold
              flex items-center justify-center gap-2
              hover:scale-[1.03] transition cursor-pointer
            "
            >
              <Mail size={18} /> HIRE ME
            </button>
          </Link>
          <ResumeButton />
         </div>
          <div className="flex justify-center gap-4 mt-6">
            {[Instagram, Twitter, Dribbble, Github].map((Icon, i) => (
              <a
                key={i}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-(--primary) hover:text-(--primary)"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

     
        </ul>
      </div>
    </>
  );
}

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white lg:py-20 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ">

        {/* TOP */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-semibold text-(--primary) mb-3">
              SP<span className="text-(--primary)">.</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Crafting modern websites with clean UI,
              smooth animations and strong performance.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-(--primary) mb-4 font-medium">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/#${item.toLowerCase()}`}
                      className="hover:text-(--primary) transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-(--primary) mb-4 font-medium">
              Get in Touch
            </h3>

            <div className="flex items-center gap-3 text-sm mb-4">
               <Mail className="text-(--primary)" size={16} />
              <span>Sunilkumar@gmail.com</span>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10 rounded-full border border-white/20
                    flex items-center justify-center
                    hover:border-(--primary)
                    hover:text-(--primary)
                    transition
                  "
                >
                  <Icon className="text-(--primary)" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="
          mt-14 pt-6 border-t border-white/10
          flex flex-col md:flex-row
          items-center justify-between
          text-xs gap-4
        ">
          <p>
            © {new Date().getFullYear()} SP. All rights reserved.
          </p>

          <p>
            Designed & Built with ❤️ by{" "}
            <span className="text-(--primary)">Sunil Kumar</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

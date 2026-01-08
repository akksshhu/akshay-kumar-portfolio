import { Download } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/resume/dd12-13_0.pdf"
      download
      className="mt-4 w-full rounded-full bg-(--primary) py-3 text-black font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
    >
      <Download size={18} />
      DOWNLOAD RESUME
    </a>
  );
}

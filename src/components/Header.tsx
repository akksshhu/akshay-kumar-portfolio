import { Link } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";
import { Settings ,TextAlignJustify  } from 'lucide-react';

type Props = {
  onMenuClick: () => void;
  onConfigClick: () => void;
};

export default function Header({ onMenuClick, onConfigClick }: Props) {
  return (
    <>
      <h2 className="text-3xl text-(--primary) fixed top-6 left-20 z-50">
        <Link to="/">
          AK<span className="text-(--primary)">.</span>
        </Link>
      </h2>

      <button
        onClick={onMenuClick}
        className="
        fixed right-7 top-5
        w-13.75 h-13.75
        rounded-full
        border border-[#575757]
        bg-[#1f1f1f]
        cursor-pointer
        transition-all duration-300
        z-40
        hover:border-[#00ff88]
        flex flex-col items-center justify-center
        gap-1
        
      "
      >
       <TextAlignJustify size={20} className="text-(--primary)" />
      </button>

      {/* CONFIG BUTTON */}
      <button
        onClick={onConfigClick}
        className="fixed top-6 left-6 w-10 h-10 rounded bg-[#1f1f1f]
         border border-gray-600 z-50 flex items-center justify-center cursor-pointer"
      >
        <span className="  animate-spin"><Settings size={20} className="text-(--primary)"/></span>
      </button>
      <ProfilePopup/>
    </>
  );
}

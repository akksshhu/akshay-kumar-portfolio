import ThemeSwitcher from "./ThemeSwitcher";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ConfigPanel({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <>
      {/* BACKDROP (window click) */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* PANEL */}
      <div
        className="
          fixed right-0 top-0 h-full md:w-96 w-60 bg-[#111]
          transition-transform duration-300 z-50
          translate-x-0
        "
        onClick={(e) => e.stopPropagation()} // panel ke andar click safe
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-xl text-white"
        >
          ✕
        </button>

        <div className="md:p-10 p-6 text-white">
            <h2 className="text-3xl text-(--primary) absolute top-7 left-7">
                SP<span className="text-(--primary)">.</span>
              </h2>
            <h2 className="text-3xl mb-10 mt-15">Configuration</h2>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}

const colors = [
  // NEON / ACCENT
  "#00ff88", // neon green
  "#22c55e", // emerald
  "#14b8a6", // teal

  // WARM
  "#facc15", // yellow
  "#fb923c", // orange
  "#f97316", // deep orange

  // COOL
  "#38bdf8", // sky blue
  "#3b82f6", // blue
  "#2563eb", // royal blue
  "#6366f1", // indigo

  // PINK / PURPLE
  "#ec4899", // pink
  "#f9a8d4", // soft pink
  "#a855f7", // purple
  "#8b5cf6", // violet

  // RED
  "#ef4444", // red
  "#dc2626", // deep red

  // NEUTRAL (safe)
  "#e5e7eb", // light gray
  "#94a3b8", // slate
];


export default function ThemeSwitcher() {
  const changeColor = (color: string) => {
    document.documentElement.style.setProperty("--primary", color);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-sm text-white">COLORS</h3>
      <div className="md:flex block gap-5 flex-wrap">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => changeColor(color)}
            className="w-8 h-8 rounded-full border border-white/20 md:m-0 m-2.5 cursor-pointer"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default function LiquidBG() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 opacity-30
        bg-[radial-gradient(circle_at_30%_20%,#ffffff12,transparent_40%),
        radial-gradient(circle_at_70%_60%,#ffffff12,transparent_40%)]" />

      <img
        src="/liquid.svg"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        alt=""
      />
    </div>
  );
}

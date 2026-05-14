export function MeshBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-mesh)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%)",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(91,140,255,0.25),transparent_60%)] blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[400px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(185,107,255,0.18),transparent_60%)] blur-3xl animate-float-slow" />
    </div>
  );
}

// pages/Home.tsx

export default function Home() {
  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size:60px_60px]" />
      </div>

      {/* Card */}
      <div className="group relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10">
        {/* Glow Effect */}
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:bg-white/20" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-300 backdrop-blur-xl">
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-300" />
            WEBSITE IN PROGRESS
          </div>

          <h1 className="mb-6 bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-7xl">
            Under Construction
            <br />
          </h1>
        </div>

        {/* Bottom Shine */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </div>
  );
}

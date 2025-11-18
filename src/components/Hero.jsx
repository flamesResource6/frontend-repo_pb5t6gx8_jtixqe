import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Sparkles, Rocket, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* Spline scene as the living centerpiece */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Radial gradient aura to blend with the Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(124,58,237,0.18),transparent_60%)]" />

      {/* Ultra-thin top navigation */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple-400 via-blue-400 to-orange-300 shadow-[0_0_20px_rgba(168,85,247,0.35)]" />
            <span className="text-sm font-semibold tracking-tight text-white/90">Auralyze</span>
            <span className="ml-3 hidden h-px w-16 bg-white/10 sm:block" />
            <span className="hidden text-xs text-white/60 sm:block">AI SEO • SEO • Analytics</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
              <Search className="h-3.5 w-3.5 text-white/70" />
              Explore Tools
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 px-4 py-1.5 text-xs font-medium text-white shadow-[0_6px_30px_rgba(59,130,246,0.35)] transition hover:brightness-110">
              <Rocket className="h-3.5 w-3.5" />
              Start Free
            </button>
          </div>
        </nav>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-6xl"
        >
          Ultra‑thin AI platform for SEO and Analytics
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-base leading-7 text-white/70 sm:text-lg"
        >
          Plan, optimize, and measure across every department — growth, content, product, and ops — whether you run a global enterprise or you’re just starting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            View Plans
          </a>
          <a
            href="#tools"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 px-5 py-2 text-sm font-medium text-white shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition hover:brightness-110"
          >
            <Sparkles className="h-4 w-4" />
            Try AI SEO
          </a>
        </motion.div>

        {/* Micro trust row */}
        <div className="mt-10 flex items-center gap-6 text-xs text-white/50">
          <span className="h-px w-10 bg-white/10" />
          <span>Privacy-first • SOC2-ready • 256-bit SSL</span>
          <span className="h-px w-10 bg-white/10" />
        </div>
      </div>

      {/* Bottom fade for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </section>
  );
}

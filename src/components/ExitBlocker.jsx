import { motion } from "framer-motion";

export default function ExitBlocker() {
  return (
    <section className="relative isolate mx-auto my-12 w-full max-w-4xl px-6 sm:my-20">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(1200px_300px_at_50%_0%,rgba(79,70,229,0.15),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
      >
        <div className="flex flex-col items-center text-center">
          <h3 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Unlock Your Competitive Edge Now—Instant Access. Don’t wait.
          </h3>

          <p className="mt-3 text-sm text-white/70">
            Join <span className="font-semibold text-white">10,000+ businesses</span> boosting results daily.
          </p>

          <div className="mt-6">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-label="Claim your free trial"
            >
              Claim Your Free Trial
            </a>
          </div>

          <p className="mt-3 text-xs text-white/60">
            Risk‑free signup. Instant access. No card needed.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

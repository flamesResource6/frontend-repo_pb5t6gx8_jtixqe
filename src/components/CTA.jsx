import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-2xl font-semibold tracking-tight text-transparent"
        >
          Launch in minutes. Scale to millions.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-xl text-sm text-white/70"
        >
          Everything you need to plan keywords, write content, optimize pages, and track performance — crafted in an ultra‑thin, high‑contrast interface.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/90 hover:border-white/25 hover:bg-white/10">
            View pricing
          </a>
          <a href="#tools" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-white/90">
            Explore tools
          </a>
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  {
    text: (
      <>
        Instant AI upgrades to your search game —
        <span className="text-sky-300/90"> no setup drama</span>.
      </>
    ),
    dir: 1,
  },
  {
    text: (
      <>
        See what’s working this week, not last quarter:
        <span className="text-sky-300/90"> live visibility</span>.
      </>
    ),
    dir: -1,
  },
  {
    text: (
      <>
        Ship pages that rank because they deserve to —
        <span className="text-sky-300/90"> intent-aligned</span>, not stuffed.
      </>
    ),
    dir: 1,
  },
  {
    text: (
      <>
        Insights that read like decisions:
        <span className="text-sky-300/90"> what to write, fix, and launch</span>.
      </>
    ),
    dir: -1,
  },
  {
    text: (
      <>
        Your team stays in flow — we do the diffing, clustering, and tracking
        <span className="text-sky-300/90"> in the background</span>.
      </>
    ),
    dir: 1,
  },
  {
    text: (
      <>
        Precision over noise. Momentum over dashboards. 
        <span className="text-sky-300/90"> Results over rituals</span>.
      </>
    ),
    dir: -1,
  },
];

export default function ExperientialAd() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section aria-label="Experience the platform" ref={ref} className="relative mx-auto w-full border-y border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mb-8 text-xs uppercase tracking-widest text-white/40">What it feels like</div>
        <div className="space-y-10 sm:space-y-12">
          {lines.map((item, idx) => {
            const x = useTransform(scrollYProgress, [0, 1], [item.dir * -20, item.dir * 20]);
            return (
              <motion.p
                key={idx}
                style={{ x }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.4, once: false }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-balance text-xl leading-tight text-white/90 sm:text-2xl md:text-3xl"
              >
                <span className="[text-wrap:balance] hover:text-white transition-colors duration-200">{item.text}</span>
              </motion.p>
            );
          })}
        </div>

        <motion.div
          aria-hidden
          className="mt-12 flex items-center gap-3 text-sm text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="h-px w-8 bg-white/15" />
          A quiet, continuous reveal — no buttons, no breaks. Just forward motion.
        </motion.div>
      </div>
    </section>
  );
}

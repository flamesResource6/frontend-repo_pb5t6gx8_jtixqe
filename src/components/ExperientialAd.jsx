import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  {
    text: (
      <>
        Clarity over noise
        <span className="text-sky-300/90">.</span>
      </>
    ),
    dir: 1,
  },
  {
    text: (
      <>
        Live visibility
        <span className="text-sky-300/90">, zero setup</span>
      </>
    ),
    dir: -1,
  },
  {
    text: (
      <>
        Ship what ranks
        <span className="text-sky-300/90">.</span>
      </>
    ),
    dir: 1,
  },
];

export default function ExperientialAd() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section aria-label="Experience the platform" ref={ref} className="relative mx-auto w-full border-y border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
        <div className="space-y-8 sm:space-y-10">
          {lines.map((item, idx) => {
            const x = useTransform(scrollYProgress, [0, 1], [item.dir * -16, item.dir * 16]);
            return (
              <motion.p
                key={idx}
                style={{ x }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: false }}
                transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-balance text-2xl leading-tight text-white/90 sm:text-3xl md:text-4xl"
              >
                <span className="[text-wrap:balance] hover:text-white transition-colors duration-200">{item.text}</span>
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

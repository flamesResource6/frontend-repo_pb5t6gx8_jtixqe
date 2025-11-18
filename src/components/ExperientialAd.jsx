import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ExperientialAd() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section aria-label="Experience the platform" ref={ref} className="relative mx-auto w-full border-y border-white/10 bg-slate-950/80">
      <div className="mx-auto max-w-6xl px-6 py-4 sm:py-5">
        <motion.p
          style={{ x }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: false }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-[13px] sm:text-sm leading-relaxed text-white/70">
          Clarity • Live visibility • Ship what ranks • No setup
        </motion.p>
      </div>
    </section>
  );
}

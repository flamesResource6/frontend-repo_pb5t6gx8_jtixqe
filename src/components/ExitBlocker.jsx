import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

// Ultra-thin, high-tension strip with:
// - Spotlight cursor glow
// - Rotating micro-stats
// - Subtle urgency meter
// - Bold primary CTA
export default function ExitBlocker() {
  const [idx, setIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0, inside: false });
  const containerRef = useRef(null);

  const messages = useMemo(
    () => [
      {
        k: "uplift",
        text: "Avg. 27% lift in organic clicks within 30 days",
      },
      { k: "time", text: "Set up in 3 minutes • No code • Real insights" },
      { k: "roi", text: "$9.6 ROI for every $1 spent (median across Pro)" },
      { k: "teams", text: "Trusted by 10,000+ growth teams globally" },
    ],
    []
  );

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 2400);
    return () => clearInterval(t);
  }, [messages.length]);

  // spotlight tracking
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        inside: true,
      });
    };
    const onLeave = () => setMouse((m) => ({ ...m, inside: false }));
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // urgency meter (loops subtly to suggest motion)
  const [meter, setMeter] = useState(62);
  useEffect(() => {
    const t = setInterval(() => {
      setMeter((m) => {
        const n = m + (Math.random() * 2 - 1);
        return Math.max(35, Math.min(95, n));
      });
    }, 1200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative mx-auto my-12 w-full max-w-6xl px-6 sm:my-20">
      {/* gradient frame */}
      <div className="relative rounded-2xl bg-gradient-to-r from-indigo-600/30 via-fuchsia-500/20 to-cyan-500/30 p-[1px]">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-[15px] border border-white/10 bg-white/5 backdrop-blur-xl"
          style={
            mouse.inside
              ? {
                  maskImage: `radial-gradient(240px 160px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.07) 60%, rgba(0,0,0,0.25) 100%)`,
                  WebkitMaskImage: `radial-gradient(240px 160px at ${mouse.x}px ${mouse.y}px, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.07) 60%, rgba(0,0,0,0.25) 100%)`,
                }
              : undefined
          }
        >
          {/* soft background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_300px_at_50%_-20%,rgba(99,102,241,0.18),transparent)]" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative grid items-center gap-4 px-5 py-5 sm:grid-cols-[1fr_auto] sm:gap-6 sm:px-8 sm:py-6"
          >
            {/* left: headline + rotating micro-stat */}
            <div className="flex min-w-0 items-center gap-4">
              <div className="hidden shrink-0 rounded-full bg-white/10 p-2 text-white/80 sm:block">
                <Sparkles size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium tracking-tight text-white sm:text-base">
                  Don’t bounce yet — your competitors won’t.
                </div>
                <div className="mt-1 h-5 overflow-hidden text-xs text-white/70 sm:h-6">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={messages[idx].k}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="truncate"
                    >
                      {messages[idx].text}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* urgency meter */}
                <div className="mt-3 hidden items-center gap-2 sm:flex">
                  <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                      style={{ width: `${meter}%` }}
                      transition={{ type: "tween", duration: 0.8 }}
                    />
                  </div>
                  <span className="text-[11px] text-white/60">Free trials going fast</span>
                </div>
              </div>
            </div>

            {/* right: CTA + reassurance */}
            <div className="flex flex-col items-stretch justify-center gap-2 sm:items-end">
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_10px_30px_-10px_rgba(255,255,255,0.4)] transition-transform hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Claim your free trial"
              >
                Claim your free trial
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="flex items-center gap-1.5 text-[11px] text-white/65">
                <ShieldCheck size={14} className="opacity-80" />
                <span>Risk‑free • Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

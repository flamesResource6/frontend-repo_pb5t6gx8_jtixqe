import { motion } from "framer-motion";
import { Gauge, BarChart3, Megaphone, Bot, LineChart, Globe } from "lucide-react";

const features = [
  {
    title: "AI SEO Copilot",
    desc: "Generate briefs, clusters, and internal link maps with one prompt.",
    icon: Bot,
  },
  {
    title: "Real‑time Rank Tracking",
    desc: "Universal SERP checks across locations and devices.",
    icon: Gauge,
  },
  {
    title: "Multi‑channel Analytics",
    desc: "Unify web, content, and campaign metrics in one view.",
    icon: BarChart3,
  },
  {
    title: "Growth Campaigns",
    desc: "Automate on‑page fixes and distribution with AI.",
    icon: Megaphone,
  },
  {
    title: "Attribution & LTV",
    desc: "Model ROI by cohort and channel over time.",
    icon: LineChart,
  },
  {
    title: "Global & Local",
    desc: "Internationalization and local packs out of the box.",
    icon: Globe,
  },
];

export default function FeatureStrips() {
  return (
    <section id="tools" className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-2xl font-semibold tracking-tight text-transparent">
            Tools for every department
          </h2>
          <p className="text-xs text-white/50">Marketing • Product • Content • Ops • Sales</p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500/30 via-blue-500/30 to-cyan-400/30 text-white/80 ring-1 ring-inset ring-white/10">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-medium text-white/90">{f.title}</div>
                <div className="mt-1 text-sm text-white/60">{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

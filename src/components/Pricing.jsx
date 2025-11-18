import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    highlight: false,
    features: [
      "AI SEO briefs (50/mo)",
      "Keyword discovery",
      "Basic rank tracking",
      "Site health monitor",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    highlight: true,
    features: [
      "AI SEO briefs (Unlimited)",
      "Clusters & internal links",
      "Advanced rank tracking",
      "Attribution & funnels",
      "API access",
    ],
    cta: "Upgrade",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      "SAML/SSO & RBAC",
      "Data warehouse sync",
      "White‑glove onboarding",
      "Dedicated support",
    ],
    cta: "Talk to Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
            Simple, transparent pricing
          </h2>
          <p className="mt-2 text-sm text-white/60">Choose a plan that scales with your needs.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-sm ${
                t.highlight
                  ? "border-white/20 bg-white/10 shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-2 right-6 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                  Most Popular
                </div>
              )}
              <div className="text-sm font-semibold text-white/80">{t.name}</div>
              <div className="mt-3 flex items-end gap-1">
                <div className="text-3xl font-bold text-white">{t.price}</div>
                <div className="pb-1 text-xs text-white/60">{t.period}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-purple-400 via-blue-400 to-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-full px-4 py-2 text-sm font-medium transition ${
                t.highlight
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "border border-white/15 bg-white/5 text-white/90 hover:border-white/25 hover:bg-white/10"
              }`}>
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

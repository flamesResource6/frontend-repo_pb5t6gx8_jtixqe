import Hero from "./components/Hero";
import FeatureStrips from "./components/FeatureStrips";
import Logos from "./components/Logos";
import Pricing from "./components/Pricing";
import ExitBlocker from "./components/ExitBlocker";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Logos />
      <FeatureStrips />
      <Pricing />
      <ExitBlocker />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-6xl px-6 text-xs text-white/50">
          © {new Date().getFullYear()} Auralyze. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;

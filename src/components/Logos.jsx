const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Shopify_logo_2018.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Meta_Platforms_Inc._logo.svg",
];

export default function Logos() {
  return (
    <section className="w-full bg-slate-950 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 text-center text-xs text-white/50">Trusted by modern teams</div>
        <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((src) => (
            <img key={src} src={src} alt="logo" className="mx-auto h-6 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}

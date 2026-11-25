"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

const PHONE = "+91 81215 45757";
const PHONE_HREF = "tel:+918121545757";
const WHATSAPP = "https://wa.me/918121545757";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Platinum+Fitness+Club+Women+Exclusive+Suncity+Vantage+Line+Mall+Bandlaguda+Jagir+Hyderabad";

const PLATES = [
  { weight: "25", color: "#C0392B", ring: "#922B21", w: 28, h: 220, side: -1 },
  { weight: "20", color: "#2E86C1", ring: "#1B4F72", w: 26, h: 200, side: 1 },
  { weight: "15", color: "#E3A087", ring: "#B86A52", w: 24, h: 176, side: -1 },
  { weight: "10", color: "#D5D8DC", ring: "#95A5A6", w: 22, h: 152, side: 1 },
  { weight: "5",  color: "#F0C4B0", ring: "#D89A7E", w: 20, h: 128, side: -1 },
  { weight: "2.5",color: "#BDC3C7", ring: "#7F8C8D", w: 18, h: 106, side: 1 },
];

const services = [
  { title: "Strength & Conditioning", desc: "Women-centric machines, barbells, dumbbells and coached form — rep by rep." },
  { title: "Cardio & Endurance", desc: "Treadmills, steppers, climbers and cycles on a full-time AC floor." },
  { title: "Zumba & Aerobics", desc: "High-energy evening group classes in a dedicated studio." },
  { title: "Yoga & Mobility", desc: "Morning yoga for stretching, balance, recovery and beginners." },
  { title: "Personal Training", desc: "One-on-one coaching from certified lady trainers for real goals." },
  { title: "Sauna & Steam", desc: "Recover and unwind after training — premium member amenities." },
];

const trainers = ["Priyanka", "Tabassum", "Sana", "Reem", "Sucharitha", "Irfana", "Prachi"];

const reviews = [
  { quote: "One-of-a-kind female-only gym in Hyderabad. All the mats, equipment, floors, changing rooms and washrooms get cleaned every few hours, with ample lighting and full-time air conditioning.", name: "Google review", meta: "5.0 · 2026" },
  { quote: "As a beginner I was nervous about joining a gym, but trainer Sucharitha made me feel at ease from day one. She explains every exercise clearly without making you feel judged.", name: "Suncity member", meta: "5.0 · 2026" },
  { quote: "Special thanks to Irfana and Sucharitha for their exceptional training and constant motivation. Knowledgeable, patient, and always ensuring proper form.", name: "Google review", meta: "5.0 · 2026" },
];

const gallery = [
  { src: "/images/suncity-3.jpg", alt: "Dumbbell rack at Platinum Fitness Suncity" },
  { src: "/images/suncity-6.jpg", alt: "Zumba and group class studio at Suncity" },
  { src: "/images/suncity-1.jpg", alt: "Motivational mural at Platinum Fitness Suncity" },
  { src: "/images/suncity-2.jpg", alt: "Functional trainer at Suncity" },
  { src: "/images/suncity-8.jpg", alt: "Reception at Platinum Fitness Suncity" },
  { src: "/images/suncity-9.jpg", alt: "Leg machine at Suncity" },
];

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const barRotateX = useTransform(scrollYProgress, [0, 0.45, 1], [24, 12, 6]);
  const barRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-28, -12, -4]);
  const barRotateZ = useTransform(scrollYProgress, [0, 1], [-2, 0]);
  const barScale = useTransform(scrollYProgress, [0, 0.35, 1], [0.82, 1, 1.04]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [30, -10]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0.15, 0.7, 0.45, 0.3]);
  const titleY = useTransform(scrollYProgress, [0, 0.22], [0, -60]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const loadedOpacity = useTransform(scrollYProgress, [0.72, 0.85], [0, 1]);
  const loadedY = useTransform(scrollYProgress, [0.72, 0.85], [30, 0]);
  const midOpacity = useTransform(scrollYProgress, [0.18, 0.28, 0.62, 0.72], [0, 1, 1, 0]);
  const midY = useTransform(scrollYProgress, [0.18, 0.28], [24, 0]);
  const barTransform = useMotionTemplate`perspective(1400px) rotateX(${barRotateX}deg) rotateY(${barRotateY}deg) rotateZ(${barRotateZ}deg) scale(${barScale})`;

  return (
    <main className="bg-[#100E0F] text-[#FBF5F2]">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,160,135,0.16),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(227,160,135,0.08),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(251,245,242,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,245,242,.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-4 backdrop-blur-md bg-[#100E0F]/45 border-b border-white/5">
        <a href="#top" className="flex items-center gap-3">
          <img src="/images/suncity-logo.jpg" alt="Platinum Fitness Club Women Exclusive" className="h-11 w-11 rounded-full object-cover ring-2 ring-[#E3A087]/40" />
          <div className="hidden sm:block">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#E3A087]">Platinum Fitness Club</p>
            <p className="text-sm font-semibold tracking-wide">Women Exclusive · Suncity</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#D6C7C0]">
          <a href="#services" className="hover:text-[#E3A087] transition">Services</a>
          <a href="#equipment" className="hover:text-[#E3A087] transition">Equipment</a>
          <a href="#gallery" className="hover:text-[#E3A087] transition">Gallery</a>
          <a href="#reviews" className="hover:text-[#E3A087] transition">Reviews</a>
          <a href="#visit" className="hover:text-[#E3A087] transition">Visit</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-[#E3A087] px-5 py-2.5 text-sm font-semibold text-[#100E0F] hover:bg-[#f0bea8] transition">
          WhatsApp
        </a>
      </header>

      <section id="top" ref={sectionRef} className="relative h-[420vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,160,135,0.12),transparent_58%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[38vh] bg-gradient-to-t from-[#100E0F] via-[#100E0F]/40 to-transparent z-10" />

          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="absolute inset-x-0 top-[84px] md:top-[92px] z-20 text-center px-6 pointer-events-none">
            <p className="text-[10px] md:text-xs tracking-[0.55em] uppercase text-[#E3A087] mb-4">Platinum Fitness Club · Women Exclusive · Suncity</p>
            <h1 className="text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[0.86] font-black tracking-tight uppercase">
              <span className="block text-[#FBF5F2] [text-shadow:0_10px_40px_rgba(0,0,0,0.55)]">Load The</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F5D0BD] via-[#E3A087] to-[#A86249]">Barbell</span>
            </h1>
          </motion.div>

          <motion.div style={{ opacity: titleOpacity }} className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#E3A087]/80 [writing-mode:vertical-rl] rotate-180">Scroll to load plates</p>
          </motion.div>
          <motion.div style={{ opacity: titleOpacity }} className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 hidden lg:block text-right">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#FBF5F2]/50">Suncity</p>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#FBF5F2]/50">Hyderabad</p>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center px-4 pt-[34vh] md:pt-[28vh]">
            <motion.div style={{ y: sceneY }} className="relative w-full max-w-6xl h-[520px] md:h-[560px]">
              <motion.div style={{ opacity: glowOpacity }} className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 w-[min(92vw,900px)] h-[220px] md:h-[280px] rounded-full bg-[#E3A087]/30 blur-[100px]" />
              <div className="absolute left-1/2 top-[68%] -translate-x-1/2 w-[min(88vw,760px)] h-24 bg-black/40 blur-3xl rounded-full" />

              <motion.div
                style={{ transform: barTransform, transformStyle: "preserve-3d" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[420px]"
              >
                {/* end caps */}
                <div className="absolute left-[4%] md:left-[7%] top-1/2 -translate-y-1/2 w-4 md:w-5 h-10 md:h-12 rounded-sm bg-gradient-to-b from-[#9EA3AA] to-[#555B63] shadow-lg" />
                <div className="absolute right-[4%] md:right-[7%] top-1/2 -translate-y-1/2 w-4 md:w-5 h-10 md:h-12 rounded-sm bg-gradient-to-b from-[#9EA3AA] to-[#555B63] shadow-lg" />

                {/* sleeves */}
                <div className="absolute left-[5%] md:left-[8%] top-1/2 -translate-y-1/2 w-[20%] h-8 md:h-10 rounded-md bg-gradient-to-b from-[#C9CDD3] via-[#868D96] to-[#4A5058] shadow-[inset_0_2px_4px_rgba(255,255,255,.35),0_12px_24px_rgba(0,0,0,.45)]" />
                <div className="absolute right-[5%] md:right-[8%] top-1/2 -translate-y-1/2 w-[20%] h-8 md:h-10 rounded-md bg-gradient-to-b from-[#C9CDD3] via-[#868D96] to-[#4A5058] shadow-[inset_0_2px_4px_rgba(255,255,255,.35),0_12px_24px_rgba(0,0,0,.45)]" />

                {/* collars */}
                <div className="absolute left-[24.5%] md:left-[27%] top-1/2 -translate-y-1/2 w-4 md:w-5 h-16 md:h-20 rounded-sm bg-gradient-to-b from-[#F0C4B0] via-[#D18E72] to-[#7A4A38] shadow-[0_8px_18px_rgba(0,0,0,.45)] z-20" />
                <div className="absolute right-[24.5%] md:right-[27%] top-1/2 -translate-y-1/2 w-4 md:w-5 h-16 md:h-20 rounded-sm bg-gradient-to-b from-[#F0C4B0] via-[#D18E72] to-[#7A4A38] shadow-[0_8px_18px_rgba(0,0,0,.45)] z-20" />

                {/* shaft */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[84%] h-5 md:h-6 rounded-full bg-gradient-to-b from-[#E3E5E8] via-[#949AA2] to-[#525962] shadow-[0_22px_45px_rgba(0,0,0,0.6)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+5px)] w-[90%] md:w-[84%] h-[3px] rounded-full bg-white/25 blur-[0.5px]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24%] h-5 md:h-6 rounded-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.22)_0_2px,rgba(0,0,0,.18)_2px_5px)] opacity-45" />

                {PLATES.map((plate, i) => {
                  const start = 0.08 + i * 0.13;
                  const end = start + 0.12;
                  return <Plate key={i} plate={plate} index={i} progress={scrollYProgress} start={start} end={end} />;
                })}
              </motion.div>

              <motion.div style={{ opacity: midOpacity, y: midY }} className="absolute bottom-[2vh] left-0 right-0 z-20 px-6">
                <div className="mx-auto max-w-4xl grid grid-cols-3 gap-3 md:gap-6 text-center">
                  {[
                    { k: "4.8★", v: "Google Rating" },
                    { k: "100%", v: "Women Exclusive" },
                    { k: "Suncity", v: "Bandlaguda Jagir" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm px-3 py-4 md:py-5">
                      <div className="text-xl md:text-3xl font-black text-[#E3A087]">{s.k}</div>
                      <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#D6C7C0] mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#FBF5F2]/45 mt-5">Plates loading as you scroll</p>
              </motion.div>

              <motion.div style={{ opacity: loadedOpacity, y: loadedY }} className="absolute bottom-[2vh] left-0 right-0 text-center z-20 px-6">
                <p className="text-[#E3A087] text-[11px] tracking-[0.45em] uppercase mb-3">Bar Loaded · Suncity Ready</p>
                <p className="text-2xl md:text-4xl font-bold tracking-tight">Platinum Fitness Club <span className="text-[#E3A087]">Women Exclusive</span></p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div style={{ opacity: titleOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-[#E3A087]/80">
            <span className="text-[10px] tracking-[0.45em] uppercase">Scroll</span>
            <div className="h-14 w-px bg-gradient-to-b from-[#E3A087] to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/5 bg-[#151113]/80 backdrop-blur-sm">
        <div className="overflow-hidden py-4">
          <div className="animate-marquee whitespace-nowrap flex gap-8 text-[11px] tracking-[0.3em] uppercase text-[#D6C7C0]/80">
            {[...Array(2)].flatMap(() => ["Suncity · Bandlaguda Jagir", "Women Only", "Certified Lady Trainers", "Strength & Cardio", "Zumba & Yoga", "Steam & Sauna", "4.8★ · 170 Google Reviews"]).map((item, i) => (
              <span key={i} className="flex items-center gap-8"><span>{item}</span><span className="text-[#E3A087]">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">Suncity Exclusive</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">Built for women who <span className="text-[#E3A087]">lift stronger.</span></h2>
          </div>
          <p className="text-[#D6C7C0] text-base md:text-lg leading-relaxed max-w-xl">
            A premium women-exclusive gym in Suncity, Bandlaguda Jagir, Hyderabad. Real coaching, real strength training, and an atmosphere that makes you show up.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#E3A087]/40 hover:bg-[#E3A087]/[0.06] transition duration-300">
              <div className="h-10 w-10 rounded-full bg-[#E3A087]/15 text-[#E3A087] flex items-center justify-center mb-5 text-xs font-bold">0{i + 1}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#CFC0B8] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="equipment" className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">Training Floor</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">Equipment that <span className="text-[#E3A087]">delivers results.</span></h2>
          </div>
          <p className="text-[#D6C7C0] text-base md:text-lg leading-relaxed max-w-xl">
            A fully equipped women-only floor at Suncity — from free weights to cardio and recovery, everything you need under one roof.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Free Weights", items: ["Dumbbells rack", "Barbells & plates", "Kettlebells", "Flat & incline benches"], img: "/images/suncity-3.jpg" },
            { title: "Strength Machines", items: ["Leg press / leg machines", "Functional trainer & cables", "Chest & back machines", "Women-centric strength line"], img: "/images/suncity-9.jpg" },
            { title: "Cardio Zone", items: ["Treadmills", "Steppers & climbers", "Exercise cycles", "Full-time AC floor"], img: "/images/suncity-2.jpg" },
            { title: "Functional Training", items: ["Battle ropes / core tools", "Mats & stretching area", "Mobility & balance gear", "Open floor space"], img: "/images/suncity-5.jpg" },
            { title: "Group Studio", items: ["Zumba & aerobics studio", "Yoga mats, blocks & bands", "Mirrors & sound setup", "Evening group classes"], img: "/images/suncity-6.jpg" },
            { title: "Recovery & Amenities", items: ["Steam & sauna", "Changing rooms & lockers", "Clean washrooms", "Reception & support"], img: "/images/suncity-8.jpg" },
          ].map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }} className="group rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-[#E3A087]/40 transition duration-300">
              <div className="relative h-44 overflow-hidden">
                <img src={cat.img} alt={cat.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100E0F] via-[#100E0F]/20 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-xl font-semibold">{cat.title}</h3>
              </div>
              <ul className="p-5 space-y-2">
                {cat.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-[#CFC0B8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E3A087] shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="gallery" className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">Real Suncity Branch</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Inside the <span className="text-[#E3A087]">club.</span></h2>
          </div>
          <p className="text-[#D6C7C0] max-w-md">Real photos from Platinum Fitness Club Women Exclusive, Suncity — Vantage Line Mall, Bandlaguda Jagir.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <motion.div key={img.src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className={`relative overflow-hidden rounded-3xl border border-white/10 ${i === 0 ? "md:row-span-2 md:h-full" : "h-56 md:h-64"}`}>
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover hover:scale-[1.03] transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100E0F]/45 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">Certified Lady Trainers</p>
          <div className="flex flex-wrap gap-3">
            {trainers.map((t) => (
              <span key={t} className="rounded-full border border-[#E3A087]/25 bg-[#E3A087]/10 px-5 py-2.5 text-sm font-medium text-[#F3C8A2]">{t}</span>
            ))}
          </div>
          <p className="mt-6 text-[#CFC0B8] max-w-2xl">Supportive, experienced trainers who guide form, confidence, and consistency — especially for beginners, PCOS/thyroid-friendly routines, and strength goals.</p>
        </div>
      </section>

      <section id="reviews" className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">4.8★ · 170 Google Reviews</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Women love <span className="text-[#E3A087]">training here.</span></h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-[#E3A087] text-lg mb-4">★★★★★</div>
              <p className="text-[#EAE0DA] leading-relaxed mb-6">“{r.quote}”</p>
              <div className="text-sm text-[#CFC0B8]"><span className="font-semibold text-[#FBF5F2]">{r.name}</span> · {r.meta}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="visit" className="relative z-10 px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="rounded-[2rem] overflow-hidden border border-[#E3A087]/20 bg-gradient-to-br from-[#1A1416] to-[#120F10] grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">Visit Suncity</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Your strongest chapter starts here.</h2>
            <p className="text-[#D6C7C0] leading-relaxed mb-4 max-w-xl">
              Platinum Fitness Club Women Exclusive, 2nd Floor, Vantage Line Mall, Suncity, Bandlaguda Jagir, Hyderabad.
            </p>
            <p className="text-[#D6C7C0] mb-8">Call/WhatsApp: <a href={PHONE_HREF} className="text-[#E3A087] font-semibold">{PHONE}</a></p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full bg-[#E3A087] px-6 py-3 text-sm font-semibold text-[#100E0F] hover:bg-[#f0bea8] transition">WhatsApp Now</a>
              <a href={MAPS} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:border-[#E3A087]/60 hover:text-[#E3A087] transition">Open in Maps</a>
              <a href={PHONE_HREF} className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:border-[#E3A087]/60 hover:text-[#E3A087] transition">Call</a>
            </div>
          </div>
          <div className="min-h-[300px] lg:min-h-full relative">
            <img src="/images/suncity-7.jpg" alt="Vantage Line Mall Suncity" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#120F10]/35 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Plate({ plate, index, progress, start, end }: { plate: { weight: string; color: string; ring: string; w: number; h: number; side: number }; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"]; start: number; end: number; }) {
  const x = useTransform(progress, [start, end], [plate.side * 420, 0]);
  const y = useTransform(progress, [start, end], [plate.side * -40, 0]);
  const opacity = useTransform(progress, [start, start + 0.03, end], [0, 1, 1]);
  const rotateZ = useTransform(progress, [start, end], [plate.side * 24, 0]);
  const scale = useTransform(progress, [start, end], [0.75, 1]);
  const baseOffset = 10 + index * (plate.w - 4);
  const leftPos = `calc(26% - ${baseOffset}px)`;
  const rightPos = `calc(26% - ${baseOffset}px)`;
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) rotateZ(${rotateZ}deg) scale(${scale})`;
  const commonStyle = { width: plate.w, height: plate.h, opacity, transform } as const;

  const plateFace = (
    <div
      className="relative h-full w-full rounded-[7px] border border-black/25 shadow-[0_14px_34px_rgba(0,0,0,0.55),inset_1px_0_0_rgba(255,255,255,0.28),inset_-2px_0_0_rgba(0,0,0,0.2)]"
      style={{ background: `linear-gradient(180deg, ${plate.color}, ${plate.ring})` }}
    >
      <div className="absolute inset-[5px] rounded-[5px] border border-white/15" />
      <div className="absolute inset-y-[10%] left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-black/15" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-8px)] h-[28px] md:h-[34px] rounded-sm bg-black/10 border border-white/10" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
        <span className="inline-block text-white/90 font-black text-[10px] md:text-sm tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>{plate.weight}</span>
      </div>
      <div className="absolute inset-0 rounded-[7px] bg-[linear-gradient(90deg,rgba(255,255,255,.38),transparent_25%,transparent_72%,rgba(0,0,0,.28))]" />
    </div>
  );

  return (
    <>
      <motion.div className="absolute top-1/2 -translate-y-1/2" style={{ ...commonStyle, left: leftPos }}>{plateFace}</motion.div>
      <motion.div className="absolute top-1/2 -translate-y-1/2" style={{ ...commonStyle, right: rightPos }}>{plateFace}</motion.div>
    </>
  );
}

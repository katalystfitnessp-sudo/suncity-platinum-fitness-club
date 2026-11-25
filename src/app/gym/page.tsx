"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

const PLATES = [
  { weight: "20", color: "#B8B8B8", ring: "#8E8E8E", w: 22, h: 170, side: -1 },
  { weight: "15", color: "#E3A087", ring: "#C97A5F", w: 20, h: 150, side: 1 },
  { weight: "10", color: "#D4D4D4", ring: "#A3A3A3", w: 18, h: 130, side: -1 },
  { weight: "5",  color: "#F0C4B0", ring: "#D89A7E", w: 16, h: 110, side: 1 },
  { weight: "2.5",color: "#CFCFCF", ring: "#9A9A9A", w: 14, h: 92,  side: -1 },
];

export default function GymPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const barRotateX = useTransform(scrollYProgress, [0, 1], [18, 8]);
  const barRotateY = useTransform(scrollYProgress, [0, 1], [-24, -8]);
  const barScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.02]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.2, 0.55, 0.35]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  const barTransform = useMotionTemplate`perspective(1200px) rotateX(${barRotateX}deg) rotateY(${barRotateY}deg) scale(${barScale})`;

  return (
    <main className="bg-[#100E0F] text-[#FBF5F2] overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,160,135,0.18),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(227,160,135,0.08),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(rgba(251,245,242,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(251,245,242,.25) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-md bg-[#100E0F]/35 border-b border-white/5">
        <div className="flex items-center gap-3">
          <img src="/images/suncity-logo.jpg" alt="Platinum Fitness Club Women Exclusive" className="h-11 w-11 rounded-full object-cover ring-2 ring-[#E3A087]/40" />
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#E3A087]">Platinum Fitness Club</p>
            <p className="text-sm font-semibold tracking-wide">Women Exclusive · Suncity</p>
          </div>
        </div>
        <a href="https://wa.me/918121545757" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#E3A087] px-5 py-2.5 text-sm font-semibold text-[#100E0F] hover:bg-[#f0bea8] transition">
          Book Free Trial
        </a>
      </header>

      <section ref={sectionRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center px-6 overflow-hidden">
          <motion.div style={{ y: sceneY }} className="relative w-full max-w-6xl mx-auto">
            <motion.div style={{ opacity: titleOpacity, y: titleY }} className="absolute -top-8 md:-top-16 left-0 right-0 text-center z-20 pointer-events-none">
              <p className="text-[11px] md:text-xs tracking-[0.5em] uppercase text-[#E3A087] mb-4">Suncity · Bandlaguda Jagir · Hyderabad</p>
              <h1 className="text-[clamp(2.8rem,9vw,8rem)] leading-[0.88] font-black tracking-tight uppercase">
                <span className="block text-[#FBF5F2]">Strength</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E3A087] via-[#F3C8A2] to-[#E3A087]">Loads Here</span>
              </h1>
              <p className="mt-6 text-sm md:text-base text-[#D6C7C0] max-w-xl mx-auto">
                Scroll down and watch the plates load onto the bar — a 3D strength experience built for Platinum Fitness Club Women Exclusive.
              </p>
            </motion.div>

            <motion.div style={{ opacity: glowOpacity }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,760px)] h-[min(50vw,320px)] rounded-full bg-[#E3A087]/25 blur-[90px]" />

            <motion.div
              style={{ transform: barTransform, transformStyle: "preserve-3d" }}
              className="relative mx-auto mt-28 md:mt-36 w-full max-w-5xl h-[360px] md:h-[420px]"
            >
              {/* Bar shaft */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[88%] h-5 md:h-6 rounded-full bg-gradient-to-b from-[#D8D8D8] via-[#8F949B] to-[#5A5F66] shadow-[0_18px_40px_rgba(0,0,0,0.55)]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[88%] h-2 md:h-2.5 rounded-full bg-white/20 blur-[1px]" />

              {/* Left sleeve */}
              <div className="absolute left-[7%] md:left-[9%] top-1/2 -translate-y-1/2 w-[18%] h-7 md:h-8 rounded-md bg-gradient-to-b from-[#BFC3C9] via-[#7E848C] to-[#4D535B]" />
              {/* Right sleeve */}
              <div className="absolute right-[7%] md:right-[9%] top-1/2 -translate-y-1/2 w-[18%] h-7 md:h-8 rounded-md bg-gradient-to-b from-[#BFC3C9] via-[#7E848C] to-[#4D535B]" />

              {/* Collar stops */}
              <div className="absolute left-[24%] md:left-[26%] top-1/2 -translate-y-1/2 w-3 md:w-4 h-14 md:h-16 rounded-sm bg-gradient-to-b from-[#D7A48D] to-[#8D5A45] shadow-lg" />
              <div className="absolute right-[24%] md:right-[26%] top-1/2 -translate-y-1/2 w-3 md:w-4 h-14 md:h-16 rounded-sm bg-gradient-to-b from-[#D7A48D] to-[#8D5A45] shadow-lg" />

              {/* Plates */}
              {PLATES.map((plate, i) => {
                const start = 0.12 + i * 0.13;
                const end = start + 0.14;
                return (
                  <Plate
                    key={i}
                    plate={plate}
                    index={i}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}

              {/* Center knurl */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-5 md:h-6 rounded-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.18)_0_2px,rgba(0,0,0,.12)_2px_4px)] opacity-50" />
            </motion.div>

            <motion.div style={{ opacity: titleOpacity }} className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="flex flex-col items-center gap-2 text-[#E3A087]/80">
                <span className="text-[10px] tracking-[0.45em] uppercase">Scroll to load</span>
                <div className="w-px h-12 bg-gradient-to-b from-[#E3A087]/0 via-[#E3A087] to-[#E3A087]/0" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">Platinum Fitness Club · Suncity</p>
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight">
              Built for women who <span className="text-[#E3A087]">lift stronger.</span>
            </h2>
          </div>
          <p className="text-[#D6C7C0] text-base md:text-lg leading-relaxed max-w-xl">
            A premium women-exclusive gym in Suncity, Bandlaguda Jagir. Real coaching, real strength training, and an atmosphere that makes you show up.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Strength Training", desc: "Progressive barbell and machine programs guided by certified lady trainers." },
            { title: "Cardio & Conditioning", desc: "Treadmills, cross trainers, and HIIT zones for stamina and fat loss." },
            { title: "Zumba & Yoga", desc: "High-energy group sessions and recovery-focused mobility training." },
            { title: "Steam & Sauna", desc: "Premium recovery amenities to relax after your strongest sessions." },
          ].map((item) => (
            <div key={item.title} className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#E3A087]/40 hover:bg-[#E3A087]/[0.06] transition duration-300">
              <div className="h-10 w-10 rounded-full bg-[#E3A087]/15 text-[#E3A087] flex items-center justify-center mb-5 text-sm font-bold">✦</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#CFC0B8] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className="rounded-[2rem] overflow-hidden border border-[#E3A087]/20 bg-gradient-to-br from-[#1A1416] to-[#120F10] grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <p className="text-[11px] tracking-[0.45em] uppercase text-[#E3A087] mb-4">Visit Suncity</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">Your strongest chapter starts here.</h2>
            <p className="text-[#D6C7C0] leading-relaxed mb-8 max-w-xl">
              Platinum Fitness Club Women Exclusive, Suncity, Bandlaguda Jagir, Hyderabad. Call or WhatsApp us for membership, free trial, and training guidance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/918121545757" className="rounded-full bg-[#E3A087] px-6 py-3 text-sm font-semibold text-[#100E0F] hover:bg-[#f0bea8] transition">WhatsApp Now</a>
              <a href="https://maps.app.goo.gl/NA2ZtFHgLPPjrqr56" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:border-[#E3A087]/60 hover:text-[#E3A087] transition">Open in Maps</a>
            </div>
          </div>
          <div className="min-h-[280px] lg:min-h-full relative">
            <img src="/images/suncity-1.jpg" alt="Platinum Fitness Club Suncity" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#120F10]/30 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Plate({
  plate,
  index,
  progress,
  start,
  end,
}: {
  plate: { weight: string; color: string; ring: string; w: number; h: number; side: number };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const x = useTransform(progress, [start, end], [plate.side * 260, 0]);
  const y = useTransform(progress, [start, end], [plate.side * -30, 0]);
  const opacity = useTransform(progress, [start, start + 0.03, end], [0, 1, 1]);
  const rotateZ = useTransform(progress, [start, end], [plate.side * 18, 0]);
  const scale = useTransform(progress, [start, end], [0.8, 1]);

  const baseOffset = 8 + index * (plate.w - 2);
  const leftPos = `calc(24% - ${baseOffset}px)`;
  const rightPos = `calc(24% - ${baseOffset}px)`;

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) rotateZ(${rotateZ}deg) scale(${scale})`;

  const commonStyle = {
    width: plate.w,
    height: plate.h,
    opacity,
    transform,
  } as const;

  const plateFace = (
    <div
      className="relative h-full w-full rounded-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.45)] border border-black/20"
      style={{ background: `linear-gradient(180deg, ${plate.color}, ${plate.ring})` }}
    >
      <div className="absolute inset-y-[8%] left-1/2 -translate-x-1/2 w-[2px] bg-black/15" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
        <span className="inline-block text-[#100E0F]/80 font-black text-[10px] md:text-xs tracking-tight" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          {plate.weight}
        </span>
      </div>
      <div className="absolute inset-0 rounded-[6px] bg-[linear-gradient(90deg,rgba(255,255,255,.35),transparent_30%,transparent_70%,rgba(0,0,0,.18))]" />
    </div>
  );

  return (
    <>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ ...commonStyle, left: leftPos }}
      >
        {plateFace}
      </motion.div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        style={{ ...commonStyle, right: rightPos }}
      >
        {plateFace}
      </motion.div>
    </>
  );
}

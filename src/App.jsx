import { useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const projects = [
  {
    title: "Viral Lyrical Video",
    label: "TikTok Content / Video Editing",
    description:
      "A short-form lyrical video that reached 655k+ views through strong pacing, text timing, and emotional visual rhythm.",
    type: "video",
  },
  {
    title: "Social Visual Direction",
    label: "Graphic Design",
    description:
      "Clean social media visuals built around clarity, spacing, and modern digital presentation.",
    type: "image",
  },
  {
    title: "Customer Experience",
    label: "Healthcare BPO",
    description:
      "One year of healthcare customer support experience with strong communication, accuracy, and adaptability.",
    type: "text",
  },
];

const skills = [
  "Graphic Design",
  "Video Editing",
  "TikTok Content",
  "Data Entry",
  "Customer Service",
  "Communication",
];

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [7, -7]);
  const rotateY = useTransform(x, [-100, 100], [-7, 7]);
  const rotateZ = useTransform(x, [-100, 100], [-3, 3]);

  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.55]);

  const theme = darkMode
    ? "bg-[#050505] text-white"
    : "bg-[#f5f5f7] text-[#111111]";

  const card = darkMode
    ? "bg-white/[0.06] border-white/10"
    : "bg-white border-black/5";

  return (
    <div className={`min-h-screen overflow-x-hidden ${theme}`}>
      <nav
        className={`fixed left-1/2 top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border px-5 py-3 backdrop-blur-2xl ${
          darkMode ? "bg-black/50 border-white/10" : "bg-white/70 border-black/10"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            Mike Ongco
          </a>

          <div className="hidden gap-2 md:flex">
            {["Work", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  darkMode
                    ? "text-white/60 hover:bg-white/10 hover:text-white"
                    : "text-black/60 hover:bg-black/10 hover:text-black"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <motion.section
        id="home"
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative flex min-h-screen items-center px-6 pb-24 pt-32"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[18%] h-[420px] w-[420px] rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute bottom-[10%] right-[8%] h-[360px] w-[360px] rounded-full bg-purple-400/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <p className="mb-7 text-sm uppercase tracking-[0.45em] text-gray-500">
              Digital Portfolio
            </p>

            <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.075em] md:text-8xl lg:text-9xl">
              Simple design.
              <br />
              Real motion.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-500 md:text-2xl lg:mx-0">
              I create clean visual content, short-form videos, and digital work
              with clarity, timing, and purpose.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#work"
                className="rounded-full bg-[#0071e3] px-7 py-4 font-medium text-white transition hover:scale-105 hover:bg-[#0077ed]"
              >
                View work
              </a>

              <a
                href="/cv.pdf"
                download
                className={`rounded-full px-7 py-4 font-medium transition hover:scale-105 ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative h-[680px] w-full max-w-[420px]">
              <div className="absolute left-1/2 top-0 h-44 w-14 -translate-x-1/2 rounded-b-[2rem] bg-gradient-to-b from-neutral-950 to-neutral-500 shadow-2xl" />
              <div className="absolute left-1/2 top-36 z-10 h-20 w-20 -translate-x-1/2 rounded-full border-[12px] border-neutral-300 bg-white shadow-xl" />
              <div className="absolute left-1/2 top-48 z-10 h-12 w-8 -translate-x-1/2 rounded-full border-[8px] border-neutral-400" />

              <motion.div
                drag
                dragElastic={0.18}
                dragConstraints={{ left: -65, right: 65, top: -25, bottom: 65 }}
                style={{ x, y, rotateX, rotateY, rotateZ }}
                animate={{ y: [0, 8, 0], rotateZ: [-1.6, 1.6, -1.6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                whileTap={{ scale: 1.025, cursor: "grabbing" }}
                className="absolute left-1/2 top-56 w-[345px] -translate-x-1/2 cursor-grab overflow-hidden rounded-[2.6rem] border border-white/70 bg-white/85 text-black shadow-[0_40px_100px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
              >
                <div className="p-5">
                  <div className="mx-auto mb-6 h-5 w-28 rounded-full bg-gray-300" />

                  <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-[#f5f5f7]">
                    <img
                      src="/profile.jpg"
                      alt="Mike Ongco"
                      className="h-72 w-full object-cover object-top"
                    />
                  </div>

                  <div className="mt-7 text-center">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Mike Hendrick L. Ongco
                    </h2>
                    <p className="mt-2 text-gray-500">
                      Graphic Designer • Video Editor
                    </p>
                  </div>

                  <div className="mt-7 space-y-3 rounded-[2rem] bg-[#f5f5f7] p-5 text-sm text-gray-700">
                    <p>📧 mikeongco8@gmail.com</p>
                    <p>📱 +639458828914</p>
                    <p>📍 Cebu City, Philippines</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section id="work" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 max-w-4xl"
          >
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-gray-500">
              Selected Work
            </p>
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
              Projects presented with clarity, scale, and proof.
            </h2>
          </motion.div>

          <div className="grid gap-7">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`grid overflow-hidden rounded-[2.8rem] border ${card} lg:grid-cols-2`}
              >
                <div
                  className={`flex min-h-[420px] items-center justify-center ${
                    darkMode ? "bg-white/[0.03]" : "bg-[#efeff2]"
                  }`}
                >
                  {project.type === "video" ? (
                    <video
                      controls
                      muted
                      loop
                      playsInline
                      className="h-full max-h-[520px] w-full object-contain"
                    >
                      <source src="/lyrical.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <div className="px-10 text-center">
                      <p className="text-3xl font-semibold tracking-tight text-gray-400">
                        {project.type === "text"
                          ? "Service • Accuracy • Support"
                          : "Graphic Design Showcase"}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
                    {project.label}
                  </p>
                  <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-6 text-lg leading-relaxed text-gray-500">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className={`px-6 py-28 ${darkMode ? "bg-white/[0.04]" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-gray-500">
              Capabilities
            </p>
            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
              A clean mix of creative and support skills.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-[2rem] border p-8 text-xl font-semibold ${card}`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto max-w-6xl rounded-[3rem] border p-8 text-center md:p-16 ${card}`}
        >
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-gray-500">
            Contact
          </p>

          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-8xl">
            Let’s build something clean.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-500">
            Open for graphic design, video editing, TikTok content, data entry,
            and customer support opportunities.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <a
              href="mailto:mikeongco8@gmail.com"
              className={`rounded-[2rem] p-6 transition hover:scale-[1.02] ${
                darkMode ? "bg-white/[0.06]" : "bg-[#f5f5f7]"
              }`}
            >
              <p className="font-semibold">Email</p>
              <p className="mt-2 text-gray-500">mikeongco8@gmail.com</p>
            </a>

            <div
              className={`rounded-[2rem] p-6 ${
                darkMode ? "bg-white/[0.06]" : "bg-[#f5f5f7]"
              }`}
            >
              <p className="font-semibold">Phone</p>
              <p className="mt-2 text-gray-500">+639458828914</p>
            </div>

            <div
              className={`rounded-[2rem] p-6 ${
                darkMode ? "bg-white/[0.06]" : "bg-[#f5f5f7]"
              }`}
            >
              <p className="font-semibold">Location</p>
              <p className="mt-2 text-gray-500">Cebu City, Philippines</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
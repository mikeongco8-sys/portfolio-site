import { motion, useMotionValue, useTransform } from "framer-motion";

const skills = [
  "Graphic Design",
  "TikTok Content",
  "Video Editing",
  "Data Entry",
  "Customer Service",
  "Problem Solving",
  "Communication Skills",
  "CRM Navigation",
];

const projects = [
  {
    title: "Viral TikTok Lyrical Video",
    description:
      "A lyrical video project that reached 655k+ views, showing strong audience engagement and creative video editing skills.",
    type: "video",
  },
  {
    title: "Social Media Graphic Design",
    description:
      "Clean and modern graphics designed for social media posts, branding, and online content presentation.",
    type: "image",
  },
  {
    title: "Creative Video Editing",
    description:
      "Short-form video editing focused on visual timing, text placement, and audience retention.",
    type: "image",
  },
];

const experiences = [
  {
    title: "Customer Service Representative",
    description:
      "Handled healthcare-related customer concerns with strong communication, accuracy, and professionalism.",
  },
  {
    title: "TikTok Content Creator",
    description:
      "Created lyrical videos and short-form content with strong audience engagement, including a 655k+ view video.",
  },
  {
    title: "Graphic Designer",
    description:
      "Designed clean social media graphics, posters, branding visuals, and digital content.",
  },
];

export default function PortfolioWebsite() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [10, -10]);
  const rotateY = useTransform(x, [-120, 120], [-10, 10]);
  const rotateZ = useTransform(x, [-120, 120], [-5, 5]);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-semibold text-xl">Mike Ongco</h1>

         <div className="hidden md:flex gap-3 text-sm text-gray-600">
  <a
    href="#experience"
    className="px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300"
  >
    Experience
  </a>

  <a
    href="#skills"
    className="px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300"
  >
    Skills
  </a>

  <a
    href="#projects"
    className="px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300"
  >
    Projects
  </a>

  <a
    href="#contact"
    className="px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300"
  >
    Contact
  </a>
</div>

          <a
            href="/cv.pdf"
            download
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
          >
            Download CV
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-gray-500 text-lg mb-4">Portfolio</p>

            <h2 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none">
              Design that feels simple.
            </h2>

            <p className="mt-8 text-2xl md:text-3xl text-gray-600 max-w-2xl">
              I’m Mike Hendrick L. Ongco, a Graphic Designer, TikTok Content
              Creator, Video Editor, and Data Entry Specialist.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-[#0071e3] text-white px-7 py-4 rounded-full font-medium hover:bg-[#0077ed] transition"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="text-[#0071e3] px-7 py-4 rounded-full font-medium hover:underline"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <div className="relative h-[680px] w-full max-w-[430px] flex justify-center">
              <div className="absolute top-0 h-40 w-12 rounded-b-[2rem] bg-gradient-to-b from-neutral-900 to-neutral-500 shadow-xl" />

              <div className="absolute top-32 h-20 w-20 rounded-full border-[12px] border-neutral-300 bg-white shadow-lg z-10" />

              <div className="absolute top-44 h-12 w-8 rounded-full border-[8px] border-neutral-400 z-10" />

              <motion.div
                drag
                dragElastic={0.2}
                dragConstraints={{ left: -70, right: 70, top: -30, bottom: 60 }}
                style={{ x, y, rotateX, rotateY, rotateZ }}
                animate={{ y: [0, 10, 0], rotateZ: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                whileTap={{ scale: 1.03, cursor: "grabbing" }}
                className="absolute top-52 w-[350px] cursor-grab rounded-[2.5rem] overflow-hidden bg-white/80 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] border border-white"
              >
                <div className="p-5 bg-gradient-to-br from-white to-gray-100">
                  <div className="h-5 w-28 mx-auto rounded-full bg-gray-300 mb-6" />

                  <div className="rounded-[2rem] overflow-hidden bg-[#f5f5f7] border border-gray-200">
                    <img
                      src="/profile.jpg"
                      alt="Mike Ongco"
                      className="w-full h-72 object-cover object-top"
                    />
                  </div>

                  <div className="text-center mt-7">
                    <h3 className="text-2xl font-semibold tracking-tight">
                      Mike Hendrick L. Ongco
                    </h3>

                    <p className="mt-2 text-gray-500">
                      Graphic Designer • Content Creator
                    </p>
                  </div>

                  <div className="mt-7 rounded-3xl bg-[#f5f5f7] p-5 text-sm text-gray-700 space-y-3">
                    <p>📧 mikeongco8@gmail.com</p>
                    <p>📱 +639458828914</p>
                    <p>📍 Cebu City, Philippines</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            Experience.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            Skills.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.04 }}
                className="bg-[#f5f5f7] rounded-[2rem] p-7 text-center font-semibold text-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            Selected Works.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-black/5"
              >
                {project.type === "video" ? (
                  <video
                    controls
                    muted
                    loop
                    playsInline
                    className="h-80 w-full bg-black object-contain"
                  >
                    <source src="/lyrical.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <div className="h-80 flex items-center justify-center bg-[#f5f5f7] text-gray-400 text-xl font-semibold">
                    Project Image
                  </div>
                )}

                <div className="p-7">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Let’s work together.
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            Open for freelance projects, social media design, branding, video
            editing, data entry, and creative collaborations.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-[#f5f5f7] rounded-[2rem] p-7">
              <h3 className="font-semibold text-xl mb-2">Email</h3>
              <p className="text-gray-600">mikeongco8@gmail.com</p>
            </div>

            <div className="bg-[#f5f5f7] rounded-[2rem] p-7">
              <h3 className="font-semibold text-xl mb-2">Phone</h3>
              <p className="text-gray-600">+639458828914</p>
            </div>

            <div className="bg-[#f5f5f7] rounded-[2rem] p-7">
              <h3 className="font-semibold text-xl mb-2">Location</h3>
              <p className="text-gray-600">Cebu City, Philippines</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
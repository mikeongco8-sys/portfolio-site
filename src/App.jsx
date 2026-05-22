import { useEffect, useState } from "react";
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
    title: "Podcast Video Editing Sample",
    description:
      "A previous podcast video editing work sample focused on clean cuts, smooth pacing, captions, and engaging visual flow.",
    type: "video",
    src: "/podcast-sample.mp4",
  },
  {
    title: "Fight Club Inspired Poster",
    description:
      "A cinematic editorial poster design using bold typography, gritty textures, and minimalist movie-poster composition.",
    type: "image",
    src: "/design1.png",
  },
  {
    title: "Viral TikTok Lyrical Video",
    description:
      "A lyrical video project that reached 655k+ views, showing strong audience engagement and creative video editing skills.",
    type: "video",
    src: "/lyrical.mp4",
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

const tools = [
  { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail/EA4335" },
  { name: "Outlook", icon: "https://img.icons8.com/color/96/microsoft-outlook-2019.png" },
  { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom/0B5CFF" },
  { name: "Google Drive", icon: "https://cdn.simpleicons.org/googledrive/4285F4" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar/4285F4" },
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets/34A853" },
  { name: "Canva", icon: "https://img.icons8.com/color/96/canva.png" },
  { name: "CapCut", iconText: "CC" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Trello", icon: "https://cdn.simpleicons.org/trello/0052CC" },
  { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06A6A" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      from: "bot",
      text: "Hi, I’m Mike’s AI assistant. Ask me about his skills, experience, projects, or contact info.",
    },
  ]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [10, -10]);
  const rotateY = useTransform(x, [-120, 120], [-10, 10]);
  const rotateZ = useTransform(x, [-120, 120], [-5, 5]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const askBot = () => {
    if (!message.trim()) return;

    const userMessage = message.toLowerCase();
    let reply =
      "You can ask me about Mike’s skills, experience, projects, services, or contact information.";

    if (userMessage.includes("skill")) {
      reply =
        "Mike’s skills include Graphic Design, TikTok Content, Video Editing, Data Entry, Customer Service, Problem Solving, Communication, and CRM Navigation.";
    } else if (userMessage.includes("experience")) {
      reply =
        "Mike has experience in healthcare customer service, TikTok content creation, video editing, podcast video editing, and graphic design.";
    } else if (userMessage.includes("project") || userMessage.includes("work")) {
      reply =
        "Mike’s featured projects include podcast video editing, a Fight Club inspired poster design, a viral TikTok lyrical video that reached 655k+ views, and creative editing samples.";
    } else if (userMessage.includes("contact") || userMessage.includes("email")) {
      reply =
        "You can contact Mike at mikeongco8@gmail.com or +639458828914. He is based in Cebu City, Philippines.";
    } else if (userMessage.includes("hire") || userMessage.includes("service")) {
      reply =
        "Mike is open for freelance work such as graphic design, social media content, podcast video editing, video editing, data entry, and customer support.";
    }

    setChat([...chat, { from: "user", text: message }, { from: "bot", text: reply }]);
    setMessage("");
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-[#f5f5f7] text-[#1d1d1f]"
      }`}
    >
      <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition ${
          darkMode ? "bg-black/70 border-white/10" : "bg-white/70 border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-semibold text-xl">Mike Ongco</h1>

          <div className="hidden md:flex gap-3 text-sm text-gray-500">
            {["Experience", "Skills", "Tools", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "hover:bg-white/10 hover:text-white"
                    : "hover:bg-gray-200 hover:text-black"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
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
              Design that feels simple
            </h2>

            <p className="mt-8 text-2xl md:text-3xl text-gray-500 max-w-2xl">
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
                href="/cv.pdf"
                download
                className={`px-7 py-4 rounded-full font-medium transition ${
                  darkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <div className="relative h-[680px] w-full max-w-[430px] flex justify-center">
              <motion.div
                drag
                dragElastic={0.2}
                dragConstraints={{ left: -70, right: 70, top: -40, bottom: 70 }}
                style={{ x, y, rotateX, rotateY }}
                animate={{ y: [0, 12, 0], rotateZ: [-1.5, 1.5, -1.5] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                whileTap={{ scale: 1.03, cursor: "grabbing" }}
                className="absolute top-0 h-[680px] w-[340px] cursor-grab"
              >
                <div className="relative h-full w-full">
                  <div className="absolute top-0 left-1/2 h-72 w-5 -translate-x-12 -rotate-[16deg] rounded-full bg-neutral-950 shadow-xl" />
                  <div className="absolute top-0 left-1/2 h-72 w-5 translate-x-8 rotate-[16deg] rounded-full bg-neutral-950 shadow-xl" />

                  <div className="absolute top-56 left-1/2 z-20 h-16 w-28 -translate-x-1/2 rounded-[1.4rem] bg-neutral-900 shadow-xl flex items-center justify-center">
                    <div className="h-3 w-14 rounded-full bg-neutral-500" />
                  </div>

                  <div className="absolute top-[285px] left-1/2 z-20 h-12 w-8 -translate-x-1/2 rounded-full border-[7px] border-neutral-500 bg-transparent" />

                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[325px] left-1/2 h-[360px] w-[255px] -translate-x-1/2"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="absolute inset-0 overflow-hidden rounded-[1.7rem] bg-white text-black shadow-[0_25px_70px_rgba(0,0,0,0.28)] border border-black/10"
                      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                    >
                      <div className="bg-neutral-950 px-5 py-3 text-center text-white">
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/60">
                          Portfolio ID
                        </p>
                      </div>

                      <div className="p-5">
                        <div className="overflow-hidden rounded-3xl bg-gray-100 border border-black/5">
                          <img
                            src="/profile.jpg"
                            alt="Mike Ongco"
                            className="h-44 w-full object-cover object-top"
                          />
                        </div>

                        <div className="mt-5 text-center">
                          <h3 className="text-xl font-semibold leading-tight">
                            Mike Hendrick L. Ongco
                          </h3>
                          <p className="mt-2 text-sm text-gray-500">
                            Graphic Designer • Video Editor
                          </p>
                        </div>

                        <div className="mt-5 rounded-2xl bg-gray-100 p-4 text-xs text-gray-600 space-y-2">
                          <p>📧 mikeongco8@gmail.com</p>
                          <p>📍 Cebu City, Philippines</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 rounded-[1.7rem] bg-neutral-950 text-white shadow-[0_25px_70px_rgba(0,0,0,0.28)] border border-white/10 flex flex-col items-center justify-center p-6"
                      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    >
                      <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-white/45">
                        Coding Tools
                      </p>

                      <div className="grid grid-cols-2 gap-7 place-items-center">
                        <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML" className="h-12 w-12" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="h-12 w-12" />
                        <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="h-12 w-12" />
                        <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-12 w-12" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            Experience
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {experiences.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`rounded-[2rem] p-8 shadow-sm border transition ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white border-black/5"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="skills"
        className={`py-24 px-6 ${darkMode ? "bg-white/5" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            Skills
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className={`rounded-[2rem] p-7 text-center font-semibold text-lg transition ${
                  darkMode ? "bg-white/10" : "bg-[#f5f5f7]"
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="tools"
        className={`py-24 px-6 ${darkMode ? "bg-black" : "bg-[#f5f5f7]"}`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Tools I Use
          </h2>

          <p className="text-gray-500 text-lg mb-12">
            Tools I use for communication, design, content creation,
            productivity, and admin work.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5"
          >
            {tools.map((tool) => (
              <motion.div
                key={tool.name}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className={`rounded-[2rem] p-6 flex flex-col items-center justify-center gap-4 border transition ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white border-black/5 shadow-sm"
                }`}
              >
                {tool.icon ? (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold">
                    {tool.iconText}
                  </div>
                )}

                <p className="text-sm font-semibold text-gray-500">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            Selected Works
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                whileHover={{ y: -14, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`group rounded-[2rem] overflow-hidden shadow-sm border transition ${
                  darkMode
                    ? "bg-white/10 border-white/10"
                    : "bg-white border-black/5"
                }`}
              >
                <div className="overflow-hidden">
                  {project.type === "video" ? (
                    <video
                      controls
                      muted
                      loop
                      playsInline
                      className="h-80 w-full bg-black object-contain transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={project.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className={`py-24 px-6 ${darkMode ? "bg-white/5" : "bg-white"}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            Let’s work together
          </h2>

          <p className="text-xl text-gray-500 mb-12">
            Open for freelance projects, social media design, branding, video
            editing, data entry, and creative collaborations.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Email", "mikeongco8@gmail.com"],
              ["Phone", "+639458828914"],
              ["Location", "Cebu City, Philippines"],
            ].map(([title, value]) => (
              <div
                key={title}
                className={`rounded-[2rem] p-7 transition ${
                  darkMode ? "bg-white/10" : "bg-[#f5f5f7]"
                }`}
              >
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-500">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#0071e3] text-white text-2xl shadow-2xl hover:scale-110 transition"
      >
        🤖
      </button>

      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className={`fixed bottom-28 right-6 z-50 w-[340px] rounded-[2rem] overflow-hidden shadow-2xl border ${
            darkMode ? "bg-black border-white/10 text-white" : "bg-white border-black/10 text-black"
          }`}
        >
          <div className="bg-[#0071e3] text-white p-5">
            <h3 className="font-semibold text-lg">Mike AI Assistant</h3>
            <p className="text-sm text-white/80">Ask about my portfolio</p>
          </div>

          <div className="h-80 overflow-y-auto p-5 space-y-4">
            {chat.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                  item.from === "user"
                    ? "ml-auto bg-[#0071e3] text-white"
                    : darkMode
                    ? "bg-white/10"
                    : "bg-gray-100"
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>

          <div className="p-4 flex gap-2 border-t border-black/10">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && askBot()}
              placeholder="Ask something..."
              className={`flex-1 px-4 py-3 rounded-full outline-none text-sm ${
                darkMode ? "bg-white/10 text-white" : "bg-gray-100 text-black"
              }`}
            />

            <button
              onClick={askBot}
              className="bg-[#0071e3] text-white px-4 rounded-full font-semibold"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

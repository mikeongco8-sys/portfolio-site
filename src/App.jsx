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
  {
    title: "Creative Video Editing",
    description:
      "Short-form video editing focused on visual timing, text placement, and audience retention.",
    type: "image",
    src: "/design2.png",
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
  { name: "Gmail", icon: "https://cdn.simpleicons.org/gmail" },
  { name: "Outlook", icon: "https://cdn.simpleicons.org/microsoftoutlook" },
  { name: "WhatsApp", icon: "https://cdn.simpleicons.org/whatsapp" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack" },
  { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom" },
  { name: "Google Drive", icon: "https://cdn.simpleicons.org/googledrive" },
  { name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar" },
  { name: "Google Sheets", icon: "https://cdn.simpleicons.org/googlesheets" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva" },
  { name: "CapCut", icon: "https://cdn.simpleicons.org/capcut" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion" },
  { name: "Trello", icon: "https://cdn.simpleicons.org/trello" },
  { name: "Asana", icon: "https://cdn.simpleicons.org/asana" },
];

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
        "Mike has experience in healthcare customer service, TikTok content creation, video editing, and graphic design.";
    } else if (userMessage.includes("project") || userMessage.includes("work")) {
      reply =
        "Mike’s featured projects include a Fight Club inspired poster design, a viral TikTok lyrical video that reached 655k+ views, and creative video editing samples.";
    } else if (userMessage.includes("contact") || userMessage.includes("email")) {
      reply =
        "You can contact Mike at mikeongco8@gmail.com or +639458828914. He is based in Cebu City, Philippines.";
    } else if (userMessage.includes("hire") || userMessage.includes("service")) {
      reply =
        "Mike is open for freelance work such as graphic design, social media content, video editing, data entry, and customer support.";
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
                className="absolute top-52 w-[350px] cursor-grab rounded-[2.5rem] overflow-hidden bg-white/90 text-black backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] border border-white"
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
            Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className={`rounded-[2rem] p-8 shadow-sm border transition ${
                  darkMode ? "bg-white/10 border-white/10" : "bg-white border-black/5"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.04 }}
                className={`rounded-[2rem] p-7 text-center font-semibold text-lg transition ${
                  darkMode ? "bg-white/10" : "bg-[#f5f5f7]"
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
  id="tools"
  className={`py-24 px-6 ${
    darkMode ? "bg-black" : "bg-[#f5f5f7]"
  }`}
>
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
      Tools I Use
    </h2>

    <p className="text-gray-500 text-lg mb-12">
      Tools I use for communication, design, content creation,
      productivity, and admin work.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
      {tools.map((tool) => (
        <motion.div
          key={tool.name}
          whileHover={{ y: -6, scale: 1.04 }}
          className={`rounded-[2rem] p-6 flex flex-col items-center justify-center gap-4 border transition ${
            darkMode
              ? "bg-white/10 border-white/10"
              : "bg-white border-black/5 shadow-sm"
          }`}
        >
          <img
            src={tool.icon}
            alt={tool.name}
            className="w-10 h-10 object-contain"
          />

          <p className="text-sm font-semibold text-gray-500">
            {tool.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
            Selected Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                className={`rounded-[2rem] overflow-hidden shadow-sm border transition ${
                  darkMode ? "bg-white/10 border-white/10" : "bg-white border-black/5"
                }`}
              >
                {project.type === "video" ? (
                  <video
                    controls
                    muted
                    loop
                    playsInline
                    className="h-80 w-full bg-black object-contain"
                  >
                    <source src={project.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-80 w-full object-cover"
                  />
                )}

                <div className="p-7">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
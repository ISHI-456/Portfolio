import { createFileRoute, Link } from "@tanstack/react-router";

const PHOTO = "/ishika.jpg";
const RESUME_PDF = "/Ishika_Joshi_Resume.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishika Joshi — Data Science & ML Engineer" },
      { name: "description", content: "Portfolio of Ishika Joshi, CS student building ML pipelines, RAG systems and AI applications." },
      { property: "og:title", content: "Ishika Joshi — Data Science & ML Engineer" },
      { property: "og:description", content: "ML pipelines, RAG systems, computer vision and AI apps by Ishika Joshi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const GITHUB = "https://github.com/ISHI-456";
const LINKEDIN = "https://www.linkedin.com/in/ishika-joshi-1918242a1/";
const EMAIL = "joshiishika912@gmail.com";

const G = "https://github.com/ISHI-456/";
type P = { name: string; tag: string; desc: string; stack: string[]; url: string; cat: string };
const projects: P[] = [
  { cat: "AI / ML", name: "AttendXpert", tag: "AI-Powered Attendance System", url: G + "AttendXpert-AI-Powered-Attendance-System",
    desc: "Face and voice biometric attendance from classroom photos and audio, with role-based dashboards, QR enrollment and real-time analytics.",
    stack: ["Python", "OpenCV", "Dlib", "Resemblyzer", "Librosa", "Flask", "Supabase"] },
  { cat: "AI / ML", name: "SkillBridgeAI", tag: "ATS Resume Analysis & Job Matching", url: G + "SkillBridgeAI-ATS-Resume-Analysis-and-Job-Matching-Platform",
    desc: "Parses resumes with Groq LLM and spaCy, computes ATS scores via semantic embeddings, and generates PDF reports with skill gaps.",
    stack: ["FastAPI", "Streamlit", "spaCy", "Sentence-Transformers", "Groq", "Supabase"] },
  { cat: "AI / ML", name: "DocuMind AI", tag: "RAG Research Intelligence", url: G + "DocuMindAI-RAG-Based-Research-Intelligence-System",
    desc: "Query across 7 foundational AI papers with semantic search and context-aware answers with source citations.",
    stack: ["LangChain", "ChromaDB", "Groq LLM", "Streamlit"] },
  { cat: "AI / ML", name: "LendSmart", tag: "Loan Approval ML System", url: G + "LendSmart-Loan-Approval-ML-System",
    desc: "End-to-end supervised ML pipeline with EDA, feature engineering and multi-model evaluation — XGBoost selected as final model.",
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"] },
  { cat: "MERN", name: "MediAlert", tag: "Smart Medicine Reminder", url: G + "MediAlert--Smart-Medicine-Reminder-Web-Application",
    desc: "Full-stack medication manager to schedule medicines, receive timely reminders and track intake history on a dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind"] },
  { cat: "MERN", name: "PassOP", tag: "Password Manager", url: G + "PassOP---Password-Manager",
    desc: "Securely save, edit and delete passwords through a simple, modern interface.",
    stack: ["React", "Express", "MongoDB", "Tailwind"] },
];

const skills = {
  "Languages": ["Python", "Java", "JavaScript", "SQL", "HTML & CSS"],
  "ML & AI": ["Scikit-learn", "XGBoost", "PyTorch", "Pandas", "NumPy", "Matplotlib", "Seaborn", "OpenCV", "spaCy"],
  "GenAI & NLP": ["LangChain", "RAG", "ChromaDB", "Sentence-Transformers", "Groq LLM", "Semantic Search", "Face & Voice Recognition"],
  "MERN & Web": ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST APIs"],
  "Backend & Data": ["FastAPI", "Flask", "Streamlit", "Supabase", "MySQL", "JWT Auth"],
  "Tools": ["Git & GitHub", "Jupyter Notebook", "VS Code", "Java Swing"],
};

type Entry = { d: string; t: string; o: string; x: string };
const experience: Entry[] = [
  { d: "06/2026 – 07/2026", t: "Summer Intern — Python with ML & Data Science", o: "SoftPro India Computer Technologies", x: "45-day internship building and evaluating ML models with Scikit-learn, Pandas and NumPy — preprocessing, EDA and evaluation." },
];
const leadership: Entry[] = [
  { d: "12/2025 – Present", t: "Chairperson — Equinox Club", o: "CS Department, SRMSCET", x: "Organised 20+ technical events including 3 flagship Techvyom activities, plus weekly sessions of 40–50 attendees." },
];
const education: Entry[] = [
  { d: "2023 – Present", t: "B.Tech in Computer Science", o: "SRMSCET, Bareilly", x: "CGPA 8.5 / 10" },
  { d: "2023", t: "Higher Secondary", o: "St. Francis Convent School", x: "90.8%" },
  { d: "2021", t: "Matriculation", o: "St. Francis Convent School", x: "95.2%" },
];

function Entries({ items }: { items: Entry[] }) {
  return (
    <div className="space-y-8">
      {items.map((e) => (
        <div key={e.t} className="border-l border-border pl-5">
          <p className="text-sm text-muted-foreground">{e.d}</p>
          <h4 className="text-xl mt-1">{e.t}</h4>
          <p className="text-accent text-sm mt-1">{e.o}</p>
          <p className="text-muted-foreground mt-2">{e.x}</p>
        </div>
      ))}
    </div>
  );
}

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 border-t border-border">
      <div className="flex items-baseline gap-4 mb-12">
        <span className="text-sm text-accent font-medium">{n}</span>
        <h2 className="text-4xl md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-20 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl">Ishika<span className="text-accent">.</span></a>
          <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
            {["about", "projects", "skills", "experience", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="capitalize hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
          <Link to="/resume" className="text-sm rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-colors">Resume</Link>
        </div>
      </nav>

      <header className="mx-auto max-w-6xl px-6 pt-16 pb-24 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div className="animate-rise">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">Data Science · Machine Learning · GenAI · MERN Stack</p>
          <h1 className="text-6xl md:text-8xl leading-[0.95]">
            Ishika <em className="text-accent">Joshi</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl">
            Final-year Computer Science engineer turning data into working AI products — from ML pipelines and RAG systems to computer vision apps.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-primary text-primary-foreground px-6 py-3 hover:bg-accent transition-colors">View my work</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="rounded-full border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="rounded-full border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="relative animate-rise [animation-delay:200ms]">
          <div className="absolute -inset-3 rounded-[2rem] bg-accent rotate-3" />
          <img src={PHOTO} alt="Portrait of Ishika Joshi" className="relative rounded-[2rem] aspect-[4/5] object-cover object-top w-full bg-card" />
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-5 py-4 shadow-lg">
            <p className="font-display text-3xl">8.5</p>
            <p className="text-xs text-muted-foreground">CGPA · B.Tech CSE</p>
          </div>
        </div>
      </header>

      <Section id="about" n="01" title="About">
        <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground">
          <p>I specialise in Data Science and Machine Learning, building end-to-end pipelines with Python, Scikit-learn, XGBoost and Streamlit — with hands-on work in NLP, Retrieval-Augmented Generation and computer vision.</p>
          <p>Alongside AI, I build full-stack applications with the MERN stack — React frontends backed by Node.js, Express and MongoDB — including a medicine reminder app and a password manager. I study at Shri Ram Murti Smarak College of Engineering and Technology (SRMSCET).</p>
        </div>
      </Section>

      <Section id="projects" n="02" title="Projects">
        {["AI / ML", "MERN"].map((cat) => (
          <div key={cat} className="mb-16">
            <h3 className="text-2xl mb-6 text-accent">{cat === "MERN" ? "MERN Stack" : cat}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.filter((p) => p.cat === cat).map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-2xl p-8 flex flex-col hover:-translate-y-1 hover:border-accent transition-all">
                  <h4 className="font-display text-2xl">{p.name}</h4>
                  <p className="text-sm font-medium mt-1 text-muted-foreground">{p.tag}</p>
                  <p className="mt-4 text-muted-foreground flex-1">{p.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => <span key={s} className="text-xs rounded-full bg-secondary px-3 py-1">{s}</span>)}
                  </div>
                  <span className="mt-6 text-sm group-hover:text-accent">View on GitHub →</span>
                </a>
              ))}
            </div>
          </div>
        ))}
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-block underline underline-offset-4 hover:text-accent">See all repositories on GitHub →</a>
      </Section>

      <Section id="skills" n="03" title="Skills">
        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skills).map(([k, v]) => (
            <div key={k}>
              <h3 className="text-xl mb-4">{k}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {v.map((s) => <li key={s} className="border-b border-border pb-2">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" n="04" title="Experience">
        <Entries items={experience} />
      </Section>

      <Section id="leadership" n="05" title="Leadership">
        <Entries items={leadership} />
      </Section>

      <Section id="education" n="06" title="Education">
        <Entries items={education} />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-primary text-primary-foreground p-8">
            <p className="font-display text-5xl">2nd</p>
            <p className="mt-2">Bug Bounty Debugging Competition — Techvyom 2025</p>
          </div>
          <div className="rounded-2xl bg-accent text-accent-foreground p-8">
            <p className="font-display text-5xl">96%</p>
            <p className="mt-2">NPTEL Programming in Java — Course Topper</p>
          </div>
          <div className="rounded-2xl bg-primary text-primary-foreground p-8">
            <p className="font-display text-5xl">97.61</p>
            <p className="mt-2">percentile — Naukri Campus Young Turks 2026, qualified for Round 1</p>
          </div>
        </div>
      </Section>

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-5xl md:text-7xl">Open to <em className="text-accent">opportunities</em>.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">Looking for entry-level roles in Data Science, AI / ML and MERN stack development.</p>
          <a href={`mailto:${EMAIL}`} className="inline-block mt-10 text-xl underline underline-offset-8 hover:text-accent">{EMAIL}</a>
          <div className="mt-8 flex justify-center gap-6 text-sm opacity-80">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
            <Link to="/resume" className="hover:text-accent">Resume</Link>
           
          </div>
          <p className="mt-16 text-xs opacity-60">© 2026 Ishika Joshi</p>
        </div>
      </section>
    </main>
  );
}

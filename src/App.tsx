import { useEffect, useState } from "react";

type Project = {
  no: string;
  slug: string;
  name: string;
  kind: string;
  status: string;
  statement: string;
  summary: string;
  stack: string[];
  brief: string;
  built: string[];
  outcome: string;
  tone: "porcelain" | "forest" | "copper" | "ink";
};

const projects: Project[] = [
  {
    no: "01",
    slug: "accessly",
    name: "Accessly",
    kind: "Accessibility intelligence",
    status: "Live",
    statement: "Find the barrier. Understand it. Fix it.",
    summary:
      "An AI-powered WCAG and EAA scanner that turns detected accessibility violations into ready-to-use fixes.",
    stack: ["Next.js", "Cloudflare", "Prisma", "Gemini"],
    brief:
      "Small businesses, agencies, and SaaS teams need to meet WCAG 2.1 AA and EU Accessibility Act requirements, but most scanners stop at a list of violations.",
    built: [
      "A URL-to-report scanning pipeline with persistent results",
      "Context-aware, AI-generated remediation guidance",
      "Accounts, scan history, and scheduled monitoring",
    ],
    outcome:
      "The end-to-end pipeline is live and tested against external sites, including icon-only control issues that are easy to miss.",
    tone: "porcelain",
  },
  {
    no: "02",
    slug: "iffco-agri-portal",
    name: "IFFCO Agri Portal",
    kind: "Enterprise commerce",
    status: "Shipped",
    statement: "Commerce infrastructure for the agricultural supply chain.",
    summary:
      "An enterprise agricultural commerce platform with catalog, checkout, inventory, and administrative workflows.",
    stack: ["Next.js 14", "Express", "JWT"],
    brief:
      "IFFCO needed an internal commerce portal for agricultural products, with a real customer journey and a manageable operational layer.",
    built: [
      "Product catalog, cart, and checkout workflows",
      "Inventory controls and an administrative dashboard",
      "Separated frontend and backend deployment architecture",
    ],
    outcome:
      "The completed system was presented to the project head, with the frontend deployed on Vercel and backend on Render.",
    tone: "forest",
  },
  {
    no: "03",
    slug: "fitforge",
    name: "FitForge",
    kind: "Real-time mobile",
    status: "Shipped",
    statement: "Training feedback at the speed of the session.",
    summary: "A real-time fitness application shipped as a native Android build.",
    stack: ["Expo", "Redis", "Socket.io"],
    brief:
      "The goal was to create a fitness product where activity felt live, not like a conventional form writing quietly to a database.",
    built: [
      "Real-time state updates through Socket.io",
      "Redis-backed event delivery",
      "A native Android package delivered with EAS",
    ],
    outcome: "A working Android build was shipped with the real-time layer running end to end.",
    tone: "copper",
  },
  {
    no: "04",
    slug: "sonichub",
    name: "SonicHub / Auralis",
    kind: "Streaming + native",
    status: "Shipped",
    statement: "A listening experience designed beyond the browser.",
    summary: "A YouTube-based streaming product with a native Flutter implementation.",
    stack: ["Flutter", "Invidious"],
    brief:
      "The product explored a YouTube-based music experience without allowing conventional API quota limits to define the experience.",
    built: [
      "An Invidious-backed streaming pipeline",
      "A focused web listening experience",
      "A native Flutter port under the Auralis name",
    ],
    outcome:
      "The web pipeline is operational and Auralis has launched successfully as a native development build.",
    tone: "ink",
  },
  {
    no: "05",
    slug: "lfg-bot",
    name: "LFG Bot",
    kind: "Community infrastructure",
    status: "Building",
    statement: "Matchmaking without server boundaries.",
    summary: "A cross-server Discord matchmaking system for competitive players.",
    stack: ["Discord.js", "Prisma", "Neon"],
    brief:
      "Competitive players looking for a group are usually limited to the small pool of people active in one Discord server.",
    built: [
      "Cross-server player registration",
      "Availability-window capture and storage",
      "A foundation for global matchmaking logic",
    ],
    outcome:
      "Registration and availability windows work end to end. Matchmaking logic is the current in-progress phase.",
    tone: "porcelain",
  },
];

const navItems = [
  ["index", "Index"],
  ["work", "Selected work"],
  ["experience", "Experience"],
  ["capabilities", "Capabilities"],
  ["contact", "Contact"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function AccesslyVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`accessly-ui ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <div>accessly.app / report</div>
      </div>
      <div className="scan-shell">
        <div className="scan-top">
          <div>
            <small>SCAN RESULT</small>
            <strong>12 issues found</strong>
          </div>
          <div className="score-ring">84</div>
        </div>
        <div className="scan-list">
          <div className="issue active">
            <i>01</i>
            <span>Button has no accessible name</span>
            <b>Critical</b>
          </div>
          <div className="issue">
            <i>02</i>
            <span>Insufficient color contrast</span>
            <b>Serious</b>
          </div>
          <div className="issue">
            <i>03</i>
            <span>Heading order is invalid</span>
            <b>Moderate</b>
          </div>
        </div>
        <div className="fix-panel">
          <small>SUGGESTED FIX</small>
          <code>aria-label=&quot;Open account menu&quot;</code>
        </div>
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="commerce-ui" aria-hidden="true">
      <div className="commerce-head">
        <span>IFFCO / STORE</span>
        <span>Inventory 128</span>
      </div>
      <div className="commerce-body">
        <div className="product-photo">
          <div className="bag">
            IFFCO<small>GROW</small>
          </div>
        </div>
        <div className="product-info">
          <small>SOIL NUTRITION / 25 KG</small>
          <h4>
            Plant growth
            <br />
            nutrient
          </h4>
          <div className="price">₹1,240</div>
          <div className="fake-button">
            Add to order <span>+</span>
          </div>
        </div>
      </div>
      <div className="commerce-foot">
        <span>Catalog</span>
        <span>Orders</span>
        <span>Inventory</span>
        <span>Admin</span>
      </div>
    </div>
  );
}

function FitVisual() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-top">
        <span>9:41</span>
        <i />
      </div>
      <small>LIVE SESSION</small>
      <h4>
        Upper body
        <br />
        strength
      </h4>
      <div className="pulse">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="fit-metric">
        <small>ACTIVE TIME</small>
        <strong>38:12</strong>
      </div>
      <div className="fit-row">
        <span>12 sets</span>
        <span>4 exercises</span>
      </div>
      <div className="live-pill">
        <i /> Synced live
      </div>
    </div>
  );
}

function StreamVisual() {
  return (
    <div className="stream-ui" aria-hidden="true">
      <div className="album">
        <div className="album-orbit" />
        <b>A</b>
      </div>
      <small>NOW PLAYING</small>
      <h4>After midnight</h4>
      <p>Soft Focus — Auralis sessions</p>
      <div className="waveform">
        {Array.from({ length: 24 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
      <div className="player-controls">
        <span>↶</span>
        <b>▶</b>
        <span>↷</span>
      </div>
    </div>
  );
}

function BotVisual() {
  return (
    <div className="bot-ui" aria-hidden="true">
      <div className="bot-grid" />
      <div className="player p1">
        <i>SK</i>
        <span>
          <small>RANK</small>Diamond II
        </span>
      </div>
      <div className="player p2">
        <i>07</i>
        <span>
          <small>ROLE</small>Support
        </span>
      </div>
      <div className="match-node">
        <small>MATCH</small>
        <strong>92%</strong>
      </div>
      <svg viewBox="0 0 600 280" preserveAspectRatio="none">
        <path d="M140 60 C280 60 210 140 300 140" />
        <path d="M460 220 C320 220 390 140 300 140" />
      </svg>
      <div className="queue-status">
        <i /> SEARCHING ACROSS 14 SERVERS
      </div>
    </div>
  );
}

function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.slug === "accessly") return <AccesslyVisual compact={compact} />;
  if (project.slug === "iffco-agri-portal") return <CommerceVisual />;
  if (project.slug === "fitforge") return <FitVisual />;
  if (project.slug === "sonichub") return <StreamVisual />;
  return <BotVisual />;
}

function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="desktop-topbar">
        <a className="top-mark" href="/#index" aria-label="Sidharth Sahoo, home">
          SS
        </a>
        <div className="top-status">
          <i className="status-dot" />
          <span>Available for work</span>
        </div>
        <nav aria-label="Top navigation">
          <a href="/#work">projects</a>
          <a href="/#experience">experience</a>
          <a href="/#capabilities">skills</a>
        </nav>
      </header>
      <aside className="rail">
        <div className="profile-art" aria-hidden="true">
          <div className="profile-grid" />
          <div className="profile-orbit orbit-one" />
          <div className="profile-orbit orbit-two" />
          <span>SS</span>
          <small>FULL-STACK / 2026</small>
        </div>
        <a className="identity" href="/#index">
          <strong>
            Sidharth
            <br />
            Sahoo
          </strong>
          <span>
            Developer <i /> Systems builder
          </span>
        </a>
        <p className="profile-bio">
          I build accessible web products, real-time applications, and useful systems from interface
          to deployment.
        </p>
        <nav aria-label="Primary navigation">
          {navItems.map(([id, label], i) => (
            <a key={id} className={active === id ? "active" : ""} href={`/#${id}`}>
              <small>0{i + 1}</small>
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="rail-foot">
          <p>
            <i className="status-dot" /> Available for selected work
          </p>
          <span>India / US—UK—EU hours</span>
          <div>
            <a href="mailto:sidharthsahoo721@gmail.com">Email</a>
            <a href="https://github.com/Sidharthsahoo-code" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sidharth-shekhar-sahoo-276449384/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="activity">
          <div>
            <span>BUILD ACTIVITY</span>
            <small>26 WEEKS</small>
          </div>
          <div className="activity-grid">
            {Array.from({ length: 70 }, (_, i) => (
              <i
                key={i}
                className={i % 11 === 0 || i % 7 === 0 ? "high" : i % 4 === 0 ? "mid" : ""}
              />
            ))}
          </div>
        </div>
      </aside>
      <header className="mobile-head">
        <a href="/#index">
          <strong>SS/</strong>
          <span>Systems index</span>
        </a>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <span />
          <span />
        </button>
        {open && (
          <nav>
            {navItems.map(([id, label], i) => (
              <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
                <small>0{i + 1}</small>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

function Home() {
  const [active, setActive] = useState("index");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("sidharthsahoo721@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header active={active} />
      <main id="main">
        <section className="hero" id="index">
          <div className="eyebrow">
            <span>PORTFOLIO / 2026</span>
            <span>SELECTED SYSTEMS 01—05</span>
          </div>
          <div className="hero-title">
            <p>
              Full-stack developer
              <br />
              &amp; systems builder
            </p>
            <h1>
              I design and build <em>systems</em> that survive contact with <span>real users.</span>
            </h1>
          </div>
          <div className="hero-bottom">
            <div className="hero-copy">
              <p>
                Building accessibility scanners, enterprise commerce platforms, matchmaking tools,
                and real-time mobile experiences.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  View selected systems <Arrow />
                </a>
                <a className="text-link" href="#contact">
                  Start a conversation <Arrow />
                </a>
              </div>
            </div>
            <div className="system-map" aria-label="Five connected project systems">
              <div className="map-label">
                SYSTEM MAP <span>LIVE INDEX</span>
              </div>
              <svg viewBox="0 0 560 250" aria-hidden="true">
                <path d="M60 60 C170 60 130 126 250 126 S340 50 470 58" />
                <path d="M250 126 C330 126 340 200 480 198" />
                <path d="M250 126 C160 126 140 205 58 202" />
              </svg>
              {projects.map((p, i) => (
                <a key={p.no} href={`#project-${p.no}`} className={`map-node n${i + 1}`}>
                  <i />
                  {p.no} <span>{p.name}</span>
                </a>
              ))}
              <div className="map-core">
                <span>SS</span>
                <small>
                  SYSTEMS
                  <br />
                  INDEX
                </small>
              </div>
            </div>
          </div>
          <div className="scroll-note">
            SCROLL TO INSPECT <span>↓</span>
          </div>
        </section>

        <section className="work-intro" id="work">
          <div className="section-index">01 / SELECTED WORK</div>
          <h2>
            Five systems.
            <br />
            <em>Different constraints.</em>
          </h2>
          <p>
            Each project began with a real product problem and ended with something that could be
            used, tested, or shipped.
          </p>
        </section>

        <article className="project project-feature" id="project-01">
          <div className="project-meta">
            <span>01 / 05</span>
            <span>{projects[0].kind}</span>
            <span className="live-status">
              <i /> {projects[0].status}
            </span>
          </div>
          <div className="feature-heading">
            <div>
              <small>SELECTED SYSTEM</small>
              <h3>Accessly</h3>
            </div>
            <p>{projects[0].statement}</p>
          </div>
          <a
            className="visual-wrap accessly-wrap"
            href="/work/accessly"
            aria-label="View Accessly case study"
          >
            <AccesslyVisual />
            <div className="visual-caption">
              <span>SCAN / ANALYZE / REMEDIATE</span>
              <b>Product interface, 2026</b>
            </div>
          </a>
          <div className="project-foot">
            <p>{projects[0].summary}</p>
            <div className="stack-line">
              {projects[0].stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a className="case-link" href="/work/accessly">
              Read case study <Arrow />
            </a>
          </div>
        </article>

        <article className="project project-split forest" id="project-02">
          <div className="project-copy">
            <div className="project-meta">
              <span>02 / 05</span>
              <span>{projects[1].status}</span>
            </div>
            <small>{projects[1].kind}</small>
            <h3>
              IFFCO
              <br />
              <em>Agri Portal</em>
            </h3>
            <p className="statement">{projects[1].statement}</p>
            <p>{projects[1].summary}</p>
            <div className="stack-line">
              {projects[1].stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a className="case-link" href="/work/iffco-agri-portal">
              Read case study <Arrow />
            </a>
          </div>
          <a
            className="project-visual"
            href="/work/iffco-agri-portal"
            aria-label="View IFFCO Agri Portal case study"
          >
            <CommerceVisual />
          </a>
        </article>

        <div className="project-pair">
          <article className="project fit-project" id="project-03">
            <div className="project-meta">
              <span>03 / 05</span>
              <span>{projects[2].status}</span>
            </div>
            <div className="fit-layout">
              <div>
                <small>{projects[2].kind}</small>
                <h3>
                  Fit<em>Forge</em>
                </h3>
                <p>{projects[2].summary}</p>
                <a className="case-link" href="/work/fitforge">
                  Inspect system <Arrow />
                </a>
              </div>
              <FitVisual />
            </div>
            <div className="event-line">
              <i />
              <span>APP</span>
              <b />
              <span>SOCKET.IO</span>
              <b />
              <span>REDIS</span>
              <i />
            </div>
          </article>
          <article className="project stream-project" id="project-04">
            <div className="project-meta">
              <span>04 / 05</span>
              <span>{projects[3].status}</span>
            </div>
            <StreamVisual />
            <div>
              <small>{projects[3].kind}</small>
              <h3>
                SonicHub
                <br />
                <em>/ Auralis</em>
              </h3>
              <p>{projects[3].summary}</p>
              <a className="case-link" href="/work/sonichub">
                Inspect system <Arrow />
              </a>
            </div>
          </article>
        </div>

        <article className="project bot-project" id="project-05">
          <div className="bot-copy">
            <div className="project-meta">
              <span>05 / 05</span>
              <span className="building-status">
                <i /> {projects[4].status}
              </span>
            </div>
            <small>{projects[4].kind}</small>
            <h3>LFG Bot</h3>
            <p className="statement">{projects[4].statement}</p>
            <p>{projects[4].summary}</p>
            <div className="stack-line">
              {projects[4].stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <a className="case-link" href="/work/lfg-bot">
              View work in progress <Arrow />
            </a>
          </div>
          <BotVisual />
        </article>

        <section className="record-section" id="experience">
          <div className="section-index">02 / WORKING RECORD</div>
          <div className="record-head">
            <h2>
              Learning by
              <br />
              <em>making it real.</em>
            </h2>
            <p>Formal computer-science study paired with end-to-end product ownership.</p>
          </div>
          <div className="records">
            <article>
              <span className="record-no">A</span>
              <time>Current</time>
              <div>
                <small>IFFCO, PARADIP</small>
                <h3>Software Development Intern</h3>
                <p>
                  Built an agricultural e-commerce portal end to end and presented the completed
                  system to the project head.
                </p>
              </div>
            </article>
            <article>
              <span className="record-no">B</span>
              <time>Ongoing</time>
              <div>
                <small>SELF-DIRECTED</small>
                <h3>Independent Developer</h3>
                <p>
                  Designing and shipping systems across accessibility, real-time applications,
                  mobile, streaming, and community tooling.
                </p>
              </div>
            </article>
            <article>
              <span className="record-no">C</span>
              <time>Third year</time>
              <div>
                <small>SOA ITER</small>
                <h3>B.Tech, Computer Science</h3>
                <p>
                  Combining formal computer-science coursework with independent product development
                  and deployment.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="capability-section" id="capabilities">
          <div className="section-index">03 / CAPABILITY MAP</div>
          <div className="cap-head">
            <h2>
              From interface
              <br />
              to <em>infrastructure.</em>
            </h2>
            <p>
              Tools are useful in context. This map connects each capability to the kind of system
              it helps create.
            </p>
          </div>
          <div className="cap-map">
            {[
              [
                "01",
                "Interface systems",
                "React / Next.js / Responsive UI / Accessibility",
                "Accessly · IFFCO",
              ],
              [
                "02",
                "Application architecture",
                "Node.js / Express / Prisma / PostgreSQL",
                "Accessly · IFFCO · LFG",
              ],
              ["03", "Real-time systems", "Socket.io / Redis / Discord.js", "FitForge · LFG"],
              ["04", "Mobile products", "React Native / Expo / Flutter", "FitForge · Auralis"],
              [
                "05",
                "Infrastructure & delivery",
                "Vercel / Render / Cloudflare / Neon",
                "Across the index",
              ],
            ].map((row) => (
              <article key={row[0]}>
                <span>{row[0]}</span>
                <h3>{row[1]}</h3>
                <p>{row[2]}</p>
                <small>{row[3]}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="note-section">
          <div className="note-mark">“</div>
          <blockquote>
            I’m most interested in the part of software where interface decisions meet system
            behavior.
          </blockquote>
          <p>
            Accessibility, real-time feedback, reliability, and the quiet details that make a
            product feel finished.
          </p>
          <span>SIDHARTH SAHOO / THIRD-YEAR CSE</span>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-index">04 / CONTACT</div>
          <div className="availability">
            <i className="status-dot" /> OPEN TO SELECTED WORK
          </div>
          <h2>
            Have a system
            <br />
            <em>worth building?</em>
          </h2>
          <div className="contact-bottom">
            <p>
              I’m open to selected freelance projects, internships, and product-engineering
              collaborations with teams in the US, UK, and EU.
            </p>
            <div className="contact-actions">
              <a href="mailto:sidharthsahoo721@gmail.com">
                Start with an email <Arrow />
              </a>
              <button onClick={copyEmail}>
                {copied ? "Email copied" : "Copy email"} <span>{copied ? "✓" : "+"}</span>
              </button>
            </div>
          </div>
          <footer>
            <span>© {new Date().getFullYear()} Sidharth Sahoo</span>
            <div>
              <a href="https://github.com/Sidharthsahoo-code" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/sidharth-shekhar-sahoo-276449384/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
            <a href="#index">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </div>
  );
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="site-shell case-site">
      <Header active="work" />
      <main>
        <section className={`case-hero tone-${project.tone}`}>
          <a className="back-link" href="/#work">
            ← Back to index
          </a>
          <div className="case-kicker">
            <span>SYSTEM {project.no} / 05</span>
            <span>{project.kind}</span>
            <span>{project.status}</span>
          </div>
          <h1>{project.name}</h1>
          <p>{project.statement}</p>
          <div className="case-stack">
            {project.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </section>
        <section className="case-visual">
          <ProjectVisual project={project} compact />
        </section>
        <section className="case-content">
          <aside>
            <span>PROJECT RECORD</span>
            <a href="#brief">01 / Brief</a>
            <a href="#system">02 / System</a>
            <a href="#outcome">03 / Current state</a>
          </aside>
          <div>
            <article id="brief">
              <span>01</span>
              <div>
                <small>THE BRIEF</small>
                <h2>Building for a real constraint.</h2>
                <p>{project.brief}</p>
              </div>
            </article>
            <article id="system">
              <span>02</span>
              <div>
                <small>THE SYSTEM</small>
                <h2>What I built.</h2>
                <ul>
                  {project.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
            <article id="outcome">
              <span>03</span>
              <div>
                <small>CURRENT STATE</small>
                <h2>Where it stands.</h2>
                <p>{project.outcome}</p>
              </div>
            </article>
          </div>
        </section>
        <nav className="next-project" aria-label="Project navigation">
          <span>NEXT SYSTEM</span>
          {(() => {
            const next = projects[(projects.indexOf(project) + 1) % projects.length];
            return (
              <a href={`/work/${next.slug}`}>
                <small>{next.no} / 05</small>
                {next.name}
                <Arrow />
              </a>
            );
          })()}
        </nav>
      </main>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname;
  const slug = path.startsWith("/work/") ? path.split("/").filter(Boolean).pop() : undefined;
  const project = projects.find((p) => p.slug === slug);
  return project ? <CaseStudy project={project} /> : <Home />;
}

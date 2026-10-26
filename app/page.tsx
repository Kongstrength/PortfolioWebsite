import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Database,
  Github,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  GraduationCap,
  Smartphone,
  Terminal,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Transport Management System",
    type: "Industry experience · JOS Technology",
    description:
      "Contributed to a logistics platform for vehicle, driver, order, and route management, including mobile driver interfaces and real-time tracking features.",
    contributions: [
      "Built RESTful APIs with Flask and MySQL",
      "Implemented GPS caching and route polyline generation",
      "Improved dashboard UI/UX",
    ],
    result: "Helped make vehicle, driver, order, and route information easier to manage in one workflow.",
    stack: ["React", "Flask", "Python", "MySQL"],
    icon: Globe2,
    featured: true,
    note: "Company project — selected details only",
  },
  {
    number: "02",
    name: "Production Management System",
    type: "Industry experience · JOS Technology",
    description:
      "Worked on production workflows and modules for Sales Orders, Work Orders, Machine Management, and Quality Control.",
    contributions: [
      "Designed WorkOrder and WorkPhase database schemas",
      "Implemented centralized authentication / SSO across PMS, WMS, and TMS",
      "Developed full-stack features from requirements to deployment",
    ],
    result: "Connected production workflows across multiple business systems with a consistent authentication experience.",
    stack: ["React", "Flask", "MySQL", "REST API"],
    icon: Layers3,
    featured: true,
    note: "Company project — selected details only",
  },
  {
    number: "03",
    name: "DaekraidbyKU",
    type: "Personal / academic project",
    description:
      "A meal-planning and nutrition platform that helps users plan meals around their budget, track ingredients, and review nutrition information.",
    contributions: [
      "Implemented authentication, meal planning, favorites, and inventory tracking",
      "Built budget-based planning and nutrition dashboards",
      "Integrated AI menu generation and Google Maps",
      "Designed relational data models for users, menus, meal plans, favorites, and notifications",
    ],
    result: "Turned meal planning, budgeting, and nutrition information into one practical user flow.",
    stack: ["Vue.js", "Node.js", "Prisma", "MySQL"],
    icon: Database,
    featured: true,
    note: "Project details based on my resume",
  },
  {
    number: "04",
    name: "Movie Ticket Booking App",
    type: "Application project",
    description:
      "A cross-platform mobile app for browsing movies and managing a ticket-booking flow.",
    contributions: [
      "Integrated TMDB API for movie details, posters, ratings, and trailers",
      "Implemented Firebase Authentication",
      "Built showtime selection, seat reservation, booking history, and cancellation flows",
    ],
    result: "Created a complete mobile booking flow from discovering a movie to managing a reservation.",
    stack: ["Flutter", "Dart", "Firebase", "TMDB API"],
    icon: Smartphone,
    featured: false,
    note: "Project details based on my resume",
  },
];

const skills = [
  { label: "Frontend", items: ["React", "Next.js", "Vue.js", "Vite", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { label: "Backend", items: ["Node.js", "Flask", "Python", "RESTful API", "NestJS"] },
  { label: "Database", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { label: "Tools", items: ["Git", "Docker", "Postman", "DBeaver", "MySQL Workbench"] },
];

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className={`project-card ${project.featured ? "project-featured" : ""}`}>
      <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={19} aria-hidden="true" /></span></div>
      <p className="project-type">{project.type}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="contribution-list">
        {project.contributions.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <p className="project-result"><strong>Outcome</strong>{project.result}</p>
      <div className="tag-list">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="project-footer"><span>{project.note}</span><span className="arrow-circle" aria-hidden="true"><ArrowUpRight size={16} /></span></div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Sitthaphop home">
          <span className="brand-mark">S.</span>
          <span>SITTHAPHOP<span className="brand-muted"> / PORTFOLIO</span></span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:Sitthaphop.s@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> OPEN TO OPPORTUNITIES</div>
          <p className="eyebrow">JUNIOR FULL STACK DEVELOPER</p>
        <h1>Building practical<br />systems for the <span className="text-gradient">web.</span></h1>
          <p className="hero-description">
            Hi, I&apos;m <strong>Sitthaphop Sukjaroen</strong> — an IT graduate who enjoys
          building business systems and web applications across React, Flask, APIs, and relational databases.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="https://github.com/Kongstrength" target="_blank" rel="noopener noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <BriefcaseBusiness size={16} /> Resume PDF <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Phetchaburi, Thailand</span>
            <span><BriefcaseBusiness size={15} /> Onsite / Hybrid</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer profile card">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="profile-card">
            <div className="profile-top"><span className="window-dots"><i /><i /><i /></span><span>developer.ts</span><span className="file-type">TS</span></div>
            <div className="code-lines">
              <p><span className="line-no">01</span><span className="code-purple">const</span> developer = {"{"}</p>
              <p><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">&quot;Sitthaphop&quot;</span>,</p>
              <p><span className="line-no">03</span>&nbsp;&nbsp;role: <span className="code-green">&quot;Full Stack&quot;</span>,</p>
              <p><span className="line-no">04</span>&nbsp;&nbsp;focus: [</p>
              <p><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">&quot;Frontend&quot;</span>,</p>
              <p><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">&quot;Backend&quot;</span>,</p>
              <p><span className="line-no">07</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-orange">&quot;Databases&quot;</span></p>
              <p><span className="line-no">08</span>&nbsp;&nbsp;],</p>
              <p><span className="line-no">09</span>&nbsp;&nbsp;learning: <span className="code-blue">true</span></p>
              <p><span className="line-no">10</span>{"}"};</p>
            </div>
            <div className="profile-bottom"><span className="status-dot" /> Always learning, always building</div>
          </div>
          <div className="float-chip chip-react"><span>⚛</span> React</div>
          <div className="float-chip chip-db"><Database size={15} /> MySQL</div>
          <div className="float-chip chip-api"><Terminal size={15} /> REST API</div>
          <div className="visual-caption">LEARN · BUILD · IMPROVE</div>
        </div>
        <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="stats-strip">
        <div><strong>04</strong><span>PROJECTS / CASES</span></div>
        <div><strong>Full Stack</strong><span>DEVELOPMENT FOCUS</span></div>
        <div><strong>APIs</strong><span>BACKEND + DATA</span></div>
        <div><strong>2026</strong><span>IT GRADUATE</span></div>
      </section>

      <section className="section-wrap section-block" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED WORK</p><h2>Projects & <span className="text-gradient">experience.</span></h2></div>
          <p className="section-intro">Selected work across business systems, web applications, and mobile development — with a focus on useful user flows and maintainable data.</p>
        </div>
        <div className="work-group-label"><span>PROFESSIONAL EXPERIENCE</span><i /></div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
        <div className="work-group-label personal-label"><span>PERSONAL & ACADEMIC PROJECTS</span><i /></div>
        <div className="project-grid">
          {projects.slice(2).map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
        <div className="github-banner">
          <div className="github-icon"><Github size={25} /></div>
          <div><h3>More code on GitHub</h3><p>Explore repositories and projects on my GitHub profile.</p></div>
          <a href="https://github.com/Kongstrength" target="_blank" rel="noopener noreferrer">Visit GitHub <ArrowUpRight size={16} /></a>
        </div>
        <p className="confidentiality-note">Professional project details are intentionally summarized to respect company confidentiality.</p>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-wrap">
          <div className="section-heading">
            <div><p className="eyebrow">EXPERIENCE</p><h2>Learning by working on <span className="text-gradient">real systems.</span></h2></div>
            <p className="section-intro">A practical introduction to software development in a professional environment.</p>
          </div>
          <article className="experience-card">
            <div className="experience-marker"><BriefcaseBusiness size={20} /></div>
            <div className="experience-main">
              <div className="experience-heading">
                <div><span className="card-kicker">COOPERATIVE EDUCATION · UPDATE DATES</span><h3>Junior Full Stack Developer Intern</h3><p>JOS Technology · Thailand</p></div>
                <span className="experience-period">2025–2026</span>
              </div>
              <p className="experience-summary">Contributed to business systems for transportation and production workflows, working across requirements, database design, APIs, interfaces, and deployment.</p>
              <div className="experience-details">
                <div><strong>What I worked on</strong><ul><li>Built RESTful APIs with Flask and MySQL</li><li>Designed WorkOrder and WorkPhase database schemas</li><li>Improved dashboards, user flows, and GPS-related features</li></ul></div>
                <div><strong>What I learned</strong><ul><li>How software supports real operational workflows</li><li>How to collaborate from requirements through deployment</li><li>Why clarity, reliability, and maintainability matter</li></ul></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-intro">
              <div className="profile-placeholder" aria-label="Profile photo placeholder"><span>SS</span><small>PHOTO PLACEHOLDER</small></div>
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curious by nature.<br /><span className="text-gradient">Practical by design.</span></h2>
          </div>
          <div className="about-content">
            <p>I&apos;m Sitthaphop, an Information Technology graduate from Kasetsart University, Kamphaeng Saen Campus. I enjoy understanding how people work, then turning those requirements into useful interfaces, APIs, and database structures.</p>
            <p>My cooperative education experience at JOS Technology introduced me to real transportation and production systems. It helped me see how important clear workflows, reliable data, and maintainable code are beyond the development environment.</p>
            <p>I&apos;m currently looking for a Junior Full Stack Developer or Backend Developer opportunity where I can contribute, learn from an experienced team, and keep improving through hands-on work.</p>
            <div className="education-card">
              <div className="education-icon"><GraduationCap size={20} /></div>
              <div><span className="card-kicker">EDUCATION · 2022–2026</span><h3>Kasetsart University</h3><p>Bachelor of Science · Information Technology</p></div>
              <strong>3.17 <small>GPA</small></strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block process-section">
        <div className="section-heading">
          <div><p className="eyebrow">HOW I WORK</p><h2>From requirements to <span className="text-gradient">results.</span></h2></div>
          <p className="section-intro">I enjoy working across the stack and keeping technical decisions connected to the people using the product.</p>
        </div>
        <div className="process-grid">
          <div className="process-card"><span>01</span><h3>Understand</h3><p>Break requirements into user flows, business rules, and the problems the system needs to solve.</p></div>
          <div className="process-card"><span>02</span><h3>Design</h3><p>Shape clear database relationships and API contracts before building the interface.</p></div>
          <div className="process-card"><span>03</span><h3>Build</h3><p>Develop responsive UI, backend services, and integrations with attention to everyday usability.</p></div>
          <div className="process-card"><span>04</span><h3>Improve</h3><p>Test, debug, and refine the experience through collaboration and continuous learning.</p></div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <div className="section-heading">
          <div><p className="eyebrow">TOOLS OF THE TRADE</p><h2>Skills & <span className="text-gradient">technologies.</span></h2></div>
          <p className="section-intro">Technologies listed from my current resume and project experience.</p>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-card" key={group.label}>
              <div className="skill-card-header"><span>0{index + 1}</span><h3>{group.label}</h3></div>
              <div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="soft-skills"><span>ALSO BRINGING</span><p>Practical problem-solving <i /> User-oriented design <i /> Self-learning <i /> Adaptability</p></div>
        <div className="learning-card">
          <div><p className="eyebrow">CURRENTLY LEARNING</p><h3>Growing one useful skill at a time.</h3></div>
          <div className="learning-list"><span>TypeScript patterns</span><span>API validation & testing</span><span>Docker workflows</span><span>Deployment fundamentals</span></div>
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-wrap architecture-inner">
          <div className="section-heading">
            <div><p className="eyebrow">TECHNICAL SNAPSHOT</p><h2>How the pieces <span className="text-gradient">connect.</span></h2></div>
            <p className="section-intro">I enjoy working across the stack, while keeping each layer clear and connected to the user&apos;s workflow.</p>
          </div>
          <div className="architecture-flow" aria-label="Typical full stack architecture">
            <div className="architecture-node"><span>01</span><strong>Interface</strong><small>React · Vue · Next.js</small></div>
            <i />
            <div className="architecture-node"><span>02</span><strong>API layer</strong><small>Flask · Node.js · REST</small></div>
            <i />
            <div className="architecture-node"><span>03</span><strong>Data</strong><small>MySQL · Prisma · Redis</small></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <p className="eyebrow">HAVE AN OPPORTUNITY?</p>
          <h2>Let&apos;s build something<br /><span className="text-gradient">meaningful.</span></h2>
          <p className="contact-description">I&apos;m looking for a Junior Full Stack Developer or Backend Developer opportunity, with onsite or hybrid work arrangements.</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:Sitthaphop.s@gmail.com"><Mail size={17} /> Get in touch <ArrowUpRight size={16} /></a>
            <a className="button button-secondary" href="https://github.com/Kongstrength" target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a>
          </div>
          <div className="contact-details"><span><Mail size={15} /> Sitthaphop.s@gmail.com</span><span><MapPin size={15} /> Phetchaburi, Thailand</span></div>
        </div>
      </section>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>SITTHAPHOP</span></a><span>Designed & built with Next.js and Tailwind CSS.</span><span>© 2026 Sitthaphop Sukjaroen</span></footer>
    </main>
  );
}

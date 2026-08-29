import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../animations/variants';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import "../styles/about.css";

const TimelineItem = ({ year, description }) => (
  <div className="edu-item">
    <div className="edu-dot"></div>
    <div>
      <div className="edu-title">{year}</div>
      <div className="edu-sub">{description}</div>
    </div>
  </div>
);

const EducationItem = ({ title, subtitle }) => (
  <div className="edu-item">
    <div className="edu-dot"></div>
    <div>
      <div className="edu-title">{title}</div>
      <div className="edu-sub">{subtitle}</div>
    </div>
  </div>
);

const SkillGroup = ({ label, skills }) => (
  <div className="skill-group">
    <div className="skill-group-label">{label}</div>
    <div className="skill-tags">
      {skills.map((skill) => (
        <span key={skill} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const BeliefCard = ({ num, title, description }) => (
  <div className="belief-card">
    <div className="belief-num">{num.toString().padStart(2, "0")}</div>
    <div className="belief-title">{title}</div>
    <div className="belief-desc">{description}</div>
  </div>
);

const ConnectLink = ({ icon, label, sub, href, arrow = "↗" }) => (
  <a className="connect-link" href={href}>
    <div className="connect-link-left">
      <div className="connect-link-icon">{icon}</div>
      <div>
        <div className="connect-link-label">{label}</div>
        <div className="connect-link-sub">{sub}</div>
      </div>
    </div>
    <span className="connect-link-arrow">{arrow}</span>
  </a>
);

const InterestPill = ({ emoji, label }) => (
  <div className="interest-pill">
    <span>{emoji}</span> {label}
  </div>
);

export default function AboutPage() {
  const timelineData = [
    {
      year: "2019",
      description:
        "Accidental first encounter with usability testing at a BPO — the moment that started everything",
    },
    {
      year: "2020",
      description:
        "Started Google UX Design Certificate on Coursera during the pandemic",
    },
    {
      year: "2022",
      description:
        "First internship — UI/UX Designer at Laqshya Media Group. Audited and redesigned the SHARP platform.",
    },
    {
      year: "2023 – Now",
      description:
        "Sole UX Designer at a small product company. Shipped VPP and Venya. Building judgment every day.",
    },
  ];

  const beliefs = [
    {
      num: 1,
      title: "Go to where the work happens",
      description:
        "A site visit tells you more than a stakeholder meeting. Watching someone work reveals what they've stopped noticing.",
    },
    {
      num: 2,
      title: "Name the constraint upfront",
      description:
        "Every project has real constraints. Naming them isn't an excuse — it's what makes your process sound adaptive instead of chaotic.",
    },
    {
      num: 3,
      title: "Practical over perfect",
      description:
        "A solution that fits how people actually work is worth more than a polished design that ignores the reality of their day.",
    },
    {
      num: 4,
      title: "Show the decisions, not just the output",
      description:
        "The screens are the skeleton. The decisions are the story. That's what actually demonstrates design thinking.",
    },
  ];

  const skillsData = [
    {
      label: "Research",
      skills: [
        "User interviews",
        "Contextual inquiry",
        "Heuristic evaluation",
        "Usability testing",
        "Content audit",
        "Empathy mapping",
      ],
    },
    {
      label: "Design",
      skills: [
        "User flows",
        "Wireframing",
        "Hi-fi prototyping",
        "UI design",
        "Design systems",
      ],
    },
    {
      label: "Tools",
      skills: ["Figma", "FigJam", "Framer", "Notion"],
    },
    {
      label: "Soft skills",
      skills: [
        "Stakeholder communication",
        "Cross-functional collaboration",
        "Dev handoff",
      ],
    },
  ];

  const educationData = [
    {
      title: "Google UX Design Certificate",
      subtitle: "Coursera · Completed 2021",
    },
    {
      title: "UX Design Mentorship",
      subtitle: "Growthschool · Mentored by Anudeep Ayyagari",
    },
    {
      title: "BSc Information Technology",
      subtitle: "Mumbai University · Discontinued",
    },
    { title: "Higher Secondary — Commerce", subtitle: "Mumbai · 2018" },
  ];

  const interests = [
    { emoji: "🎸", label: "Guitar" },
    { emoji: "🪕", label: "Ukulele" },
    { emoji: "🎵", label: "Music" },
    { emoji: "📷", label: "Photography" },
    { emoji: "🌆", label: "Mumbai" },
  ];

  const connectLinks = [
    { icon: "💼", label: "LinkedIn", sub: "Sandeep Pawar", href: "#" },
    { icon: "✉️", label: "Email", sub: "sandeep@email.com", href: "#" },
    { icon: "📄", label: "Resume", sub: "Download PDF", href: "#", arrow: "↓" },
  ];

  return (
    <>
      <Nav />
      <main id="main-content" className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="hero-left">
          <div className="hero-eyebrow">About me</div>
          <div className="hero-title">Sandeep</div>
          <div className="hero-title-light">Pawar.</div>
          <div className="hero-role-tag">UX Designer · Mumbai</div>
          <div className="hero-desc">
            I'm not trying to present perfect textbook UX projects — I care more
            about <em>understanding how people actually work</em>
            and designing solutions that genuinely make their day-to-day easier.
          </div>
          <div className="hero-actions">
            <a className="btn-primary" href="#">
              Download resume ↓
            </a>
            <a className="btn-secondary" href="#">
              Say hello →
            </a>
          </div>
        </div>
        <div className="hero-right">
          {/* Professional Headshot */}
          <div className="photo-main">
            <div className="photo-inner">
              <span className="photo-icon">🧑</span>
              <div className="photo-label">Professional headshot</div>
              <div className="photo-dims">
                sandeep_headshot.jpg · Portrait · 3:4
              </div>
            </div>
          </div>
          {/* Candid Photo */}
          <div className="photo-candid">
            <div className="photo-inner">
              <span className="photo-icon">🎸</span>
              <div className="photo-label">Candid / personality photo</div>
              <div className="photo-dims">
                sandeep_candid.jpg · Landscape · 4:3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MY STORY */}
      <div className="about-section">
        <div className="two-col-wide">
          <div>
            <div className="section-eyebrow">My story</div>
            <div className="section-title">
              How a software test changed everything
            </div>
            <div className="body-text">
              In 2019, I was working at a US-based BPO. They were setting up new
              software for a process I was part of, and as one of the earliest
              employees, senior management put me through a testing exercise for
              it. I didn't know it at the time — but I was a usability study
              participant.
            </div>
            <div className="body-text">
              Something clicked during that process.{" "}
              <strong>
                I became fascinated by the gap between how software was built
                and how people actually used it.
              </strong>{" "}
              That gap felt like a problem worth solving.
            </div>
            <div className="body-text">
              Then the pandemic happened. Like everyone else, I found myself
              with unexpected time. I started the Google UX Design Certificate
              on Coursera — and struggled, genuinely, in the beginning. But I
              stuck with it. That led to my first internship as a UI/UX design
              intern at Laqshya Media Group, where I got to audit and redesign
              an enterprise SaaS platform from the inside.
            </div>
            <div className="body-text">
              Since then, I've been the sole designer at a small product company
              — researching, wireframing, testing, and shipping features for
              real users with real stakes.{" "}
              <strong>
                1.5 years of building judgment in isolation. Now I'm looking for
                the right team to build it with.
              </strong>
            </div>
          </div>
          <div>
            {/* Timeline */}
            <div className="edu-list" style={{ marginTop: "52px" }}>
              {timelineData.map((item) => (
                <TimelineItem
                  key={item.year}
                  year={item.year}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <div className="about-section">
        <div className="two-col">
          <div>
            <div className="section-eyebrow">My approach</div>
            <div className="section-title">Design that fits the real world</div>
            <div className="body-text">
              I start with the workflow, not the wireframe. Before I design
              anything, I want to understand the actual constraints — the
              people, the process, the environment, the stakes. That's where the
              real problems live.
            </div>
            <div className="body-text">
              This isn't idealism. It's a practical instinct I developed early —
              from watching cashiers at a fuel station reach for a paper sheet
              mid-task because the app hadn't shown them what they needed, to
              discovering unpaid overtime that nobody had thought to mention in
              the brief.
            </div>
            <div className="body-text">
              <strong>
                The best designs I've made didn't come from clever ideas. They
                came from paying attention.
              </strong>
            </div>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="belief-grid"
          >
            {beliefs.map((belief) => (
              <motion.div key={belief.num} variants={fadeIn}>
                <BeliefCard
                  num={belief.num}
                  title={belief.title}
                  description={belief.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* SKILLS & EDUCATION */}
      <div className="about-section">
        <div className="two-col">
          <div>
            <div className="section-eyebrow">Skills</div>
            <div className="section-title">What I bring</div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="skills-grid"
            >
              {skillsData.map((group) => (
                <motion.div key={group.label} variants={fadeIn}>
                  <SkillGroup
                    label={group.label}
                    skills={group.skills}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: "8px" }}>
              Education & certifications
            </div>
            <div className="section-title">How I got here</div>
            <div className="edu-list">
              {educationData.map((item) => (
                <EducationItem
                  key={item.title}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
            <div className="about-note">
              Born and brought up in <strong>Mumbai</strong> — the city that
              taught me that the best ideas come from watching how people
              actually navigate complexity.
            </div>
          </div>
        </div>
      </div>

      {/* OUTSIDE OF DESIGN */}
      <div className="about-section">
        <div className="section-eyebrow">Outside of design</div>
        <div className="section-title">The other things that make me think</div>
        <div className="body-text" style={{ maxWidth: "600px" }}>
          Design and music have more in common than people think. Both are about
          understanding what the other person needs to feel — and removing
          everything that gets in the way of that.
        </div>
        <div className="interest-row">
          {interests.map((interest) => (
            <InterestPill
              key={interest.label}
              emoji={interest.emoji}
              label={interest.label}
            />
          ))}
        </div>
      </div>

      {/* WHAT I'M LOOKING FOR */}
      <div className="about-section">
        <div className="section-eyebrow">What I'm looking for</div>
        <div className="section-title">The right team</div>
        <div className="two-col-wide">
          <div className="looking-card">
            <div className="looking-title">
              A team where design is taken seriously — and I can learn from
              people who've been doing it longer than me.
            </div>
            <div className="looking-text">
              I'm looking to join an established team of experienced UX
              designers where real-world practice is the norm, not the
              exception. I want to be in an environment where I'm challenged,
              mentored, and held to a standard I haven't reached yet.
            </div>
            <div className="looking-text">
              I'm adaptive by nature — I can adjust to different team cultures,
              paces, and problem domains. But the one thing that matters most to
              me is <strong>UX maturity.</strong> A team that believes in
              research, values process, and knows that good design takes more
              than one round of feedback.
            </div>
            <div className="target-row">
              <span className="target-pill">UX agencies</span>
              <span className="target-pill">Product companies</span>
              <span className="target-pill">Mumbai · Hybrid · Remote</span>
              <span className="target-pill">
                Ungrammary · Lollipop · Onething · Groww · Razorpay
              </span>
            </div>
          </div>
          <div>
            <div className="connect-links">
              {connectLinks.map((link) => (
                <ConnectLink
                  key={link.label}
                  icon={link.icon}
                  label={link.label}
                  sub={link.sub}
                  href={link.href}
                  arrow={link.arrow}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CLOSING LINE */}
      <div
        className="about-section"
        style={{ borderBottom: "none", paddingBottom: 0 }}
      >
        <div className="closing-strip">
          <div className="closing-quote">
            "I've spent the last 1.5 years building judgment in isolation — now
            I want to build it in <em>the right company.</em>"
          </div>
          <div className="closing-cta-row">
            <a className="btn-primary" href="#">
              View my work →
            </a>
            <a className="btn-secondary" href="#">
              Say hello
            </a>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}

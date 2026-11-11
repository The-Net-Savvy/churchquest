"use client"

import { useState, type SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

const Icon = ({ children, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
)

const ArrowUpRight = (props: IconProps) => (
  <Icon {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
)
const ArrowRight = (props: IconProps) => (
  <Icon {...props}>
    <path d="M5 12h14M14 7l5 5-5 5" />
  </Icon>
)
const Play = (props: IconProps) => (
  <Icon {...props}>
    <path d="m9 7 8 5-8 5V7Z" />
  </Icon>
)
const Check = (props: IconProps) => (
  <Icon {...props}>
    <path d="m5 12 4 4L19 6" />
  </Icon>
)
const Users = (props: IconProps) => (
  <Icon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
)
const Calendar = (props: IconProps) => (
  <Icon {...props}>
    <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z" />
  </Icon>
)
const Heart = (props: IconProps) => (
  <Icon {...props}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  </Icon>
)
const Shield = (props: IconProps) => (
  <Icon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
)
const Database = (props: IconProps) => (
  <Icon {...props}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </Icon>
)
const Chart = (props: IconProps) => (
  <Icon {...props}>
    <path d="M3 3v18h18M7 16l4-5 4 3 5-7" />
  </Icon>
)
const Menu = (props: IconProps) => (
  <Icon {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)
const X = (props: IconProps) => (
  <Icon {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
)

const partnerNames = [
  "GRACE CITY",
  "NEW LIFE",
  "THE GATHERING",
  "HOPE CHURCH",
  "ONE COMMUNITY",
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`logo ${light ? "logo-light" : ""}`}
      href="#home"
      aria-label="ChurchQuest home"
    >
      <span className="logo-mark">
        <span />
      </span>
      <span>ChurchQuest</span>
    </a>
  )
}

function MiniAvatar({ name, color }: { name: string; color: string }) {
  return (
    <span className="mini-avatar" style={{ background: color }}>
      {name}
    </span>
  )
}

function DashboardPreview() {
  return (
    <div className="dashboard-shell" aria-label="ChurchQuest dashboard preview">
      <div className="dashboard-topbar">
        <Logo />
        <div className="dash-search">Search people, events...</div>
        <div className="dash-profile">
          <span>RB</span>
          <div>
            <b>Ryan Brooks</b>
            <small>Administrator</small>
          </div>
        </div>
      </div>
      <div className="dashboard-body">
        <aside className="dash-sidebar">
          <span className="side-label">WORKSPACE</span>
          <a className="active" href="#dashboard">
            <Chart /> Overview
          </a>
          <a href="#members">
            <Users /> People
          </a>
          <a href="#events">
            <Calendar /> Events
          </a>
          <a href="#giving">
            <Heart /> Giving
          </a>
          <span className="side-label second">MANAGE</span>
          <a href="#security">
            <Shield /> Security
          </a>
          <div className="side-help">
            <span>Need help?</span>
            <small>Talk to our success team.</small>
            <button>Get support</button>
          </div>
        </aside>
        <main className="dash-main">
          <div className="dash-heading">
            <div>
              <p>MONDAY, MAY 20</p>
              <h3>Good morning, Ryan</h3>
            </div>
            <button>
              <span>+</span> Add member
            </button>
          </div>
          <div className="metric-row">
            <div className="metric-card">
              <span className="metric-icon blue">
                <Users />
              </span>
              <small>Total members</small>
              <b>2,846</b>
              <em>↑ 12.5% this month</em>
            </div>
            <div className="metric-card">
              <span className="metric-icon green">
                <Heart />
              </span>
              <small>Monthly giving</small>
              <b>$84,290</b>
              <em>↑ 8.2% this month</em>
            </div>
            <div className="metric-card">
              <span className="metric-icon purple">
                <Calendar />
              </span>
              <small>Upcoming events</small>
              <b>18</b>
              <em>Next: Sunday service</em>
            </div>
          </div>
          <div className="dash-grid">
            <div className="chart-card">
              <div className="card-title">
                <div>
                  <h4>Attendance overview</h4>
                  <small>Weekly service attendance</small>
                </div>
                <span>Last 8 weeks⌄</span>
              </div>
              <div className="line-chart">
                <div className="chart-lines">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <svg
                  viewBox="0 0 520 160"
                  preserveAspectRatio="none"
                  aria-label="Rising attendance chart"
                >
                  <defs>
                    <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#1478ff" stopOpacity=".25" />
                      <stop offset="1" stopColor="#1478ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    className="area"
                    d="M0 130 C50 118 65 120 100 95 S170 115 215 72 S285 88 330 55 S410 66 455 31 S490 28 520 13 L520 160 L0 160Z"
                  />
                  <path
                    className="line"
                    d="M0 130 C50 118 65 120 100 95 S170 115 215 72 S285 88 330 55 S410 66 455 31 S490 28 520 13"
                  />
                  <circle cx="455" cy="31" r="5" />
                </svg>
                <div className="chart-labels">
                  <span>Apr 7</span>
                  <span>Apr 14</span>
                  <span>Apr 21</span>
                  <span>Apr 28</span>
                  <span>May 5</span>
                  <span>May 12</span>
                </div>
              </div>
            </div>
            <div className="activity-card">
              <div className="card-title">
                <div>
                  <h4>Recent activity</h4>
                  <small>Live updates from your team</small>
                </div>
                <span className="live-dot">Live</span>
              </div>
              <div className="activity">
                <MiniAvatar name="JM" color="#d9f6ff" />
                <p>
                  <b>James Miller</b>
                  <br />
                  added 8 new members<small>2 min ago</small>
                </p>
              </div>
              <div className="activity">
                <MiniAvatar name="SC" color="#f0e4ff" />
                <p>
                  <b>Sarah Collins</b>
                  <br />
                  created “Summer Retreat”<small>18 min ago</small>
                </p>
              </div>
              <div className="activity">
                <MiniAvatar name="DL" color="#e6f7ce" />
                <p>
                  <b>David Lee</b>
                  <br />
                  recorded Sunday giving<small>1 hour ago</small>
                </p>
              </div>
              <button className="view-activity">
                View all activity <ArrowRight />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [feature, setFeature] = useState<"sync" | "analytics" | "schedule">(
    "sync",
  )

  const featureContent = {
    sync: {
      eyebrow: "REAL-TIME DATABASE",
      title: "Every update, everywhere, instantly.",
      body: "ChurchQuest keeps member records, groups, and giving data perfectly in sync with secure Supabase infrastructure.",
      bullets: [
        "Instant updates across your entire team",
        "Bank-level row security and backups",
        "Clean, reliable member records",
      ],
    },
    analytics: {
      eyebrow: "ATTENDANCE ANALYTICS",
      title: "Turn attendance into understanding.",
      body: "See service patterns, identify engagement trends, and care for people more intentionally with reports anyone can understand.",
      bullets: [
        "Live check-in and headcounts",
        "First-time guest follow-up",
        "Service and group trend reports",
      ],
    },
    schedule: {
      eyebrow: "EVENT SCHEDULING",
      title: "Plan meaningful moments, together.",
      body: "Build events, coordinate teams, and keep every member informed from one beautifully simple workspace.",
      bullets: [
        "Team and volunteer assignments",
        "Automated reminders and RSVPs",
        "Shared church-wide calendar",
      ],
    },
  }
  const active = featureContent[feature]

  return (
    <div className="site">
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="cloud cloud-one" />
        <div className="cloud cloud-two" />
        <div className="cloud cloud-three" />
        <nav className="nav container">
          <Logo light />
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              Pricing
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
          </div>
          <a className="nav-cta" href="#contact">
            Get Started <ArrowUpRight />
          </a>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <div className="hero-copy container">
          <div className="hero-badge">
            <span /> Built for ministries that want to grow
          </div>
          <h1>
            Empowering Ministries with
            <br />
            <span>Smart Digital Management</span>
          </h1>
          <p>
            One beautifully simple platform for member tracking, donations,
            events,
            <br className="desktop-break" /> and attendance—so your team can
            focus on what matters most.
          </p>
          <div className="hero-actions">
            <a className="button button-ghost" href="#dashboard">
              <Play /> View Demo
            </a>
            <a className="button button-lime" href="#contact">
              Get Started <ArrowUpRight />
            </a>
          </div>
          <div className="micro-proof">
            <div className="avatar-stack">
              <MiniAvatar name="JM" color="#c8e6ff" />
              <MiniAvatar name="AR" color="#ffd9cc" />
              <MiniAvatar name="SK" color="#e8dcff" />
            </div>
            <span>
              Loved by <b>120+ ministries</b> worldwide
            </span>
          </div>
        </div>

        <div className="hero-dashboard container" id="dashboard">
          <div className="floating-card float-giving">
            <span className="float-icon">
              <Heart />
            </span>
            <div>
              <small>Giving this month</small>
              <b>$84,290</b>
              <em>+8.2%</em>
            </div>
          </div>
          <DashboardPreview />
          <div className="floating-card float-attendance">
            <div className="ring">
              <span>86%</span>
            </div>
            <div>
              <small>Sunday attendance</small>
              <b>1,284 people</b>
              <em>↑ 14% from last week</em>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted">
        <div className="container">
          <p>TRUSTED BY FORWARD-THINKING CHURCHES</p>
          <div className="logo-ticker">
            {partnerNames.map((name, index) => (
              <div key={name}>
                <span className={`partner-mark mark-${index}`} />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about section container" id="about">
        <div className="section-kicker">
          <span>01</span> WHY CHURCHQUEST
        </div>
        <h2>
          A modern platform dedicated to building{" "}
          <span>connected, engaged,</span> and thriving congregations.
        </h2>
        <div className="bento">
          <div className="bento-card bento-photo">
            <div className="photo-art">
              <div className="sun" />
              <div className="people">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="photo-copy">
              <span>Built around people</span>
              <p>Ministry is personal. Your software should be too.</p>
            </div>
          </div>
          <div className="bento-card secure-card">
            <div className="bento-icon">
              <Shield />
            </div>
            <div>
              <small>PROTECTED BY DESIGN</small>
              <b>100%</b>
              <h3>Secure Tithes & Giving</h3>
              <p>Encrypted, transparent, and built for peace of mind.</p>
            </div>
          </div>
          <div className="bento-card lime-card">
            <span className="top-tag">OUR COMMUNITY</span>
            <b>
              120<span>+</span>
            </b>
            <h3>Parishes Connected</h3>
            <div className="parish-row">
              <div className="avatar-stack">
                <MiniAvatar name="G" color="#0b2b55" />
                <MiniAvatar name="H" color="#295fc9" />
                <MiniAvatar name="N" color="#f2fff0" />
              </div>
              <small>and growing every week</small>
            </div>
          </div>
          <div className="bento-card dark-stat">
            <div className="pulse">
              <span />
            </div>
            <small>MEMBER PROFILES MANAGED</small>
            <b>
              520k<span>+</span>
            </b>
            <p>Helping ministry teams know and care for every person.</p>
          </div>
        </div>
      </section>

      <section className="features section" id="features">
        <div className="container">
          <div className="section-kicker">
            <span>02</span> ONE CONNECTED PLATFORM
          </div>
          <div className="features-heading">
            <h2>
              Everything your ministry needs.
              <br />
              <span>Nothing it doesn’t.</span>
            </h2>
            <p>
              Powerful tools without the complexity. ChurchQuest brings your
              essential workflows together in one calm, connected place.
            </p>
          </div>
          <div className="feature-tabs" role="tablist">
            <button
              className={feature === "sync" ? "active" : ""}
              onClick={() => setFeature("sync")}
            >
              <Database /> Real-time sync
            </button>
            <button
              className={feature === "analytics" ? "active" : ""}
              onClick={() => setFeature("analytics")}
            >
              <Chart /> Attendance analytics
            </button>
            <button
              className={feature === "schedule" ? "active" : ""}
              onClick={() => setFeature("schedule")}
            >
              <Calendar /> Event scheduling
            </button>
          </div>
          <div className="feature-stage">
            <div className="feature-copy" key={feature}>
              <span>{active.eyebrow}</span>
              <h3>{active.title}</h3>
              <p>{active.body}</p>
              <ul>
                {active.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Check />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                Explore this feature <ArrowRight />
              </a>
            </div>
            <div className={`feature-visual visual-${feature}`}>
              <div className="visual-window">
                <div className="visual-top">
                  <span />
                  <span />
                  <span />
                  <p>churchquest.app / {feature}</p>
                </div>
                {feature === "sync" && (
                  <div className="sync-scene">
                    <div className="sync-center">
                      <Database />
                      <span>LIVE</span>
                    </div>
                    {["Members", "Giving", "Groups", "Events"].map(
                      (item, i) => (
                        <div className={`data-node node-${i}`} key={item}>
                          <Check />
                          <span>
                            {item}
                            <small>Synced just now</small>
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                )}
                {feature === "analytics" && (
                  <div className="analytics-scene">
                    <div className="analytics-title">
                      <span>Attendance</span>
                      <b>
                        1,284 <em>+14%</em>
                      </b>
                    </div>
                    <div className="bars">
                      {[42, 58, 51, 70, 65, 82, 94].map((height, i) => (
                        <i key={i} style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    <div className="days">
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                      <span>S</span>
                    </div>
                  </div>
                )}
                {feature === "schedule" && (
                  <div className="schedule-scene">
                    <div className="calendar-head">
                      <button>‹</button>
                      <b>May 2025</b>
                      <button>›</button>
                    </div>
                    <div className="calendar-grid">
                      {[
                        "M",
                        "T",
                        "W",
                        "T",
                        "F",
                        "S",
                        "S",
                        "12",
                        "13",
                        "14",
                        "15",
                        "16",
                        "17",
                        "18",
                        "19",
                        "20",
                        "21",
                        "22",
                        "23",
                        "24",
                        "25",
                      ].map((d, i) => (
                        <span
                          className={d === "18" ? "selected" : ""}
                          key={`${d}-${i}`}
                        >
                          {d}
                          {d === "18" && <small>Service</small>}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="supabase-pill">
                <span className="bolt">◆</span> Powered by Supabase{" "}
                <i>Connected</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-cloud" />
        <div className="container cta-content">
          <span className="cta-kicker">YOUR MISSION. BETTER CONNECTED.</span>
          <h2>
            Ready to bring your
            <br />
            ministry together?
          </h2>
          <p>
            Join more than 120 churches building stronger, more connected
            communities with ChurchQuest.
          </p>
          <div className="hero-actions">
            <a
              className="button button-lime"
              href="mailto:hello@churchquest.app"
            >
              Start free today <ArrowUpRight />
            </a>
            <a className="button button-ghost" href="#dashboard">
              <Play /> Watch overview
            </a>
          </div>
          <small>
            No credit card required · Setup in minutes · Support from real
            people
          </small>
        </div>
      </section>

      <footer>
        <div className="container footer-row">
          <Logo />
          <p>© 2025 ChurchQuest. Built to serve those who serve.</p>
          <div>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="mailto:hello@churchquest.app">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

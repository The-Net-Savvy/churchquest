"use client"

import Link from "next/link"
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
  type SVGProps,
} from "react"

import styles from "./DashboardPage.module.css"
import { InlineScript } from "./InlineScript"

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return (
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
}

const HomeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5.5h4V20" />
  </Icon>
)
const UsersIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
)
const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Icon>
)
const HeartIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
  </Icon>
)
const CalendarIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M8 2.5v4M16 2.5v4M3.5 10h17M5.5 4.5h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
  </Icon>
)
const ReportIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 3.5v17h17M7.5 15l4-5 3.5 3 5-6.5" />
  </Icon>
)
const SettingsIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
  </Icon>
)
const SignOutIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14 4.5h4.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H14M3.5 12h11M10.5 8l4 4-4 4" />
  </Icon>
)
const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20.5 20.5-4.5-4.5" />
  </Icon>
)
const BellIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 9a6 6 0 1 1 12 0c0 6.5 2.5 8 2.5 8h-17S6 15.5 6 9ZM10 20.5a2.2 2.2 0 0 0 4 0" />
  </Icon>
)
const PlusIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
)
const ArrowRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5" />
  </Icon>
)
const ArrowUpIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
  </Icon>
)
const TrendUpIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 17 10 11l4 4 6-7M15 8h5v5" />
  </Icon>
)
const SparkleIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z" />
  </Icon>
)
const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)
const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
)
const SunIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
  </Icon>
)
const MoonIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
  </Icon>
)

function Logo() {
  return (
    <Link className={styles.logo} href="/" aria-label="ChurchQuest home">
      <span className={styles.logoMark}>
        <span />
      </span>
      ChurchQuest
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/* Placeholder data (swap for real data once the backend is wired up) */
/* ------------------------------------------------------------------ */

type Section =
  | "overview"
  | "people"
  | "attendance"
  | "giving"
  | "events"
  | "reports"
  | "settings"

type Tone = "blue" | "sky" | "navy"

const navItems: {
  id: Section
  label: string
  icon: ComponentType<IconProps>
  count?: string
}[] = [
  { id: "overview", label: "Overview", icon: HomeIcon },
  { id: "people", label: "People", icon: UsersIcon, count: "2,846" },
  { id: "attendance", label: "Attendance", icon: CheckIcon },
  { id: "giving", label: "Giving", icon: HeartIcon },
  { id: "events", label: "Events", icon: CalendarIcon },
  { id: "reports", label: "Reports", icon: ReportIcon },
]

const sectionLabels: Record<Section, string> = {
  overview: "Overview",
  people: "People",
  attendance: "Attendance",
  giving: "Giving",
  events: "Events",
  reports: "Reports",
  settings: "Settings",
}

type AttendancePoint = { label: string; value: number }

const lastSixMonths: AttendancePoint[] = [
  { label: "Dec", value: 240 },
  { label: "Jan", value: 620 },
  { label: "Feb", value: 880 },
  { label: "Mar", value: 1010 },
  { label: "Apr", value: 1187 },
  { label: "May", value: 1284 },
]

const attendanceRanges = {
  "6m": { label: "Last 6 months", points: lastSixMonths },
  "12m": {
    label: "Last 12 months",
    points: [
      { label: "Jun", value: 60 },
      { label: "Jul", value: 85 },
      { label: "Aug", value: 110 },
      { label: "Sep", value: 140 },
      { label: "Oct", value: 175 },
      { label: "Nov", value: 205 },
      ...lastSixMonths,
    ],
  },
} satisfies Record<string, { label: string; points: AttendancePoint[] }>

type AttendanceRange = keyof typeof attendanceRanges

const ATTENDANCE_MAX = 2000
const attendanceTicks = [0, 500, 1000, 1500, 2000]

type GivingItem = { label: string; amount: number; color: string }

const givingRanges = {
  month: {
    label: "This month",
    period: "May 2025",
    note: "compared with last month.",
    change: "6.8%",
    items: [
      { label: "Tithes", amount: 48889, color: "var(--blue)" },
      { label: "Offerings", amount: 24444, color: "#b4ef3c" },
      { label: "Missions", amount: 10957, color: "var(--donut-missions)" },
    ],
  },
  year: {
    label: "This year",
    period: "Jan – May 2025",
    note: "compared with the same period last year.",
    change: "11.4%",
    items: [
      { label: "Tithes", amount: 521400, color: "var(--blue)" },
      { label: "Offerings", amount: 274800, color: "#b4ef3c" },
      { label: "Missions", amount: 118900, color: "var(--donut-missions)" },
    ],
  },
} satisfies Record<
  string,
  {
    label: string
    period: string
    note: string
    change: string
    items: GivingItem[]
  }
>

type GivingRange = keyof typeof givingRanges

const activity: {
  initials: string
  tone: Tone
  title: string
  detail: string
  time: string
}[] = [
  {
    initials: "SJ",
    tone: "blue",
    title: "Sarah Johnson joined your community",
    detail: "New member profile",
    time: "12 min ago",
  },
  {
    initials: "JD",
    tone: "sky",
    title: "John Davis made a $500 donation",
    detail: "General offering",
    time: "1 hr ago",
  },
  {
    initials: "ET",
    tone: "navy",
    title: "Emily Thompson created an event",
    detail: "Summer youth retreat",
    time: "3 hrs ago",
  },
]

const upcomingEvents = [
  {
    date: "2025-06-02",
    month: "Jun",
    day: "02",
    title: "Sunday Celebration",
    detail: "9:00 AM · Main Hall",
    action: "Manage",
  },
  {
    date: "2025-06-05",
    month: "Jun",
    day: "05",
    title: "Volunteer Gathering",
    detail: "6:30 PM · Fellowship Room",
    action: "Details",
  },
  {
    date: "2025-06-08",
    month: "Jun",
    day: "08",
    title: "Community Food Drive",
    detail: "10:00 AM · North Campus",
    action: "Details",
  },
]

const toneClass: Record<Tone, string> = {
  blue: styles.toneBlue,
  sky: styles.toneSky,
  navy: styles.toneNavy,
}

const formatNumber = (value: number) => value.toLocaleString("en-US")
const formatCurrency = (value: number) => `$${formatNumber(value)}`
const formatCompactCurrency = (value: number) =>
  `$${(value / 1000).toFixed(1)}k`

/* ------------------------------------------------------------------ */
/* Stat cards                                                          */
/* ------------------------------------------------------------------ */

function Sparkline() {
  return (
    <svg
      className={styles.sparkline}
      viewBox="0 0 64 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 24 12 17l8 4 10-10 8 6 10-9 6 3 8-8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StatCard({
  icon: StatIcon,
  tone,
  highlight = false,
  label,
  value,
  trend,
  note,
  children,
}: {
  icon: ComponentType<IconProps>
  tone: Tone
  highlight?: boolean
  label: string
  value: string
  trend?: string
  note?: string
  children?: ReactNode
}) {
  return (
    <article
      className={`${styles.statCard} ${highlight ? styles.statCardLime : ""}`}
    >
      <span className={`${styles.statIcon} ${toneClass[tone]}`}>
        <StatIcon />
      </span>
      <div className={styles.statBody}>
        <p className={styles.statLabel}>{label}</p>
        <p className={styles.statValue}>{value}</p>
        {trend && (
          <p className={styles.statTrend}>
            <ArrowUpIcon /> {trend}
          </p>
        )}
        {note && <p className={styles.statNote}>{note}</p>}
      </div>
      {children && <div className={styles.statViz}>{children}</div>}
    </article>
  )
}

/* ------------------------------------------------------------------ */
/* Attendance chart                                                    */
/* ------------------------------------------------------------------ */

function smoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return ""
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
  }
  return d
}

function AttendanceChart({ points }: { points: AttendancePoint[] }) {
  const gradientId = `attendance-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`
  const lastIndex = points.length - 1
  const [activeIndex, setActiveIndex] = useState(lastIndex)
  const active = points[Math.min(activeIndex, lastIndex)]

  const coords = points.map((point, index) => ({
    x: (index / lastIndex) * 100,
    y: 100 - (point.value / ATTENDANCE_MAX) * 100,
  }))
  const line = smoothPath(coords)
  const area = `${line} L 100 100 L 0 100 Z`

  const activeCoord = coords[Math.min(activeIndex, lastIndex)]
  const previous = points[activeIndex - 1]
  const change = previous
    ? ((active.value - previous.value) / previous.value) * 100
    : null
  const tooltipAlign =
    activeCoord.x > 85 ? styles.alignEnd : activeCoord.x < 15 ? styles.alignStart : ""

  return (
    <div className={styles.chart}>
      <div className={styles.yAxis} aria-hidden="true">
        {attendanceTicks.map((tick) => (
          <span key={tick} style={{ bottom: `${(tick / ATTENDANCE_MAX) * 100}%` }}>
            {formatNumber(tick)}
          </span>
        ))}
      </div>
      <div
        className={styles.plot}
        onMouseLeave={() => setActiveIndex(lastIndex)}
      >
        {attendanceTicks.map((tick) => (
          <i
            key={tick}
            className={styles.gridRow}
            style={{ bottom: `${(tick / ATTENDANCE_MAX) * 100}%` }}
          />
        ))}
        {coords.map((coord, index) => (
          <i
            key={index}
            className={styles.gridColumn}
            style={{ left: `${coord.x}%` }}
          />
        ))}
        <svg
          className={styles.plotSvg}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1478ff" stopOpacity="0.22" />
              <stop offset="1" stopColor="#1478ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gradientId})`} />
          <path
            d={line}
            fill="none"
            stroke="#0f74ef"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
        {coords.map((coord, index) => (
          <button
            key={points[index].label}
            type="button"
            className={`${styles.point} ${index === activeIndex ? styles.pointActive : ""}`}
            style={{ left: `${coord.x}%`, top: `${coord.y}%` }}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            aria-label={`${points[index].label}: ${formatNumber(points[index].value)} attendees`}
          />
        ))}
        <div
          className={`${styles.tooltip} ${tooltipAlign}`}
          style={{ left: `${activeCoord.x}%`, top: `${activeCoord.y}%` }}
          aria-live="polite"
        >
          <b>{formatNumber(active.value)}</b>
          {change !== null && (
            <span>
              {change >= 0 ? "+" : ""}
              {change.toFixed(1)}%
            </span>
          )}
        </div>
      </div>
      <div className={styles.xAxis} aria-hidden="true">
        {coords.map((coord, index) => (
          <span key={points[index].label} style={{ left: `${coord.x}%` }}>
            {points[index].label}
          </span>
        ))}
      </div>
    </div>
  )
}

function AttendanceCard() {
  const [range, setRange] = useState<AttendanceRange>("6m")
  const { points } = attendanceRanges[range]

  return (
    <section className={`${styles.card} ${styles.attendanceCard}`}>
      <header className={styles.cardHeader}>
        <span className={`${styles.cardIcon} ${styles.toneBlue}`}>
          <ReportIcon />
        </span>
        <div>
          <h2>Attendance growth</h2>
          <p>Monthly service attendance</p>
        </div>
        <label className={styles.select}>
          <select
            aria-label="Attendance range"
            value={range}
            onChange={(event) => setRange(event.target.value as AttendanceRange)}
          >
            {Object.entries(attendanceRanges).map(([key, option]) => (
              <option key={key} value={key}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </header>
      <AttendanceChart key={range} points={points} />
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Giving donut                                                        */
/* ------------------------------------------------------------------ */

function GivingCard() {
  const [range, setRange] = useState<GivingRange>("month")
  const data = givingRanges[range]
  const total = data.items.reduce((sum, item) => sum + item.amount, 0)

  const GAP = 1.2
  let offset = 0
  const segments = data.items.map((item) => {
    const share = (item.amount / total) * 100
    const segment = {
      ...item,
      share,
      dash: `${Math.max(share - GAP, 0)} ${100 - Math.max(share - GAP, 0)}`,
      offset: 25 - offset,
    }
    offset += share
    return segment
  })

  return (
    <section className={`${styles.card} ${styles.givingCard}`}>
      <header className={styles.cardHeader}>
        <span className={`${styles.cardIcon} ${styles.toneSky}`}>
          <HeartIcon />
        </span>
        <div>
          <h2>Giving overview</h2>
          <p>{data.period}</p>
        </div>
        <label className={styles.select}>
          <select
            aria-label="Giving period"
            value={range}
            onChange={(event) => setRange(event.target.value as GivingRange)}
          >
            {Object.entries(givingRanges).map(([key, option]) => (
              <option key={key} value={key}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </header>

      <div className={styles.givingBody}>
        <div className={styles.donut}>
          <svg viewBox="0 0 42 42" role="img" aria-label={`Total giving ${formatCurrency(total)}`}>
            <circle className={styles.donutTrack} cx="21" cy="21" r="15.9155" />
            {segments.map((segment) => (
              <circle
                key={segment.label}
                cx="21"
                cy="21"
                r="15.9155"
                style={{ stroke: segment.color }}
                strokeDasharray={segment.dash}
                strokeDashoffset={segment.offset}
              />
            ))}
          </svg>
          <div className={styles.donutCenter}>
            <b>{formatCompactCurrency(total)}</b>
            <span>Total giving</span>
          </div>
        </div>

        <ul className={styles.legend}>
          {segments.map((segment) => (
            <li key={segment.label}>
              <i style={{ background: segment.color }} />
              <div>
                <span>{segment.label}</span>
                <small>{formatCurrency(segment.amount)}</small>
              </div>
              <b>{Math.round(segment.share)}%</b>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.givingNote}>
        <span>
          <TrendUpIcon />
        </span>
        <span>
          <b>Giving is up {data.change}</b> {data.note}
        </span>
      </p>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Lists                                                               */
/* ------------------------------------------------------------------ */

function ActivityCard({ onViewAll }: { onViewAll: () => void }) {
  return (
    <section className={styles.card}>
      <header className={styles.cardHeader}>
        <span className={`${styles.cardIcon} ${styles.toneNavy}`}>
          <SparkleIcon />
        </span>
        <div>
          <h2>Recent activity</h2>
          <p>Live updates from your team</p>
        </div>
        <button type="button" className={styles.textButton} onClick={onViewAll}>
          View all <ArrowRightIcon />
        </button>
      </header>
      <ul className={styles.list}>
        {activity.map((item) => (
          <li key={item.title} className={styles.listRow}>
            <span className={`${styles.avatar} ${toneClass[item.tone]}`}>
              {item.initials}
            </span>
            <div className={styles.listText}>
              <b>{item.title}</b>
              <span>{item.detail}</span>
            </div>
            <span className={styles.listMeta}>{item.time}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function EventsCard({ onOpenEvents }: { onOpenEvents: () => void }) {
  return (
    <section className={styles.card}>
      <header className={styles.cardHeader}>
        <span className={`${styles.cardIcon} ${styles.toneBlue}`}>
          <CalendarIcon />
        </span>
        <div>
          <h2>Upcoming events</h2>
          <p>Your next scheduled gatherings</p>
        </div>
        <button type="button" className={styles.textButton} onClick={onOpenEvents}>
          View calendar <ArrowRightIcon />
        </button>
      </header>
      <ul className={styles.list}>
        {upcomingEvents.map((event) => (
          <li key={event.title} className={styles.listRow}>
            <time className={styles.dateBadge} dateTime={event.date}>
              <small>{event.month}</small>
              <b>{event.day}</b>
            </time>
            <div className={styles.listText}>
              <b>{event.title}</b>
              <span>{event.detail}</span>
            </div>
            <button
              type="button"
              className={`${styles.whiteButton} ${styles.pillButton}`}
              onClick={onOpenEvents}
              aria-label={`${event.action} ${event.title}`}
            >
              {event.action}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

function Overview({ go }: { go: (section: Section) => void }) {
  return (
    <>
      <div className={styles.pageHeading}>
        <div>
          <p className={styles.eyebrow}>Monday, May 20</p>
          <h1>
            Good morning, <span>Ryan.</span>
          </h1>
          <p className={styles.subtitle}>
            Here’s what’s happening across your church today.
          </p>
        </div>
        <button
          type="button"
          className={styles.primaryButton}
          onClick={() => go("people")}
        >
          <PlusIcon /> Add new member
        </button>
      </div>

      <div className={styles.statGrid}>
        <StatCard
          icon={UsersIcon}
          tone="blue"
          label="Total members"
          value="2,846"
          trend="12.5% this month"
        />
        <StatCard
          icon={CheckIcon}
          tone="sky"
          label="Avg. attendance"
          value="1,284"
          trend="8.2% this month"
        />
        <StatCard
          icon={HeartIcon}
          tone="navy"
          highlight
          label="Monthly giving"
          value="$84,290"
          trend="6.8% this month"
        >
          <Sparkline />
        </StatCard>
        <StatCard
          icon={CalendarIcon}
          tone="sky"
          label="Upcoming events"
          value="18"
          note="Next: Sunday service"
        >
          <button
            type="button"
            className={styles.roundButton}
            onClick={() => go("events")}
            aria-label="Open events"
          >
            <ArrowRightIcon />
          </button>
        </StatCard>
      </div>

      <div className={styles.chartGrid}>
        <AttendanceCard />
        <GivingCard />
      </div>

      <div className={styles.listGrid}>
        <ActivityCard onViewAll={() => go("reports")} />
        <EventsCard onOpenEvents={() => go("events")} />
      </div>
    </>
  )
}

function ComingSoon({
  section,
  onBack,
}: {
  section: Section
  onBack: () => void
}) {
  return (
    <section className={styles.comingSoon}>
      <span className={styles.comingSoonIcon}>
        <SparkleIcon />
      </span>
      <h1>{sectionLabels[section]}</h1>
      <p>
        This part of ChurchQuest is still being built. The overview shows a
        preview of what’s coming.
      </p>
      <button type="button" className={styles.primaryButton} onClick={onBack}>
        Back to overview
      </button>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

type Theme = "dark" | "light"

const THEME_KEY = "cq-dashboard-theme"
const THEME_ATTR = "data-cq-theme"
const SIDEBAR_KEY = "cq-dashboard-sidebar"
const SIDEBAR_ATTR = "data-cq-sidebar"
const DESKTOP_QUERY = "(min-width: 1025px)"

// Runs while the HTML is parsed so the saved theme and sidebar state apply
// before first paint.
const themeScript = `(function(){var r=document.documentElement,t="dark";try{var s=localStorage.getItem("${THEME_KEY}");if(s==="light"||s==="dark")t=s;if(localStorage.getItem("${SIDEBAR_KEY}")==="collapsed")r.setAttribute("${SIDEBAR_ATTR}","collapsed")}catch(e){}r.setAttribute("${THEME_ATTR}",t)})()`

function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark"
  } catch {
    return "dark"
  }
}

function readStoredSidebarCollapsed() {
  try {
    return localStorage.getItem(SIDEBAR_KEY) === "collapsed"
  } catch {
    return false
  }
}

function toggleTheme() {
  const root = document.documentElement
  const next: Theme = root.getAttribute(THEME_ATTR) === "light" ? "dark" : "light"
  root.setAttribute(THEME_ATTR, next)
  try {
    localStorage.setItem(THEME_KEY, next)
  } catch {
    // Storage unavailable (private mode etc.): the theme still applies for this visit.
  }
}

export default function DashboardPage() {
  const [section, setSection] = useState<Section>("overview")
  const [navOpen, setNavOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)
  const [shortcut, setShortcut] = useState("Ctrl K")
  const searchRef = useRef<HTMLInputElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.userAgent)) setShortcut("⌘K")

    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        searchRef.current?.focus()
      }
      if (event.key === "Escape") setNavOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Applies the saved theme and sidebar state on client-side navigations (the
  // inline script only runs on full page loads) and after React's dev remount
  // resets <html>. The cleanup removes them so other pages aren't affected.
  useLayoutEffect(() => {
    const root = document.documentElement
    root.setAttribute(THEME_ATTR, readStoredTheme())

    const storedCollapsed = readStoredSidebarCollapsed()
    if (storedCollapsed) root.setAttribute(SIDEBAR_ATTR, "collapsed")
    setCollapsed(storedCollapsed)

    const media = window.matchMedia(DESKTOP_QUERY)
    const syncViewport = () => {
      setIsDesktop(media.matches)
      if (media.matches) setNavOpen(false)
    }
    syncViewport()
    media.addEventListener("change", syncViewport)

    return () => {
      root.removeAttribute(THEME_ATTR)
      root.removeAttribute(SIDEBAR_ATTR)
      media.removeEventListener("change", syncViewport)
    }
  }, [])

  function setSidebarCollapsed(next: boolean) {
    setCollapsed(next)
    const root = document.documentElement
    if (next) root.setAttribute(SIDEBAR_ATTR, "collapsed")
    else root.removeAttribute(SIDEBAR_ATTR)
    try {
      localStorage.setItem(SIDEBAR_KEY, next ? "collapsed" : "open")
    } catch {
      // Storage unavailable: the change still applies for this visit.
    }
  }

  // Desktop: show/hide the docked sidebar. Small screens: open the slide-out menu.
  function toggleSidebar() {
    if (window.matchMedia(DESKTOP_QUERY).matches) setSidebarCollapsed(!collapsed)
    else setNavOpen(true)
  }

  function closeSidebar() {
    if (window.matchMedia(DESKTOP_QUERY).matches) setSidebarCollapsed(true)
    else setNavOpen(false)
    // The close button disappears with the sidebar, so keep keyboard focus nearby.
    menuButtonRef.current?.focus()
  }

  function go(next: Section) {
    setSection(next)
    setNavOpen(false)
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <InlineScript html={themeScript} />
      <div className={styles.shell}>
      <aside
        id="dashboard-sidebar"
        className={`${styles.sidebar} ${navOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.sidebarTop}>
          <Logo />
          <button
            type="button"
            className={styles.sidebarClose}
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <CloseIcon />
          </button>
        </div>

        <p className={styles.navLabel}>Ministry workspace</p>
        <nav className={styles.nav} aria-label="Dashboard">
          {navItems.map(({ id, label, icon: NavIcon, count }) => (
            <button
              key={id}
              type="button"
              className={`${styles.navItem} ${section === id ? styles.navItemActive : ""}`}
              aria-current={section === id ? "page" : undefined}
              onClick={() => go(id)}
            >
              <NavIcon />
              <span>{label}</span>
              {count && <small>{count}</small>}
            </button>
          ))}
        </nav>

        <div className={styles.helpCard}>
          <span className={styles.helpIcon}>
            <HeartIcon />
          </span>
          <b>Need a hand?</b>
          <p>Our ministry success team is here for you.</p>
          <a
            className={`${styles.whiteButton} ${styles.helpButton}`}
            href="mailto:hello@churchquest.app"
          >
            Get support
          </a>
        </div>

        <div className={styles.sidebarFooter}>
          <button
            type="button"
            className={`${styles.navItem} ${section === "settings" ? styles.navItemActive : ""}`}
            aria-current={section === "settings" ? "page" : undefined}
            onClick={() => go("settings")}
          >
            <SettingsIcon />
            <span>Settings</span>
          </button>
          <Link className={styles.navItem} href="/">
            <SignOutIcon />
            <span>Sign out</span>
          </Link>
        </div>
      </aside>

      {navOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setNavOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.topbarInner}>
          <button
            type="button"
            ref={menuButtonRef}
            className={`${styles.iconButton} ${styles.menuButton}`}
            onClick={toggleSidebar}
            aria-label={
              isDesktop ? (collapsed ? "Show sidebar" : "Hide sidebar") : "Open menu"
            }
            aria-controls="dashboard-sidebar"
            aria-expanded={isDesktop ? !collapsed : navOpen}
          >
            <MenuIcon />
          </button>

          <label className={styles.search}>
            <SearchIcon />
            <span className={styles.srOnly}>Search</span>
            <input
              ref={searchRef}
              type="search"
              placeholder="Search people, events, groups…"
            />
            <kbd>{shortcut}</kbd>
          </label>

          <div className={styles.topbarActions}>
            <div className={styles.dateRange}>
              <CalendarIcon />
              <span>May 20 – May 26</span>
            </div>
            <button
              type="button"
              className={styles.iconButton}
              onClick={toggleTheme}
              aria-label="Switch between dark and light theme"
              title="Switch theme"
            >
              <SunIcon className={styles.themeLight} />
              <MoonIcon className={styles.themeDark} />
            </button>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="Notifications, 3 unread"
            >
              <BellIcon />
              <span className={styles.badge}>3</span>
            </button>
            <div className={styles.profile}>
              <span className={styles.profileAvatar}>RB</span>
              <div>
                <b>Ryan Brooks</b>
                <small>Administrator</small>
              </div>
            </div>
          </div>
          </div>
        </header>

        <main className={styles.content}>
          {section === "overview" ? (
            <Overview go={go} />
          ) : (
            <ComingSoon section={section} onBack={() => go("overview")} />
          )}
        </main>
      </div>
      </div>
    </>
  )
}

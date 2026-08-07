import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { vppImages } from "../../data/vppImages";
import "../../styles/caseStudy.css";

function CaseStudyImage({ src, alt, aspectClass, fit = "contain" }) {
  return (
    <div className={`cs-image-frame ${aspectClass}`}>
      <img
        src={src}
        alt={alt}
        className={fit === "cover" ? "img-cover" : "img-contain"}
        loading="lazy"
      />
    </div>
  );
}

export default function VPPCaseStudy() {
  const [mode, setMode] = useState("scan");
  const [switching, setSwitching] = useState(false);
  const [justSwitched, setJustSwitched] = useState(null);
  const [showToggleHint, setShowToggleHint] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowToggleHint(false), 4000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleModeChange = (newMode) => {
    if (newMode === mode) return;

    setShowToggleHint(false);
    setSwitching(true);

    setTimeout(() => {
      setMode(newMode);
      setJustSwitched(newMode);
      setSwitching(false);
      setTimeout(() => setJustSwitched(null), 600);
    }, 200);
  };

  return (
    <>
      <nav className="global-nav" aria-label="Site navigation">
        <Link className="nav-logo" to="/">
          Sandeep <span>Pawar</span>
        </Link>
        <Link className="nav-back" to="/">
          ← Back to work
        </Link>
      </nav>

      <div
        className="cs-bar"
        role="region"
        aria-label="Case study reading mode"
      >
        <div className="cs-bar-left">
          <span className="cs-bar-num">01 / 03</span>
        </div>

        <div className="cs-bar-centre">
          <div
            className="cs-toggle"
            role="tablist"
            aria-label="Choose how to read this case study"
          >
            <button
              type="button"
              role="tab"
              id="tab-scan"
              aria-selected={mode === "scan"}
              aria-controls="case-study-panel"
              className={`toggle-btn ${mode === "scan" ? "active" : ""} ${justSwitched === "scan" ? "just-switched" : ""}`}
              onClick={() => handleModeChange("scan")}
            >
              Scan Mode
            </button>
            <button
              type="button"
              role="tab"
              id="tab-dive"
              aria-selected={mode === "dive"}
              aria-controls="case-study-panel"
              className={`toggle-btn ${mode === "dive" ? "active" : ""} ${justSwitched === "dive" ? "just-switched" : ""}`}
              onClick={() => handleModeChange("dive")}
            >
              Deep Dive Mode
            </button>
          </div>
          <p
            className={`toggle-hint ${showToggleHint ? "" : "is-hidden"}`}
            aria-live="polite"
          >
            Choose how you want to read this case study.
          </p>
          <div className="toggle-subtitle">
            {mode === "scan"
              ? "The 60-second version"
              : "The full process story"}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }} />
      </div>

      <main
        id="case-study-panel"
        role="tabpanel"
        aria-labelledby={mode === "scan" ? "tab-scan" : "tab-dive"}
        className={`page-content mode-content ${switching ? "switching" : ""}`}
      >
        {/* HERO (shared) */}
        <div className="cs-hero">
          <div className="cs-hero-tag">Lead project · Operations · FinTech</div>
          <div className="cs-hero-title">Streamlining</div>
          <div className="cs-hero-title-light">fuel station operations</div>

          <div className="cs-hero-meta">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Sole UX Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Team</span>
              <span className="cs-meta-value">Me · Developer · CTO</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">Android + Web</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline</span>
              <span className="cs-meta-value">3 months · 2024</span>
            </div>
          </div>

          <div className="cs-hero-constraint-row">
            <span className="cs-constraint">Under 3 weeks to dev handoff</span>
            <span className="cs-constraint">Non-tech-savvy users</span>
            <span className="cs-constraint">No design system</span>
            <span className="cs-constraint">Real financial data at stake</span>
          </div>

          <CaseStudyImage {...vppImages.hero} />
          <div className="img-caption">
            Fuel Station Management — A Digital Transformation · VPP Platform
          </div>
        </div>

        {/* SCAN MODE */}
        {mode === "scan" && (
          <>
            <div className="cs-section">
              <div className="cs-section-eyebrow">01 — The problem</div>
              <div className="cs-section-title">The problem in one line</div>

              <div className="problem-statement">
                A fuel station running its entire business on{" "}
                <strong>paper logs, Excel, and Tally</strong> — three tools that
                didn&apos;t speak to each other. Cashiers were doing unpaid
                overtime every shift. Nobody had noticed.
              </div>

              <div className="sub-label">What I was asked to do</div>
              <ul className="scan-list">
                <li>Digitise daily operations for cashiers and accountants</li>
                <li>Give the owner real-time financial visibility</li>
                <li>
                  Replace the paper-and-spreadsheet workflow with a unified
                  platform
                </li>
              </ul>

              <div className="scan-divider" />
              <div className="sub-label">What I actually found on-site</div>
              <ul className="scan-list">
                <li>
                  Cashiers stayed an unpaid hour after every shift to hand over
                  paper logs — never mentioned in the brief
                </li>
                <li>
                  Monthly credit invoicing was a 6-step manual process ending in
                  a WhatsApp photo — also not in scope
                </li>
              </ul>

              <div
                className="scan-at-a-glance"
                aria-label="Project at a glance"
              >
                <div className="scan-glance-item">
                  <div className="scan-glance-val">3 mo</div>
                  <div className="scan-glance-lbl">Project timeline</div>
                </div>
                <div className="scan-glance-item">
                  <div className="scan-glance-val">4</div>
                  <div className="scan-glance-lbl">
                    Stakeholders interviewed
                  </div>
                </div>
                <div className="scan-glance-item">
                  <div className="scan-glance-val">4</div>
                  <div className="scan-glance-lbl">Users tested on-site</div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">02 — What I did</div>
              <div className="cs-section-title">My role and process</div>

              <div className="sub-label">Role</div>
              <ul className="scan-list" style={{ marginBottom: "20px" }}>
                <li>
                  Sole UX Designer — research, flows, wireframes, testing, dev
                  handoff
                </li>
                <li>3 months total · Under 3 weeks to dev handoff</li>
              </ul>

              <div className="sub-label">Process in 4 steps</div>
              <div className="phase-row-scan" style={{ marginTop: "10px" }}>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">01</div>
                  <div className="phase-title-scan">On-site discovery</div>
                  <div className="phase-desc-scan">
                    Interviews with cashiers, accountant, owner + site
                    observation
                  </div>
                </div>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">02</div>
                  <div className="phase-title-scan">
                    User flows + hi-fi wireframes
                  </div>
                  <div className="phase-desc-scan">
                    Skipped lo-fi — went straight to hi-fi given the timeline
                  </div>
                </div>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">03</div>
                  <div className="phase-title-scan">Usability testing</div>
                  <div className="phase-desc-scan">
                    On-site at the fuel station, real users, live data, staging
                    build
                  </div>
                </div>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">04</div>
                  <div className="phase-title-scan">Dev collaboration</div>
                  <div className="phase-desc-scan">
                    Daily calls through build — GST logic too complex for
                    Figma-only handoff
                  </div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">03 — Key decisions</div>
              <div className="cs-section-title">
                4 decisions that shaped the product
              </div>
              <div className="cs-section-subtitle">
                What I chose — and the one-line reason why.
              </div>

              <div className="decision-cards">
                <div className="dc">
                  <div className="dc-head">
                    Why I skipped lo-fi and went straight to hi-fi
                  </div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">
                      Hi-fi from day one — 3 weeks to handoff, non-designer
                      client needed something concrete to react to immediately
                    </span>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">
                    Why I chose real-time alerts over end-of-day reports
                  </div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">
                      Field-level inline alerts — by end-of-day, errors had
                      already compounded through downstream entries
                    </span>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">
                    Why we built a dedicated credit invoicing flow
                  </div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">
                      Automated the entire 6-step WhatsApp process into a single
                      action — not in original scope, but clearly broken
                    </span>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">
                    Why I stayed involved through development
                  </div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">
                      Daily calls through build — GST calculations and tax logic
                      were too complex for a Figma-only handoff
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">04 — Results</div>
              <div className="cs-section-title">What it delivered</div>

              <div className="metric-strip">
                <div className="metric-item">
                  <div className="metric-val">45→20 min</div>
                  <div className="metric-lbl">Shift closing time</div>
                </div>
                <div className="metric-item">
                  <div className="metric-val">0 hrs</div>
                  <div className="metric-lbl">Unpaid overtime eliminated</div>
                </div>
                <div className="metric-item">
                  <div className="metric-val">6→1 steps</div>
                  <div className="metric-lbl">Credit invoice process</div>
                </div>
                <div className="metric-item">
                  <div className="metric-val">100%</div>
                  <div className="metric-lbl">Paper-to-digital adoption</div>
                </div>
              </div>

              <ul className="scan-list">
                <li>
                  Shift closing dropped from 45 minutes to 20 — cashiers
                  finished and left on time
                </li>
                <li>
                  A 6-step manual WhatsApp invoice process became one button
                  inside the platform
                </li>
                <li>
                  Every shift transitioned — including users who had never used
                  a digital ops tool before
                </li>
              </ul>

              <div className="highlight-block">
                This project started as a digitisation task. It became a
                workflow redesign — because we went on-site before we opened
                Figma.
              </div>
            </div>
          </>
        )}

        {/* DEEP DIVE MODE */}
        {mode === "dive" && (
          <>
            <div className="cs-section">
              <div className="cs-section-eyebrow">01 — The problem</div>
              <div className="cs-section-title">
                The problem nobody had named
              </div>
              <div className="cs-section-subtitle">
                The brief said &ldquo;digitise operations.&rdquo; The site visit
                said something different.
              </div>

              <div className="problem-statement">
                Fuel station staff were running a business on{" "}
                <strong>paper logs, Excel, and Tally</strong> — three tools that
                didn&apos;t talk to each other.
              </div>

              <div className="sub-label">What this caused</div>
              <ul className="scan-list" style={{ marginBottom: "16px" }}>
                <li>
                  Cashiers manually entered the same data 3 times across
                  disconnected tools
                </li>
                <li>
                  Owners had no live visibility without asking the accountant
                  directly
                </li>
                <li>
                  Cashiers stayed an unpaid extra hour after every shift —
                  nobody had flagged it
                </li>
                <li>
                  Tax season meant rushed, error-prone manual reconciliation
                </li>
              </ul>

              <div className="scan-divider" />
              <div className="sub-label">The real problem</div>
              <ul className="scan-list" style={{ marginBottom: "16px" }}>
                <li>
                  Not just &ldquo;replace paper with software&rdquo; — eliminate
                  the hidden workflow inefficiencies nobody had named yet
                </li>
              </ul>

              <div className="highlight-block">
                The real problem wasn&apos;t the tools — it was the workflow
                those tools had created. Two of the most significant problems we
                solved were never in the brief.
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">
                02 — Research &amp; insights
              </div>
              <div className="cs-section-title">What a site visit changed</div>
              <div className="cs-section-subtitle">
                On-site observation, contextual interviews, and user flow
                mapping with the owner and CTO.
              </div>

              <div className="body-text">
                I conducted on-site observation during actual shift operations,
                contextual interviews with cashiers, the accountant, and the
                owner, and a user flow mapping session with the owner and CTO.
                The site visit was where the unpaid overtime discovery happened
                — cashiers queueing to hand paper logs to the accountant before
                they could leave. An extra hour, every shift, invisible by
                habit.
              </div>

              <div className="insight-grid">
                <div className="insight-card">
                  <div className="insight-cat">On-site discovery</div>
                  <div className="insight-finding">
                    Cashiers stayed an unpaid hour after every shift — nobody
                    had flagged it
                  </div>
                  <span className="insight-source">Site visit</span>
                  <div className="insight-expansion">
                    This wasn&apos;t in the brief. Cashiers were queueing to
                    hand paper logs to the accountant before they could leave.
                    An extra hour, every shift, that had become invisible by
                    habit. It reshaped the entire problem statement.
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">Flow mapping</div>
                  <div className="insight-finding">
                    Credit invoicing was a 6-step manual process ending in a
                    WhatsApp photo
                  </div>
                  <span className="insight-source">Flow mapping session</span>
                  <div className="insight-expansion">
                    Calculate → add GST → add interest → add GST on interest →
                    print → photograph → WhatsApp. Six steps, entirely manual,
                    for every monthly invoice. Not in scope. We made the case to
                    include it.
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">Owner interview</div>
                  <div className="insight-finding">
                    No live financial visibility — every report required calling
                    the accountant
                  </div>
                  <span className="insight-source">Contextual interview</span>
                  <div className="insight-expansion">
                    The owner couldn&apos;t see today&apos;s cash flow, fuel
                    stock, or tax liability without a call. Not a preference —
                    it was the only way the current system worked.
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">Process audit</div>
                  <div className="insight-finding">
                    Same data entered 3 times — paper logs, Excel, then Tally
                  </div>
                  <span className="insight-source">On-site observation</span>
                  <div className="insight-expansion">
                    Every sale: written in the paper register, copied to a
                    spreadsheet, manually re-entered into Tally. Three entries,
                    same data, every day. Three separate chances for human
                    error.
                  </div>
                </div>
              </div>

              <div className="highlight-block">
                Research didn&apos;t just inform the design — it expanded the
                brief. Two of the most significant problems we solved were never
                mentioned until we went on-site.
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">03 — Design process</div>
              <div className="cs-section-title">
                How we went from insight to interface
              </div>
              <div className="cs-section-subtitle">
                Four stages — Discovery, User Flow &amp; Wireframing, Usability
                Testing, Interface Design.
              </div>

              <div className="body-text">
                With less than 3 weeks to dev handoff, lo-fi wireframes would
                have added a round of abstract feedback we couldn&apos;t afford.
                I went straight to hi-fi — not to skip process, but because our
                client wasn&apos;t a designer and needed something concrete to
                react to from day one.{" "}
                <strong>The constraint forced a better process.</strong>
              </div>

              <CaseStudyImage {...vppImages.designProcess} />
              <div className="img-caption">
                01 Discovery → 02 User Flow &amp; Wireframing → 03 Usability
                Testing → 04 Interface Design
              </div>

              <div style={{ height: "20px" }} />

              <div className="sub-label">User flow</div>
              <div style={{ height: "8px" }} />
              <CaseStudyImage {...vppImages.userFlow} />
              <div className="img-caption">
                Three user journeys mapped — cashier mobile flow, accountant
                dashboard flow, owner analytics flow.
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">04 — Wireframes</div>
              <div className="cs-section-title">
                Straight to hi-fi — by design
              </div>

              <div className="body-text">
                The 8-tile home screen on mobile was a deliberate IA decision —
                cashiers needed to reach any flow in one tap. Depth was hidden
                behind each tile, not exposed on the home screen. The desktop
                dashboard gave the accountant everything they needed without
                requiring navigation: daily totals, fuel summary, cash packets,
                and bank transfers all within one scrollable view.
              </div>

              <CaseStudyImage {...vppImages.desktopWireframes} />
              <div className="img-caption">
                Web dashboard — cashier data entry, daily sale reports, tank
                summaries, tax reports, bank transfer management.
              </div>

              <div className="img-gap" />

              <CaseStudyImage {...vppImages.mobileWireframes} />
              <div className="img-caption">
                Android app — 8 cashier flows across Fuel Summary, Oil Summary,
                CNG, Credit A/c, Cash Packets, Bank Transfers, Loss Reports, and
                Daily Rates.
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">05 — Key decisions</div>
              <div className="cs-section-title">What I chose and why</div>

              <div className="decision-cards">
                <div className="dc">
                  <div className="dc-head">
                    Why I skipped lo-fi and went straight to hi-fi
                  </div>
                  <div className="dc-full-rows">
                    <div className="dc-row">
                      <span className="dc-tag tag-found">Constraint</span>
                      <span className="dc-text">
                        Less than 3 weeks to dev handoff — lo-fi would have
                        added abstract feedback rounds we couldn&apos;t afford
                      </span>
                    </div>
                    <div className="dc-row">
                      <span className="dc-tag tag-rejected">Rejected</span>
                      <span className="dc-text">
                        Lo-fi wireframes — too slow, feedback too abstract for a
                        non-designer client
                      </span>
                    </div>
                    <div className="dc-row">
                      <span className="dc-tag tag-chose">Chose</span>
                      <span className="dc-text">
                        Hi-fi from day one — gave the client something concrete
                        to react to, kept the dev team unblocked
                      </span>
                    </div>
                  </div>
                  <div className="dc-story">
                    <p>
                      Less than 3 weeks to dev handoff. Lo-fi would have created
                      a round of vague, abstract feedback we couldn&apos;t act
                      on — especially with a client who wasn&apos;t a designer.
                      Hi-fi gave everyone something concrete from day one.{" "}
                      <strong>The constraint forced a better process.</strong>
                    </p>
                  </div>
                </div>

                <div className="dc">
                  <div className="dc-head">
                    Why I chose real-time alerts over end-of-day reports
                  </div>
                  <div className="dc-full-rows">
                    <div className="dc-row">
                      <span className="dc-tag tag-found">Found</span>
                      <span className="dc-text">
                        By end-of-day, errors had already affected multiple
                        downstream entries — summary reports were always too
                        late
                      </span>
                    </div>
                    <div className="dc-row">
                      <span className="dc-tag tag-rejected">Rejected</span>
                      <span className="dc-text">
                        End-of-day summary report — errors compounded before
                        they could be caught
                      </span>
                    </div>
                    <div className="dc-row">
                      <span className="dc-tag tag-chose">Chose</span>
                      <span className="dc-text">
                        Field-level inline alerts — catch mismatches at entry,
                        before they propagate downstream
                      </span>
                    </div>
                  </div>
                  <div className="dc-story">
                    <p>
                      The accountant made it clear during testing — by the time
                      an end-of-day report flagged something, the discrepancy
                      had already affected other entries.{" "}
                      <strong>Real-time caught it at the source.</strong>
                    </p>
                  </div>
                </div>

                <div className="dc">
                  <div className="dc-head">
                    Why we built a dedicated credit invoicing flow
                  </div>
                  <div className="dc-full-rows">
                    <div className="dc-row">
                      <span className="dc-tag tag-found">Found</span>
                      <span className="dc-text">
                        6-step manual invoice process uncovered during flow
                        mapping — not in original scope
                      </span>
                    </div>
                    <div className="dc-row">
                      <span className="dc-tag tag-chose">Chose</span>
                      <span className="dc-text">
                        Dedicated automated flow — replaced the entire
                        WhatsApp-based process with a single action
                      </span>
                    </div>
                  </div>
                  <div className="dc-story">
                    <p>
                      Six manual steps. Not in the brief. Clearly broken. I made
                      the case to include it — one automated flow replaced the
                      entire WhatsApp-based process.
                    </p>
                  </div>
                </div>

                <div className="dc">
                  <div className="dc-head">
                    Why I stayed involved through development
                  </div>
                  <div className="dc-full-rows">
                    <div className="dc-row">
                      <span className="dc-tag tag-found">Found</span>
                      <span className="dc-text">
                        GST calculations, credit interest, and tax report logic
                        — too complex to hand off via Figma files alone
                      </span>
                    </div>
                    <div className="dc-row">
                      <span className="dc-tag tag-chose">Chose</span>
                      <span className="dc-text">
                        Daily calls through build — clarified API requirements,
                        reviewed builds, adjusted designs to technical realities
                      </span>
                    </div>
                  </div>
                  <div className="dc-story">
                    <p>
                      Handing off and stepping away wasn&apos;t an option. The
                      business logic was complex enough that developers needed
                      ongoing design input.{" "}
                      <strong>
                        The handoff was a collaboration, not a delivery.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">
                06 — Prototype &amp; testing
              </div>
              <div className="cs-section-title">
                Tested where it actually mattered
              </div>
              <div className="cs-section-subtitle">
                At the fuel station, during actual shift-end, with real users on
                a staging build.
              </div>

              <div className="body-text">
                We tested at the fuel station during actual shift-end — real
                users, live data, staging platform. No meeting room, no
                simulated tasks. The accountant&apos;s flows held up. The
                cashier flows were rougher.
              </div>

              <div className="pull-quote">
                <div className="pull-quote-text">
                  &ldquo;3 out of 4 cashiers reached for their paper sheet
                  mid-task. The app had blank forms where it should have had
                  data. We&apos;d designed for what the system needed — not what
                  users needed.&rdquo;
                </div>
                <div className="pull-quote-attr">
                  Testing observation · Fuel station · On-site
                </div>
              </div>

              <div className="body-text">
                Prefilled forms auto-populated from the previous day&apos;s
                closing data. Dashboard cross-period comparisons added.
                Navigation tightened based on where friction actually appeared.
              </div>

              <CaseStudyImage {...vppImages.mockupsAfterTest} />
              <div className="img-caption">
                Final screens after testing — cashier fuel summary (mobile),
                data entry + tank grid (web), oil summary (mobile).
              </div>

              <div className="highlight-block">
                We&apos;d designed for what the system needed from users — not
                what users needed from the system. Testing caught it before
                launch.
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">07 — Outcomes</div>
              <div className="cs-section-title">What it delivered</div>

              <div className="metric-strip">
                <div className="metric-item">
                  <div className="metric-val">55%</div>
                  <div className="metric-lbl">Faster shift closing</div>
                  <div className="metric-context">
                    45 min → ~20 min. Cashiers finished and left on time.
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-val">0 hrs</div>
                  <div className="metric-lbl">Unpaid overtime</div>
                  <div className="metric-context">
                    The unpaid overtime nobody had questioned — eliminated
                    entirely.
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-val">6→1</div>
                  <div className="metric-lbl">Invoice steps</div>
                  <div className="metric-context">
                    A 6-step WhatsApp process became one action inside the
                    platform.
                  </div>
                </div>
                <div className="metric-item">
                  <div className="metric-val">100%</div>
                  <div className="metric-lbl">Paper-to-digital</div>
                  <div className="metric-context">
                    Every shift transitioned — including first-time digital ops
                    users.
                  </div>
                </div>
              </div>

              <div className="highlight-block">
                The project started as a digitisation task. It became a workflow
                redesign — because we spent time understanding how people
                actually worked before we started designing.
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">
                08 — Reflection &amp; foresight
              </div>
              <div className="cs-section-title">Honest reflection</div>

              <div className="foresight-grid">
                <div className="foresight-card">
                  <div className="foresight-label">What went wrong</div>
                  <div className="foresight-text">
                    Initial cashier flows had friction — designed around system
                    logic, not user mental models. Post-launch GST and credit
                    interest edge cases only surfaced in live transactions.
                  </div>
                </div>
                <div className="foresight-card">
                  <div className="foresight-label">
                    What I&apos;d do differently
                  </div>
                  <div className="foresight-text">
                    Run a cognitive walkthrough with the accountant before
                    usability testing. Involve engineering earlier in the
                    calculation logic. Explore connecting fuel pumps directly to
                    eliminate manual cashier entry at source.
                  </div>
                </div>
              </div>

              <div className="body-text" style={{ marginTop: "20px" }}>
                The cashier flows had more friction than expected — we&apos;d
                designed for what the system needed, not what users needed.
                Testing caught it and we iterated before launch. Post-launch, a
                2-week refinement phase surfaced GST and credit interest edge
                cases that only appeared in real transactions. No full redesigns
                — but confirmed staged testing doesn&apos;t replace live use.
              </div>

              <div className="body-text">
                <strong>If I did this again:</strong> a cognitive walkthrough
                with the accountant before usability testing, engineering
                involved in the business logic earlier, and fuel pump
                integration as the next problem — connecting pumps directly to
                eliminate manual cashier entry entirely.
              </div>

              <div className="highlight-block">
                You don&apos;t need to have done everything perfectly. You need
                to show you know what you would do next.
              </div>
            </div>
          </>
        )}

        <Link className="next-project" to="/">
          <div>
            <div className="next-label">Next project</div>
            <div className="next-title">
              SHARP — Hyperlocal campaign metrics redesign
            </div>
            <div className="next-cta-hint">Read case study →</div>
          </div>
          <div className="next-arrow">→</div>
        </Link>
      </main>
    </>
  );
}

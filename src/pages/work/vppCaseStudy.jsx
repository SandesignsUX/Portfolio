import React from "react";
import { Link } from "react-router-dom";
import { vppImages } from "../../data/vppImages";
import "../../styles/caseStudy.css";
import { CaseStudyImage } from "../../components/case-study/CaseStudyImage";

export default function VPPCaseStudy() {
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

      <main
        id="main-content"
        className="page-content"
      >
        {/* HERO */}
        <div className="cs-hero">
          <div className="cs-hero-tag">Lead project · Operations · FinTech</div>
          <h1 className="cs-hero-title">Streamlining</h1>
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

        {/* CASE STUDY CONTENT */}
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

        <Link
          className="next-project"
          to="/"
          aria-label="Next project: SHARP — Hyperlocal campaign metrics redesign"
        >
          <div>
            <div className="next-label">Next project</div>
            <div className="next-title">
              SHARP — Hyperlocal campaign metrics redesign
            </div>
            <div className="next-cta-hint">Read case study →</div>
          </div>
          <div className="next-arrow" aria-hidden="true">→</div>
        </Link>
      </main>
    </>
  );
}

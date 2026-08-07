import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/caseStudy.css';

const SharpCaseStudy = () => {
  const [mode, setMode] = useState('scan');
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
    <div className="sharp-case-study">
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
          <span className="cs-bar-num">03 / 03</span>
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
              aria-selected={mode === 'scan'}
              aria-controls="case-study-panel"
              className={`toggle-btn ${mode === 'scan' ? 'active' : ''} ${justSwitched === 'scan' ? 'just-switched' : ''}`}
              onClick={() => handleModeChange('scan')}
            >
              Scan Mode
            </button>
            <button
              type="button"
              role="tab"
              id="tab-dive"
              aria-selected={mode === 'dive'}
              aria-controls="case-study-panel"
              className={`toggle-btn ${mode === 'dive' ? 'active' : ''} ${justSwitched === 'dive' ? 'just-switched' : ''}`}
              onClick={() => handleModeChange('dive')}
            >
              Deep Dive Mode
            </button>
          </div>
          <p
            className={`toggle-hint ${showToggleHint ? '' : 'is-hidden'}`}
            aria-live="polite"
          >
            Choose how you want to read this case study.
          </p>
          <div className="toggle-subtitle">
            {mode === 'scan' ? 'The 60-second version' : 'The full process story'}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }} />
      </div>

      <main
        id="case-study-panel"
        role="tabpanel"
        aria-labelledby={mode === 'scan' ? 'tab-scan' : 'tab-dive'}
        className={`page-content mode-content ${switching ? 'switching' : ''}`}
      >
        {/* HERO (shared) */}
        <div className="cs-hero">
          <div className="cs-hero-tag">UX Audit · Redesign · Enterprise SaaS · Internship</div>
          <div className="cs-hero-title">Auditing and redesigning</div>
          <div className="cs-hero-title-light">SHARP</div>
          <div className="cs-hero-meta">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Sole UX Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Company</span>
              <span className="cs-meta-value">Laqshya Media Group</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Context</span>
              <span className="cs-meta-value">Internship project</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline</span>
              <span className="cs-meta-value">2–4 weeks · 2023</span>
            </div>
          </div>
          <div className="cs-hero-constraint-row">
            <span className="cs-constraint">Redesign without confusing existing daily users</span>
            <span className="cs-constraint">No design system</span>
            <span className="cs-constraint">Enterprise SaaS complexity</span>
            <span className="cs-constraint">Project shut down before testing</span>
          </div>
          <div className="img-placeholder aspect-hero">
            <div className="img-ph-inner">
              <span className="img-ph-icon">📊</span>

              <div className="img-ph-desc">SHARP platform — campaign dashboard + map view</div>
            </div>
          </div>
          <div className="img-caption">SHARP (OOHAxis) — Laqshya Media Group's proprietary tool for planning and measuring OOH campaigns across 50,000+ sites in 26 cities.</div>
        </div>

        {/* SCAN MODE */}
        {mode === 'scan' && (
          <>
            <div className="cs-section">
              <div className="cs-section-eyebrow">01 — The problem</div>
              <div className="cs-section-title">The problem in one line</div>
              <div className="problem-statement">
                A proprietary enterprise platform used by media planners <strong>daily for 2–4 hours</strong> — with buried navigation, confusing function names, and no way to go back in any multi-step process without losing all your work. Laqshya wanted to sell it externally. It wasn't ready.
              </div>
              <div className="sub-label">What I was asked to do</div>
              <ul className="scan-list">
                <li>Audit the existing SHARP platform for usability problems</li>
                <li>Redesign the interface to reduce friction for internal daily users</li>
                <li>Make it polished enough to sell to external enterprise clients</li>
              </ul>
              <div className="scan-divider" />
              <div className="sub-label">The constraint that shaped everything</div>
              <ul className="scan-list">
                <li>Existing users worked in the platform 2–4 hours every day — a dramatic redesign would break learned workflows</li>
                <li>The goal was to improve without making it unfamiliar</li>
              </ul>
              <div
                className="scan-at-a-glance"
                aria-label="Project at a glance"
              >
                <div className="scan-glance-item">
                  <div className="scan-glance-val">2–4 wks</div>
                  <div className="scan-glance-lbl">Project timeline</div>
                </div>
                <div className="scan-glance-item">
                  <div className="scan-glance-val">24</div>
                  <div className="scan-glance-lbl">Violations found</div>
                </div>
                <div className="scan-glance-item">
                  <div className="scan-glance-val">4</div>
                  <div className="scan-glance-lbl">Users interviewed</div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">02 — What I did</div>
              <div className="cs-section-title">My role and process</div>
              <div className="sub-label">Role</div>
              <ul className="scan-list" style={{ marginBottom: '20px' }}>
                <li>Sole UX Designer — research, audit, wireframes, prototype</li>
                <li>2–4 weeks · Internship at Laqshya Media Group</li>
              </ul>
              <div className="sub-label">Process in 3 phases</div>
              <div className="phase-row-scan" style={{ marginTop: '10px' }}>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">01</div>
                  <div className="phase-title-scan">Discovery</div>
                  <div className="phase-desc-scan">User interviews (4 internal users) + empathy mapping + content audit across 18 pages, 50+ screens.</div>
                  <span className="phase-status status-done">Completed</span>
                </div>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">02</div>
                  <div className="phase-title-scan">Heuristic evaluation + Redesign</div>
                  <div className="phase-desc-scan">Nielsen's 10 heuristics across all flows. 24 violations found. Lo-fi wireframes for all major flows.</div>
                  <span className="phase-status status-done">Completed</span>
                </div>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">03</div>
                  <div className="phase-title-scan">Usability testing</div>
                  <div className="phase-desc-scan">Study plan written. 3–5 participants ready. Prototype complete. Project closed before testing ran.</div>
                  <span className="phase-status status-stopped">Not executed</span>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">03 — Key findings</div>
              <div className="cs-section-title">What the audit uncovered</div>
              <div className="cs-section-subtitle">4 severity-4 violations — usability catastrophes that would kill an external launch.</div>

              <div className="severity-grid">
                <div className="severity-card">
                  <div className="severity-num sev-4">4</div>
                  <div className="severity-lbl" style={{ color: 'var(--red)' }}>Severity 4</div>
                  <div className="severity-desc">Catastrophic — must fix before external release</div>
                </div>
                <div className="severity-card">
                  <div className="severity-num sev-3">6</div>
                  <div className="severity-lbl" style={{ color: 'var(--orange)' }}>Severity 3</div>
                  <div className="severity-desc">Major problems — high priority</div>
                </div>
                <div className="severity-card">
                  <div className="severity-num sev-2">11</div>
                  <div className="severity-lbl" style={{ color: 'var(--amber)' }}>Severity 2</div>
                  <div className="severity-desc">Minor problems — low priority</div>
                </div>
                <div className="severity-card">
                  <div className="severity-num sev-1">3</div>
                  <div className="severity-lbl" style={{ color: 'var(--cream-35)' }}>Severity 0–1</div>
                  <div className="severity-desc">Cosmetic or non-issues</div>
                </div>
              </div>

              <div className="sub-label">The 4 severity-4 violations (scan version)</div>
              <ul className="scan-list" style={{ marginTop: '10px' }}>
                <li>No way to edit or delete a campaign after creation — any mistake required starting from scratch</li>
                <li>City Segment gave no signifier after polygon selection — users stranded with no next step</li>
                <li>Plan My Campaign (most-used daily function) buried in 3rd–4th nav position</li>
                <li>Upload Plan silently skipped Touch Points — a critical campaign setup step — with no warning</li>
              </ul>
            </div>


            <div className="cs-section">
              <div className="cs-section-eyebrow">04 — Key decisions</div>
              <div className="cs-section-title">4 decisions that shaped the redesign</div>
              <div className="cs-section-subtitle">What I chose — and the one-line reason why.</div>
              <div className="decision-cards">
                <div className="dc">
                  <div className="dc-head">Why I restructured navigation around user priority, not feature order</div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">Surfaced Plan My Campaign as primary nav item — navigation should reflect user priority, not development history</span>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I replaced donut graphs with bar graphs across the platform</div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">All 4 users flagged donut charts independently — media planners compare numbers, they don't admire visuals</span>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I added progressive disclosure to all multi-step processes</div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">Persistent back navigation + draft-saving — in a tool where flows involve hundreds of site selections, losing everything on a back click was a daily disaster</span>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I kept the redesign conservative — improving, not reinventing</div>
                  <div className="dc-chose-only">
                    <span className="dc-tag tag-chose">Chose</span>
                    <span className="dc-text">Preserved familiar patterns — 4 daily users with years of muscle memory couldn't afford a dramatic visual shift</span>
                  </div>
                </div>
              </div>
              <div className="highlight-block">The platform had been built feature-by-feature. Nobody had ever stepped back and mapped the whole thing from a user's point of view. This project was the first time that happened.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">05 — What happened</div>
              <div className="cs-section-title">Honest outcome</div>
              <div className="testing-grid-3">
                <div className="testing-col">
                  <div className="testing-col-label">What was completed</div>
                  <ul className="scan-list">
                    <li>User interviews — 4 users, empathy maps</li>
                    <li>Content audit — 18 pages mapped</li>
                    <li>Heuristic evaluation — 24 violations</li>
                    <li>Lo-fi wireframes — all major flows</li>
                    <li>Usability study plan — written and ready</li>
                  </ul>
                </div>
                <div className="testing-col">
                  <div className="testing-col-label">What didn't happen</div>
                  <ul className="scan-list">
                    <li>Usability testing — never ran</li>
                    <li>Hi-fi prototype — never built</li>
                    <li>Developer handoff — never happened</li>
                  </ul>
                </div>
                <div className="testing-col">
                  <div className="testing-col-label">Why</div>
                  <ul className="scan-list">
                    <li>Business decision — not a design quality issue</li>
                    <li>The research and lo-fi were complete and documented</li>
                    <li>The direction was right. The timing wasn't.</li>
                  </ul>
                </div>
              </div>
              <div className="highlight-block">A project shut down for business reasons is not the same as a project that failed for design reasons. The work was done. The findings were real. The prototype was ready.</div>
            </div>
          </>
        )}

        {/* DEEP DIVE MODE */}
        {mode === 'dive' && (
          <>
            <div className="cs-section">
              <div className="cs-section-eyebrow">01 — The product</div>
              <div className="cs-section-title">What SHARP is and who uses it</div>
              <div className="cs-section-subtitle">An internal enterprise tool used daily by Laqshya's media research team — to plan and measure outdoor advertising campaigns for clients.</div>
              <div className="body-text">SHARP (OOHAxis) plans OOH campaigns across 50,000+ geo-tagged billboard sites in 26 cities. It provides hyperlocal metrics — reach, impressions, cost per impression, target group analytics — and lets planners shortlist sites, upload plans, create campaigns, and export client-ready reports. Used by GMs, Executives, and Project Executives — <strong>2–4 hours every day.</strong></div>
              <div className="scan-divider" />
              <div className="sub-label">Why it needed a redesign</div>
              <ul className="scan-list">
                <li>Platform had grown feature-by-feature without a consistent UX framework</li>
                <li>Internal users had adapted workflows around limitations — masking the real friction</li>
                <li>Laqshya wanted to sell SHARP to external clients — the UI wasn't ready for that audience</li>
              </ul>
              <div className="highlight-block">The dual brief: fix it for people who use it every day, and make it good enough to sell to people who've never seen it before.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">02 — Research</div>
              <div className="cs-section-title">Three methods, one clear picture</div>
              <div className="cs-section-subtitle">User interviews with 4 internal users, a full content audit mapping every page and flow, and a heuristic evaluation using Nielsen's 10 heuristics.</div>

              <div className="phase-row-scan">
                <div className="phase-card-scan">
                  <div className="phase-num-scan">01</div>
                  <div className="phase-title-scan">User Interviews</div>
                  <div className="phase-desc-scan">4 internal users — GM, 2 Executives, 1 Project Executive. Empathy maps built from each session.</div>
                  <span className="phase-status status-done">Completed</span>
                </div>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">02</div>
                  <div className="phase-title-scan">Content Audit</div>
                  <div className="phase-desc-scan">Full IA mapped — 18 pages, 50+ screens, all navigation paths and function names documented.</div>
                  <span className="phase-status status-done">Completed</span>
                </div>
                <div className="phase-card-scan">
                  <div className="phase-num-scan">03</div>
                  <div className="phase-title-scan">Heuristic Evaluation</div>
                  <div className="phase-desc-scan">Nielsen's 10 heuristics across all flows. Every violation rated 0–4 severity.</div>
                  <span className="phase-status status-done">Completed</span>
                </div>
              </div>

              <div style={{ height: '24px' }} />
              <div className="sub-label">What users said — verbatim</div>
              <div style={{ height: '10px' }} />

              <div className="user-quote">
                <div className="user-quote-text">"Plan My Campaign Bro? Why is it where it is? It's the number one used thing and it is second, third, fourth. What the hell? So that's irritating."</div>
                <div className="user-quote-attr">Project Executive · Media Research</div>
              </div>
              <div className="user-quote">
                <div className="user-quote-text">"I don't like the names — Plan My Site, My Localities, List My Site, Site Insights... like what the hell is happening? It's not a clear description."</div>
                <div className="user-quote-attr">Project Executive · Media Research</div>
              </div>
              <div className="user-quote">
                <div className="user-quote-text">"Upload Plan and Upload Sites — if we gave a client a login ID, they would get confused between the two functions."</div>
                <div className="user-quote-attr">Executive · Media Research</div>
              </div>

              <div className="insight-grid">
                <div className="insight-card">
                  <div className="insight-cat">User interview</div>
                  <div className="insight-finding">The most-used feature was buried in 3rd or 4th nav position</div>
                  <span className="insight-source">4/4 users affected</span>
                  <div className="insight-expansion">Plan My Campaign was the primary daily function for every user — yet it sat below less-used features. Users had memorised where to find it, hiding the problem from the team. A new client would have no chance.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">User interview</div>
                  <div className="insight-finding">Function names were so similar users couldn't tell them apart</div>
                  <span className="insight-source">3/4 users flagged</span>
                  <div className="insight-expansion">Upload Plan, Upload Sites, Plan City Localities, Plan My Campaign — four overlapping names with similar UI. Internal users learned differences through daily repetition. Any new user would be immediately lost.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">User interview</div>
                  <div className="insight-finding">Donut graphs were universally disliked — impossible to compare</div>
                  <span className="insight-source">4/4 users flagged</span>
                  <div className="insight-expansion">All 4 users independently flagged pie/donut charts. Values only visible on hover, segments impossible to compare visually. All 4 recommended bar graphs instead.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">Process pain point</div>
                  <div className="insight-finding">Losing internet mid-task wiped all selections — start over</div>
                  <span className="insight-source">User interviews</span>
                  <div className="insight-expansion">In a tool where a single flow involves selecting hundreds of billboard sites across multiple cities, a dropped connection wiped everything. No draft saving, no recovery.</div>
                </div>
              </div>
              <div className="highlight-block">Internal users had adapted their workflows so completely around the platform's limitations that the real friction was almost invisible — until you sat with them and watched.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">03 — Heuristic evaluation</div>
              <div className="cs-section-title">24 violations. 4 usability catastrophes.</div>
              <div className="cs-section-subtitle">Every flow evaluated against Nielsen's 10 heuristics. The severity-4 violations were the ones that would kill an external launch.</div>

              <div className="severity-grid">
                <div className="severity-card">
                  <div className="severity-num sev-4">4</div>
                  <div className="severity-lbl" style={{ color: 'var(--red)' }}>Severity 4</div>
                  <div className="severity-desc">Catastrophic — must fix before external release</div>
                </div>
                <div className="severity-card">
                  <div className="severity-num sev-3">6</div>
                  <div className="severity-lbl" style={{ color: 'var(--orange)' }}>Severity 3</div>
                  <div className="severity-desc">Major — high priority</div>
                </div>
                <div className="severity-card">
                  <div className="severity-num sev-2">11</div>
                  <div className="severity-lbl" style={{ color: 'var(--amber)' }}>Severity 2</div>
                  <div className="severity-desc">Minor — low priority</div>
                </div>
                <div className="severity-card">
                  <div className="severity-num sev-1">3</div>
                  <div className="severity-lbl" style={{ color: 'var(--cream-35)' }}>Severity 0–1</div>
                  <div className="severity-desc">Cosmetic or non-issues</div>
                </div>
              </div>

              <div className="img-placeholder aspect-wide">
                <div className="img-ph-inner">
                  <span className="img-ph-icon">🔍</span>

                  <div className="img-ph-desc">Full evaluation — 10 heuristics, all violations + severity ratings</div>
                </div>
              </div>
              <div className="img-caption">Full heuristic evaluation — 10 Nielsen heuristics, 24 violations mapped and rated 0–4.</div>

              <div style={{ height: '24px' }} />
              <div className="sub-label">The 4 severity-4 violations</div>
              <div style={{ height: '10px' }} />

              <div className="heuristic-grid">
                <div className="heuristic-card">
                  <div className="heuristic-head">
                    <span className="h-badge badge-s4">S4</span>
                    <span className="heuristic-title">No edit or delete after campaign creation</span>
                  </div>
                  <div className="heuristic-body">
                    <div className="heuristic-violation">After creating a campaign, it is permanently locked — any mistake requires starting from scratch</div>
                    <div className="heuristic-violation">Heuristic: User Control & Freedom</div>
                    <div className="heuristic-expansion">The most critical violation. In a planning tool where campaigns represent significant client investment, locking users out after creation was a fundamental failure.</div>
                  </div>
                </div>
                <div className="heuristic-card">
                  <div className="heuristic-head">
                    <span className="h-badge badge-s4">S4</span>
                    <span className="heuristic-title">City Segment gives no signifier after polygon selection</span>
                  </div>
                  <div className="heuristic-body">
                    <div className="heuristic-violation">After drawing a geographic polygon, no indication of what to do next</div>
                    <div className="heuristic-violation">Heuristic: Visibility of System Status</div>
                    <div className="heuristic-expansion">City Segment lets users define a geographic area to find billboard sites. After drawing the polygon, the interface went silent — no next button, no prompt, no feedback.</div>
                  </div>
                </div>
                <div className="heuristic-card">
                  <div className="heuristic-head">
                    <span className="h-badge badge-s4">S4</span>
                    <span className="heuristic-title">Most-used function buried — deeply hidden in nav</span>
                  </div>
                  <div className="heuristic-body">
                    <div className="heuristic-violation">Plan My Campaign in 3rd–4th nav position despite being the primary daily function</div>
                    <div className="heuristic-violation">Heuristic: Recognition rather than Recall</div>
                    <div className="heuristic-expansion">The IA was organised by development order, not user priority. Internal users had memorised the layout through daily repetition — a new external client would have no mental model to lean on.</div>
                  </div>
                </div>
                <div className="heuristic-card">
                  <div className="heuristic-head">
                    <span className="h-badge badge-s4">S4</span>
                    <span className="heuristic-title">Upload Plan silently skips Touch Points</span>
                  </div>
                  <div className="heuristic-body">
                    <div className="heuristic-violation">Clicking "Continue" bypasses Touch Points — a critical campaign step — silently</div>
                    <div className="heuristic-violation">Heuristic: Error Prevention</div>
                    <div className="heuristic-expansion">Touch Points is a key part of campaign setup. The Continue button bypassed it with no warning. Users discovered the omission later when campaign data was incomplete — with no way to go back.</div>
                  </div>
                </div>
              </div>
              <div style={{ height: '20px' }} />
              <div className="highlight-block">The platform had been built feature-by-feature over time. Nobody had ever stepped back and mapped the whole thing from a user's point of view.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">04 — Content audit</div>
              <div className="cs-section-title">Mapping the full information architecture</div>
              <div className="cs-section-subtitle">Every page, every screen, every navigation path — documented. 18 unique pages, 50+ screens, many with confusingly similar names.</div>
              <div className="img-placeholder aspect-screen">
                <div className="img-ph-inner">
                  <span className="img-ph-icon">🗂</span>
                  <div className="img-ph-desc">Full IA map — 18 pages, 50+ screens, all navigation paths</div>
                </div>
              </div>
              <div className="img-caption">Full content inventory — every page and screen mapped across all four navigation sections.</div>
              <div className="scan-divider" />
              <div className="sub-label">Key IA problems found</div>
              <ul className="scan-list">
                <li>4 functions with near-identical names: Upload Plan, Upload Sites, Plan City Localities, Plan My Campaign</li>
                <li>Dashboard and My Campaigns were the same page — a duplicated nav entry</li>
                <li>City Segment, City Analytics, TG Analytics grouped separately from campaign planning despite being used together</li>
                <li>User Permissions had no back navigation — only escape was the browser back button</li>
                <li>No universal search anywhere in the platform</li>
                <li>Going backwards in any multi-step process reset all selections to Step 1</li>
              </ul>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">05 — Key decisions</div>
              <div className="cs-section-title">What I changed and why</div>
              <div className="decision-cards">
                <div className="dc">
                  <div className="dc-head">Why I restructured navigation around user priority, not feature order</div>
                  <div className="dc-row"><span className="dc-tag tag-found">Found</span><span className="dc-text">Plan My Campaign — most-used daily function — buried in 3rd–4th nav position, surrounded by similar-sounding features</span></div>
                  <div className="dc-row"><span className="dc-tag tag-rejected">Rejected</span><span className="dc-text">Keeping existing nav order — organised around development history, not user mental models</span></div>
                  <div className="dc-row"><span className="dc-tag tag-chose">Chose</span><span className="dc-text">Surfaced Plan My Campaign as primary nav item, grouped analytics functions together, renamed ambiguous functions with clear labels</span></div>
                  <div className="dc-story"><p>The IA was organised by when features were built, not by how users moved through the product. <strong>Navigation should reflect user priority, not development history.</strong></p></div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I replaced donut graphs with bar graphs across the platform</div>
                  <div className="dc-row"><span className="dc-tag tag-found">Found</span><span className="dc-text">4/4 users independently flagged donut charts — values only visible on hover, impossible to compare visually</span></div>
                  <div className="dc-row"><span className="dc-tag tag-rejected">Rejected</span><span className="dc-text">Keeping donut charts — aesthetically common but functionally weak for comparison tasks</span></div>
                  <div className="dc-row"><span className="dc-tag tag-chose">Chose</span><span className="dc-text">Bar graphs — values visible without interaction, segments directly comparable at a glance</span></div>
                  <div className="dc-story"><p>Every user brought up the charts unprompted. They looked like a dashboard — they didn't function like one. <strong>Media planners compare numbers, they don't admire visuals.</strong></p></div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I added progressive disclosure to all multi-step flows</div>
                  <div className="dc-row"><span className="dc-tag tag-found">Found</span><span className="dc-text">Going backwards in any multi-step process erased all selections — reset to Step 1 every time</span></div>
                  <div className="dc-row"><span className="dc-tag tag-chose">Chose</span><span className="dc-text">Visible step indicators, persistent back navigation, draft-saving, confirmation before destructive actions</span></div>
                  <div className="dc-story"><p>In a tool where a single flow involves selecting hundreds of sites across multiple cities, losing everything on a back click was a serious daily frustration. <strong>The redesign treated multi-step flows as journeys — with the ability to go backwards, save progress, and recover.</strong></p></div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I kept the redesign conservative — improving, not reinventing</div>
                  <div className="dc-row"><span className="dc-tag tag-found">Constraint</span><span className="dc-text">Existing users worked in the platform 2–4 hours daily — a dramatic visual change would disrupt learned workflows</span></div>
                  <div className="dc-row"><span className="dc-tag tag-chose">Chose</span><span className="dc-text">Preserved familiar layout patterns — fixed IA, navigation, feedback, and data visualisation without changing what users already knew</span></div>
                  <div className="dc-story"><p>A radical redesign would have been the wrong call — not out of aesthetic conservatism, but because the platform had daily users with real muscle memory. <strong>The goal was to make it better without making it unfamiliar.</strong></p></div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">06 — Lo-fi wireframes</div>
              <div className="cs-section-title">The redesign, ready for testing</div>
              <div className="cs-section-subtitle">Full lo-fi prototype built across all major flows — ready for a moderated usability study with 3–5 participants. The project closed before testing began.</div>

              <div className="img-placeholder aspect-screen">
                <div className="img-ph-inner">
                  <span className="img-ph-icon">📐</span>
                  <div className="img-ph-desc">All major redesigned flows — dashboard, campaign flow, analytics, navigation</div>
                </div>
              </div>
              <div className="img-caption">Lo-fi redesign — restructured navigation, renamed functions, bar graphs replacing donuts, back navigation throughout.</div>
              <div className="img-gap" />
              <div className="img-placeholder aspect-wide">
                <div className="img-ph-inner">
                  <span className="img-ph-icon">↔️</span>
                  <div className="img-ph-desc">Original SHARP (left) vs lo-fi redesign (right)</div>
                </div>
              </div>
              <div className="img-caption">Before: original SHARP interface. After: lo-fi redesign with restructured IA, bar graphs, and step indicators.</div>
              <div className="scan-divider" />
              <div className="sub-label">What the usability test would have measured</div>
              <ul className="scan-list">
                <li>Time on task: how long to create a plan or campaign through each redesigned flow</li>
                <li>Error rate: how often users got stuck across each flow</li>
                <li>System Usability Scale questionnaire — all 5 participants post-session</li>
                <li>3 focused prompts: Plan My Campaign, Upload Plan, City Segment</li>
              </ul>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">07 — What happened</div>
              <div className="cs-section-title">The project closed before testing</div>
              <div className="cs-section-subtitle">The lo-fi prototype was complete and the usability study plan was written. The project was shut down for business reasons before a single session ran.</div>
              <div className="testing-grid-3">
                <div className="testing-col">
                  <div className="testing-col-label">What was completed</div>
                  <ul className="scan-list">
                    <li>User interviews — 4 participants, empathy maps</li>
                    <li>Content audit — full IA, 18 pages</li>
                    <li>Heuristic evaluation — 24 violations across 10 heuristics</li>
                    <li>Lo-fi wireframes — all major flows</li>
                    <li>Usability study plan — written, ready to execute</li>
                  </ul>
                </div>
                <div className="testing-col">
                  <div className="testing-col-label">What was planned but didn't happen</div>
                  <ul className="scan-list">
                    <li>Moderated usability testing with 3–5 participants</li>
                    <li>Iteration based on test findings</li>
                    <li>Hi-fi prototype with colour, icons, typography</li>
                    <li>Developer handoff</li>
                  </ul>
                </div>
                <div className="testing-col">
                  <div className="testing-col-label">Why it closed</div>
                  <ul className="scan-list">
                    <li>Business decision — not a design quality issue</li>
                    <li>Research and lo-fi work were complete and documented</li>
                    <li>The direction was right. The timing wasn't.</li>
                  </ul>
                </div>
              </div>
              <div className="highlight-block">A project being shut down for business reasons is not the same as a project failing for design reasons. The work was done. The findings were real. The prototype was ready.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">08 — Reflection & foresight</div>
              <div className="cs-section-title">What I'd do differently</div>
              <div className="foresight-grid">
                <div className="foresight-card">
                  <div className="foresight-label">What this project taught me</div>
                  <div className="foresight-text">Enterprise UX is not about making things look better — it's about understanding deeply embedded user behaviours. Internal users had adapted so completely to the existing system that the real friction was almost invisible. I had to watch them work to find it.</div>
                </div>
                <div className="foresight-card">
                  <div className="foresight-label">What I'd do differently</div>
                  <div className="foresight-text">Build the business case for the redesign at the research findings stage — not the prototype stage. Translating the severity-4 violations into commercial risk language would have resonated differently with the stakeholders who made the decision to close.</div>
                </div>
              </div>
              <div className="body-text" style={{ marginTop: '20px' }}>Heuristic evaluation changed how I think about audit work. Rating every violation on a severity scale forced me to prioritise ruthlessly — a usability catastrophe is categorically different from a cosmetic problem. <strong>If I did this again:</strong> stronger business case at the research stage, commercial risk language instead of UX problem language.</div>
              <div className="highlight-block">The most important skill in enterprise UX isn't designing better interfaces. It's making the invisible friction visible to people who've stopped noticing it.</div>
            </div>
          </>
        )}

        {/* NEXT PROJECT (shared) */}
        <Link className="next-project" to="/">
          <div>
            <div className="next-label">Back to homepage</div>
            <div className="next-title">View all projects</div>
            <div className="next-cta-hint">See all case studies →</div>
          </div>
          <div className="next-arrow">↑</div>
        </Link>
      </main>
    </div>
  );
};

export default SharpCaseStudy;

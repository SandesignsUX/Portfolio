import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/caseStudy.css';
import { CaseStudyImage } from '../../components/case-study/CaseStudyImage';

const VenyaCaseStudy = () => {
  return (
    <div className="venya-case-study">
      {/* GLOBAL NAV */}
      <nav className="global-nav" aria-label="Site navigation">
        <Link className="nav-logo" to="/">
          Sandeep <span>Pawar</span>
        </Link>
        <Link className="nav-back" to="/">
          ← Back to work
        </Link>
      </nav>

      <main id="main-content" className="page-content">
        {/* HERO */}
        <div className="cs-hero">
          <div className="cs-hero-tag">UI Design · Luxury · PropTech · Mobile</div>
          <h1 className="cs-hero-title">Venya — Luxury Villa Booking App</h1>
          
          <div className="cs-hero-meta">
            <div className="cs-meta-item">
              <span className="cs-meta-label">Role</span>
              <span className="cs-meta-value">Sole UI Designer</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Client</span>
              <span className="cs-meta-value">Equity Address</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Platform</span>
              <span className="cs-meta-value">iOS & Android</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline</span>
              <span className="cs-meta-value">3 weeks · 2024</span>
            </div>
          </div>

          <div className="cs-hero-constraint-row">
            <span className="cs-constraint">No design system</span>
            <span className="cs-constraint">No direct user access</span>
            <span className="cs-constraint">3-week brief-to-handoff</span>
            <span className="cs-constraint">Complex investment-linked payments</span>
          </div>

          <CaseStudyImage
            aspectClass="aspect-hero"
            placeholderIcon="🖼"
            placeholderText="Venya_Hero.jpg · Luxury villa booking app for Equity Address investors (1600 × 700)"
          />
          <div className="img-caption">
            Venya — A high-end mobile booking experience for luxury villa investors.
          </div>
        </div>

        {/* 01: CONTEXT & BACKGROUND */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">01 — Context & Background</div>
          <h2 className="cs-section-title">A luxury investment firm with a phone-only booking process</h2>
          
          <p className="body-text">
            Equity Address is a luxury real estate investment firm. Their investors own high-value villas and earn rental income from them — income they can put toward booking stays at those same properties.
          </p>
          <p className="body-text">
            The entire booking process happened over the phone. No app, no self-serve access, no paper trail.
          </p>

          <div className="sub-label">Working constraints</div>
          <ul className="scan-list">
            <li>No design system</li>
            <li>No direct user access — founders were the only source of insight</li>
            <li>3-week brief-to-handoff timeline</li>
          </ul>
        </section>

        {/* 02: WHAT WAS BROKEN */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">02 — The Problem</div>
          <h2 className="cs-section-title">What Was Broken</h2>
          
          <div className="sub-label">The phone-based process looked like this</div>
          <div className="flow-diagram-box">
            <div className="flow-diagram-steps">
              <span className="flow-step-node">Investor calls</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step-node">Agent checks availability</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step-node">Agent calls back with pricing</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step-node">Payment structure explained verbally</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step-node">Manual booking confirmation</span>
            </div>
          </div>

          <div className="sub-label">Three friction points defined the problem</div>
          <div className="decision-cards" style={{ marginTop: '12px' }}>
            <div className="dc">
              <div className="dc-head">1. No visibility</div>
              <div className="dc-row">
                <span className="dc-text">Investors couldn't check availability or pricing without calling.</span>
              </div>
            </div>
            <div className="dc">
              <div className="dc-head">2. Payment confusion</div>
              <div className="dc-row">
                <span className="dc-text">Rental income deductions, price differences, and payment methods were explained differently each time, verbally, with nothing documented.</span>
              </div>
            </div>
            <div className="dc">
              <div className="dc-head">3. Experience mismatch</div>
              <div className="dc-row">
                <span className="dc-text">The process felt cheap for a luxury real estate product.</span>
              </div>
            </div>
          </div>

          <div className="highlight-block" style={{ marginTop: '24px' }}>
            The core design challenge wasn't &ldquo;build a booking app.&rdquo; It was: <strong>make a genuinely complex payment structure feel effortless, inside a UI that matches what investors paid for.</strong>
          </div>
        </section>

        {/* 03: GOALS & SUCCESS METRICS */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">03 — Goals & Success Metrics</div>
          <h2 className="cs-section-title">Setting Clear Target Outcomes</h2>

          <div className="sub-label">Goals</div>
          <ul className="scan-list" style={{ marginBottom: '24px' }}>
            <li>Replace the phone booking process with a self-serve digital experience</li>
            <li>Make the investment-linked payment logic clear — without making it feel like a financial transaction</li>
            <li>Deliver a UI that signals premium quality from the first screen</li>
          </ul>

          <div className="sub-label">Success indicators <span style={{ textTransform: 'none', fontWeight: 300, color: 'var(--cream-55)' }}>(defined upfront; no post-launch tracking was in scope)</span></div>
          <div className="phase-row-scan" style={{ marginTop: '12px' }}>
            <div className="phase-card-scan">
              <div className="phase-num-scan">01</div>
              <div className="phase-title-scan">Self-Serve Flow</div>
              <div className="phase-desc-scan">Booking flow completable end-to-end without needing a support call.</div>
            </div>
            <div className="phase-card-scan">
              <div className="phase-num-scan">02</div>
              <div className="phase-title-scan">Payment Clarity</div>
              <div className="phase-desc-scan">Payment breakdown approved by founders as solving the confusion investors had on calls.</div>
            </div>
            <div className="phase-card-scan">
              <div className="phase-num-scan">03</div>
              <div className="phase-title-scan">On-Time Delivery</div>
              <div className="phase-desc-scan">Strict handoff within the fixed 3-week project scope.</div>
            </div>
          </div>
        </section>

        {/* 04: RESEARCH & AUDIT */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">04 — Research & Audit</div>
          <h2 className="cs-section-title">Understanding the Audience & Mental Models</h2>

          <p className="body-text">
            <strong>Source of insight:</strong> Daily Zoom calls with founders. No direct user access — all persona knowledge came through founder interpretation of their investor base.
          </p>

          <div className="sub-label">Three things the founder interviews made clear</div>
          <div className="cs-table-wrap">
            <table className="cs-table">
              <thead>
                <tr>
                  <th style={{ width: '45%' }}>Insight</th>
                  <th>Implication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Payment confusion</strong> was the #1 friction point on investor calls</td>
                  <td>Needed dedicated UI treatment — not an afterthought in the flow</td>
                </tr>
                <tr>
                  <td><strong>First impressions</strong> were non-negotiable for this audience</td>
                  <td>Visual quality had to signal premium from screen one</td>
                </tr>
                <tr>
                  <td>Users are <strong>app-comfortable but not tech-enthusiasts</strong></td>
                  <td>Familiar patterns over clever ones — they'd abandon before they'd troubleshoot</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="sub-label">Competitive benchmarking</div>
          <div className="cs-table-wrap">
            <table className="cs-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Reference</th>
                  <th>What I studied</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Airbnb</strong></td>
                  <td>Booking flows — search, date selection, confirmation patterns</td>
                </tr>
                <tr>
                  <td><strong>MakeMyTrip</strong></td>
                  <td>Property presentation — details, amenities, pricing display</td>
                </tr>
                <tr>
                  <td><strong>Shopify Polaris</strong></td>
                  <td>UI consistency — form and input patterns</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="body-text">
            These weren't mood board references. They were mental models the audience already had — which made them a design tool.
          </p>

          <div className="highlight-block" style={{ marginTop: '16px' }}>
            <strong>Limitation worth naming:</strong> All research came through founders. They know their product deeply, but they interpret user needs through their own lens. Every decision was validated by logic and reference, not observed behaviour.
          </div>
        </section>

        {/* 05: DESIGN PRINCIPLES */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">05 — Design Principles</div>
          <h2 className="cs-section-title">Guiding Every UI Decision</h2>

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-num-title">1. Familiarity reduces friction</div>
              <div className="principle-desc">
                For a non-tech audience making high-stakes decisions, recognizable patterns outperform novel ones. The audience shouldn't have to learn the interface.
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-num-title">2. Restraint signals luxury</div>
              <div className="principle-desc">
                Premium feel comes from what's not on screen. Generous space, strong imagery, minimal text — every element earns its place.
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-num-title">3. Progressive disclosure over information dump</div>
              <div className="principle-desc">
                Surface only what's relevant at each step. The UI makes the decision — not the user.
              </div>
            </div>
          </div>
        </section>

        {/* 06: THE DESIGN PROCESS */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">06 — The Design Process</div>
          <h2 className="cs-section-title">From Anchor Screens to Frictionless Payment</h2>

          <div className="sub-label">Anchor decision: design the property details page first</div>
          <p className="body-text">
            Every flow in the app leads to or comes from the property details page. This is where investors decide — which villa, which dates, what it costs, how payment works.
          </p>
          <p className="body-text">
            Designing this screen first meant every other screen had a clear reference point.
          </p>

          <div className="flow-diagram-box">
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cream-55)', marginBottom: '8px' }}>
              Decision Sequence
            </div>
            <div className="flow-diagram-steps">
              <span className="flow-step-node">Imagery</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step-node">Amenities</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step-node">Pricing</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step-node">Payment options</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--cream-70)', marginTop: '8px' }}>
              Each section scannable at a glance, with detail on demand.
            </div>
          </div>

          <div style={{ marginTop: '16px', marginBottom: '28px' }}>
            <CaseStudyImage
              aspectClass="aspect-wide"
              placeholderIcon="🏠"
              placeholderText="Venya_PropertyDetail.jpg · The core screen — imagery, amenities, pricing, payment options"
            />
            <div className="img-caption">
              The property details page was the anchor of the entire design. Imagery comes first to establish premium feel.
            </div>
          </div>

          <div className="scan-divider" />

          <div className="sub-label">Payment flow: step-by-step, not all at once</div>
          <p className="body-text">
            The payment logic: investors apply their rental income balance to the booking. If the villa costs more than their balance, they pay the difference via cash, cheque, or bank transfer.
          </p>
          <p className="body-text">
            Showing all of this at once would recreate the confusion on calls. The solution was a three-step flow that surfaced only what was relevant at each moment:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '14px', marginBottom: '14px' }}>
            <div className="principle-card" style={{ padding: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--amber)', textTransform: 'uppercase', marginBottom: '4px' }}>Step 1</div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--cream)' }}>Rental income balance shown</div>
            </div>
            <div className="principle-card" style={{ padding: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--amber)', textTransform: 'uppercase', marginBottom: '4px' }}>Step 2</div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--cream)' }}>Price breakdown: deduction applied + difference owed</div>
            </div>
            <div className="principle-card" style={{ padding: '14px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--amber)', textTransform: 'uppercase', marginBottom: '4px' }}>Step 3</div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--cream)' }}>Payment method for difference only (cash / cheque / bank transfer)</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '16px', marginBottom: '24px' }}>
            <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="💰" placeholderText="Venya_Payment_1.jpg · Step 1 — Rental income balance shown" />
            <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="🔢" placeholderText="Venya_Payment_2.jpg · Step 2 — Deduction + difference shown" />
            <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="💳" placeholderText="Venya_Payment_3.jpg · Step 3 — Payment methods for difference" />
          </div>
          <div className="img-caption">
            The investor never sees the full complexity at once. Each step answers one question before moving to the next.
          </div>

          <div className="scan-divider" />

          <div className="sub-label">Iteration</div>
          <p className="body-text">
            First draft delivered in week one. Two to three rounds of feedback through daily founder Zoom calls. The payment breakdown went through the most iterations — finding the balance between financial clarity and luxury feel took time. That tension was real.
          </p>
        </section>

        {/* 07: BEFORE VS AFTER */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">07 — Before vs After</div>
          <h2 className="cs-section-title">A Transformed Investor Experience</h2>

          <div className="before-after-grid">
            <div className="before-after-card before">
              <span className="before-after-tag">Before — Phone-based process</span>
              <div className="flow-diagram-steps" style={{ gap: '6px' }}>
                <span className="flow-step-node">Call</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Availability check</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Callback</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Verbal price quote</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Payment explained verbally</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Manual confirmation</span>
              </div>
            </div>

            <div className="before-after-card after">
              <span className="before-after-tag">After — App flow</span>
              <div className="flow-diagram-steps" style={{ gap: '6px' }}>
                <span className="flow-step-node">Browse listings</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Select villa</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Pick dates</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Rental income auto-applied</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Step-by-step payment</span>
                <span className="flow-arrow">→</span>
                <span className="flow-step-node">Instant confirmation</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <CaseStudyImage
              aspectClass="aspect-wide"
              placeholderIcon="📲"
              placeholderText="Screen comparisons to be added — onboarding, listing, property detail, payment flow, confirmation"
            />
            <div className="img-caption">
              Screen comparisons — Onboarding, villa listings, property detail, payment flow, and instant confirmation.
            </div>
          </div>
        </section>

        {/* 08: OUTCOME */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">08 — Outcome</div>
          <h2 className="cs-section-title">What the Project Delivered</h2>
          <div className="cs-section-subtitle">
            No post-launch metrics — I wasn't embedded with the client after handoff and post-launch tracking wasn't part of the scope.
          </div>

          <div className="phase-row-scan" style={{ marginTop: '16px', marginBottom: '24px' }}>
            <div className="phase-card-scan">
              <div className="phase-num-scan" style={{ color: 'var(--amber)' }}>3 wks</div>
              <div className="phase-title-scan">Delivered on Time</div>
              <div className="phase-desc-scan">3 weeks in, 3 weeks out. No scope creep. Brief-to-handoff executed on schedule.</div>
            </div>
            <div className="phase-card-scan">
              <div className="phase-num-scan" style={{ color: 'var(--amber)' }}>✓</div>
              <div className="phase-title-scan">Built & Deployed</div>
              <div className="phase-desc-scan">App was built and deployed — the manual phone-based process was completely replaced.</div>
            </div>
            <div className="phase-card-scan">
              <div className="phase-num-scan" style={{ color: 'var(--amber)' }}>✓</div>
              <div className="phase-title-scan">Founder Approved</div>
              <div className="phase-desc-scan">Payment flow specifically called out as solving the confusion investors had on calls. No rounds of rejection.</div>
            </div>
          </div>
        </section>

        {/* 09: LEARNINGS */}
        <section className="cs-section">
          <div className="cs-section-eyebrow">09 — Learnings</div>
          <h2 className="cs-section-title">Key Takeaways & Reflection</h2>

          <div className="learnings-list">
            <div className="learning-item">
              <div className="learning-title">1. Name your constraints — don't hide them</div>
              <div className="learning-body">
                Designing without user access is a real limitation. Working around it deliberately and being transparent about it builds more credibility than pretending it didn't exist.
              </div>
            </div>
            <div className="learning-item">
              <div className="learning-title">2. Understand the logic before touching the UI</div>
              <div className="learning-body">
                The payment structure took real time to understand. The UI clarity came from that understanding — not from the design patterns.
              </div>
            </div>
            <div className="learning-item">
              <div className="learning-title">3. A token system is worth half a day even on a 3-week timeline</div>
              <div className="learning-body">
                Working without a design system introduced minor inconsistencies that had to be cleaned up manually in later rounds. Even a minimal token setup would have paid back.
              </div>
            </div>
          </div>
        </section>

        {/* NEXT PROJECT / HOME LINK */}
        <Link className="next-project" to="/">
          <div>
            <div className="next-label">Back to portfolio</div>
            <div className="next-title">View all projects</div>
            <div className="next-cta-hint">Explore other case studies →</div>
          </div>
          <div className="next-arrow">↑</div>
        </Link>
      </main>
    </div>
  );
};

export default VenyaCaseStudy;

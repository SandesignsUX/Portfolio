import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/caseStudy.css';
import { CaseStudyImage } from '../../components/case-study/CaseStudyImage';

const VenyaCaseStudy = () => {
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
    <div className="venya-case-study">
      <nav className="global-nav" aria-label="Site navigation">
        <Link className="nav-logo" to="/">
          Sandeep <span>Pawar</span>
        </Link>
        <Link className="nav-back" to="/">
          ← Back to work
        </Link>
      </nav>

      <div className="cs-bar" role="region" aria-label="Case study reading mode">
        <div className="cs-bar-left">
          <span className="cs-bar-label">VENYA</span>
        </div>

        <div className="cs-bar-centre">
          <div className="cs-toggle" role="tablist" aria-label="Choose how to read this case study">
            <button
              type="button"
              role="tab"
              id="tab-scan"
              aria-selected={mode === 'scan'}
              aria-controls="case-study-panel"
              className={`toggle-btn ${mode === 'scan' ? 'active' : ''} ${justSwitched === 'scan' ? 'just-switched' : ''}`}
              onClick={() => handleModeChange('scan')}
            >
              Recruiter Scan Mode
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
              Full Story
            </button>
          </div>
          <p className={`toggle-hint ${showToggleHint ? '' : 'is-hidden'}`} aria-live="polite">
            Choose how you want to read this case study.
          </p>
          <div className="toggle-subtitle">
            {mode === 'scan' ? 'The quick version' : 'The full process story'}
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
          <div className="cs-hero-tag">UI Craft · Luxury · PropTech · Mobile</div>
          <div className="cs-hero-title">Luxury villa <span>booking</span><br/>for investors</div>
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
              <span className="cs-meta-value">iOS · Android</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Timeline</span>
              <span className="cs-meta-value">3 weeks · 2024</span>
            </div>
            <div className="cs-meta-item">
              <span className="cs-meta-label">Users</span>
              <span className="cs-meta-value">Investors aged 25–60</span>
            </div>
          </div>
          <div className="cs-hero-constraint-row">
            <span className="cs-constraint">No direct user access</span>
            <span className="cs-constraint">No existing design system</span>
            <span className="cs-constraint">3-week timeline</span>
            <span className="cs-constraint">Complex investment-linked payments</span>
            <span className="cs-constraint">High-stakes luxury audience</span>
          </div>

          <CaseStudyImage aspectClass="aspect-hero" placeholderIcon="🖼" placeholderText="Venya_Hero.jpg · Full-width project banner (1600 × 700)" />
          
          {mode === 'scan' ? (
            <div className="img-caption">Venya — Luxury Villa Booking App for Equity Address investors.</div>
          ) : (
            <div className="img-caption">The brief was to digitise a phone-based booking process without losing the premium feel the investors expected from a luxury real estate brand.</div>
          )}
        </div>

        {/* SCAN MODE */}
        {mode === 'scan' && (
          <>
            <div className="cs-section">
              <div className="cs-section-eyebrow">01 — The problem</div>
              <div className="cs-section-title">A luxury product with a broken booking experience</div>
              <div className="cs-section-subtitle">Investors who owned high-value properties had no self-serve way to book or manage their villa stays.</div>
              <div className="problem-statement">
                Equity Address investors needed a way to book luxury villas using their <strong>rental income</strong> — replacing a manual phone-based process with a digital experience that felt <strong>premium, trustworthy, and clear about complex investment-linked payments.</strong>
              </div>
              <div className="sub-label" style={{marginTop: '20px'}}>What the phone-based process caused</div>
              <ul className="scan-list">
                <li>Multiple back-and-forth calls just to check availability and pricing</li>
                <li>No visibility into which properties were available or how rental income applied</li>
                <li>Payment structure — deductions, price differences, payment methods — explained only verbally</li>
                <li>Experience felt mismatched with the premium product investors had paid for</li>
              </ul>
              <div className="scan-divider" />
              <div className="sub-label">The harder design challenge</div>
              <ul className="scan-list">
                <li>Build a UI that feels luxury-grade while making a genuinely complex payment structure feel effortless</li>
                <li>Users aged 25–60 — app-comfortable but not tech-enthusiasts — would notice immediately if anything felt off</li>
              </ul>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">02 — User & context</div>
              <div className="cs-section-title">Who we designed for</div>
              <div className="cs-section-subtitle">No direct user access — all insight came through the founders. The persona was built from founder interviews and knowledge of their investor base.</div>

              <div className="persona-card" style={{marginTop: '24px'}}>
                <div className="persona-head">
                  <div className="persona-avatar">R</div>
                  <div>
                    <div className="persona-name">Rajesh Malhotra</div>
                    <div className="persona-title">Managing Director · 47 · Mumbai · Moderate tech proficiency</div>
                  </div>
                </div>
                <div className="persona-quote">
                  "I just want to book a villa without calling back and forth or trying to figure out how my rental income actually applies to the payment."
                </div>
                <div className="persona-body" style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                  <div className="persona-col" style={{padding: '16px 20px', borderRight: '1px solid var(--border)'}}>
                    <div className="persona-col-label" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '10px'}}>Goals</div>
                    <div className="persona-item" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', paddingLeft: '12px', position: 'relative', marginBottom: '4px'}}>– Book villas using rental income without confusion</div>
                    <div className="persona-item" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', paddingLeft: '12px', position: 'relative', marginBottom: '4px'}}>– Compare properties quickly based on dates and preferences</div>
                    <div className="persona-item" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', paddingLeft: '12px', position: 'relative', marginBottom: '4px'}}>– Understand pricing and payment breakdown clearly</div>
                  </div>
                  <div className="persona-col" style={{padding: '16px 20px'}}>
                    <div className="persona-col-label" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '10px'}}>Frustrations</div>
                    <div className="persona-item" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', paddingLeft: '12px', position: 'relative', marginBottom: '4px'}}>– Phone-based booking is slow with too many follow-up calls</div>
                    <div className="persona-item" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', paddingLeft: '12px', position: 'relative', marginBottom: '4px'}}>– Complex payment structure isn't explained anywhere</div>
                    <div className="persona-item" style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', paddingLeft: '12px', position: 'relative', marginBottom: '4px'}}>– No visibility into availability without calling</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">03 — Design approach</div>
              <div className="cs-section-title">Building on what investors already knew</div>
              <div className="sub-label" style={{marginTop: '20px'}}>Reference systems used</div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '8px'}}>
                <div style={{border: '1px solid var(--border)', borderRadius: '14px', padding: '16px 18px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--cream)', marginBottom: '4px'}}>Airbnb</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '6px'}}>Booking flows</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)'}}>Property search, date selection, and booking confirmation patterns.</div>
                </div>
                <div style={{border: '1px solid var(--border)', borderRadius: '14px', padding: '16px 18px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--cream)', marginBottom: '4px'}}>MakeMyTrip</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '6px'}}>Property presentation</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)'}}>How to display details, amenities, and pricing in a trustworthy way.</div>
                </div>
                <div style={{border: '1px solid var(--border)', borderRadius: '14px', padding: '16px 18px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--cream)', marginBottom: '4px'}}>Shopify Polaris</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '6px'}}>UI consistency</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)'}}>Component patterns for forms, inputs, and data display.</div>
                </div>
              </div>
              <div className="scan-divider" />
              <div className="sub-label">App overview — key screens</div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="📱" placeholderText="Venya_Onboarding.jpg · Splash, login, property listing screens" />
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="🏡" placeholderText="Venya_Listing.jpg · Property cards with imagery, pricing, availability" />
              </div>
              <div className="img-caption">Familiar booking patterns — property listing and search flow built on Airbnb and MakeMyTrip mental models.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">04 — Key decisions</div>
              <div className="cs-section-title">What I chose and why</div>
              
              <div className="decision-cards">
                <div className="dc">
                  <div className="dc-head">Why I designed the property details page first</div>
                  <div style={{padding: '0'}}>
                    <div className="dc-row"><span className="dc-tag tag-found">Found</span><span className="dc-text">Every flow in the app either leads to or comes from the property details page — this is where high-value booking decisions happen</span></div>
                    <div className="dc-row"><span className="dc-tag tag-chose">Chose</span><span className="dc-text">Designed the property details page first, then built all other flows around it — imagery → amenities → pricing → payment options</span></div>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I used reference systems instead of designing from scratch</div>
                  <div style={{padding: '0'}}>
                    <div className="dc-row"><span className="dc-tag tag-found">Constraint</span><span className="dc-text">No design system, 3-week timeline, non-tech-enthusiast users who value clarity over novelty</span></div>
                    <div className="dc-row"><span className="dc-tag tag-rejected">Rejected</span><span className="dc-text">Novel UI patterns — would have introduced unfamiliar interactions for an audience that needs to trust the interface immediately</span></div>
                    <div className="dc-row"><span className="dc-tag tag-chose">Chose</span><span className="dc-text">Airbnb + MakeMyTrip for booking flows, Shopify Polaris for UI consistency — built trust through recognition, not novelty</span></div>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I broke the payment flow into a step-by-step structure</div>
                  <div style={{padding: '0'}}>
                    <div className="dc-row"><span className="dc-tag tag-found">Found</span><span className="dc-text">Payment logic — rental deductions, price differences, multiple payment methods — was the biggest source of confusion on investor calls</span></div>
                    <div className="dc-row"><span className="dc-tag tag-rejected">Rejected</span><span className="dc-text">Showing all payment options at once — would have overwhelmed users unfamiliar with the investment-linked structure</span></div>
                    <div className="dc-row"><span className="dc-tag tag-chose">Chose</span><span className="dc-text">Step-by-step flow — surfaced only the relevant payment option based on the investor's portfolio balance</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">05 — Screens & design</div>
              <div className="cs-section-title">The core flows</div>
              
              <div className="sub-label" style={{marginTop: '20px'}}>Property details page — the most important screen</div>
              <div style={{marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="🏠" placeholderText="Venya_PropertyDetail.jpg · The core screen — imagery, amenities, pricing, payment options" />
              </div>
              <div className="img-caption">Property details — imagery → amenities → pricing → payment options. Designed first, everything else built around it.</div>

              <div style={{height: '16px'}}></div>

              <div className="sub-label">Payment flow — step by step</div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="💰" placeholderText="Venya_Payment_1.jpg · Step 1 — Rental income balance shown" />
                <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="🔢" placeholderText="Venya_Payment_2.jpg · Step 2 — Deduction + difference shown" />
                <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="💳" placeholderText="Venya_Payment_3.jpg · Step 3 — Cash / cheque / bank transfer options" />
              </div>
              <div className="img-caption">Payment flow — 3 steps: rental balance → price breakdown → payment method. Only the relevant option shown at each step.</div>

              <div style={{height: '16px'}}></div>

              <div className="sub-label">Full screen overview</div>
              <div style={{marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="📲" placeholderText="Venya_AllScreens.jpg · Complete screen collage — all primary flows" />
              </div>
              <div className="img-caption">All primary screens — property listing, detail, payment flow, booking confirmation, and profile.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">06 — Iteration & refinement</div>
              <div className="cs-section-title">Three weeks, three rounds</div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '20px'}}>
                <div style={{border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', background: 'var(--bg-card)'}}>
                  <div className="sub-label" style={{marginBottom: '12px', marginTop: '0'}}>How we iterated</div>
                  <ul className="scan-list">
                    <li>1-week first draft delivered to founders</li>
                    <li>2–3 rounds based on daily Zoom feedback</li>
                    <li>No formal usability testing — founders as proxies</li>
                  </ul>
                </div>
                <div style={{border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', background: 'var(--bg-card)'}}>
                  <div className="sub-label" style={{marginBottom: '12px', marginTop: '0'}}>What changed</div>
                  <ul className="scan-list">
                    <li>Payment breakdown refined — rental deductions made clearer</li>
                    <li>Property details layout adjusted to reduce cognitive load</li>
                    <li>Visual polish to strengthen credibility and trust</li>
                  </ul>
                </div>
                <div style={{border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', background: 'var(--bg-card)'}}>
                  <div className="sub-label" style={{marginBottom: '12px', marginTop: '0'}}>The limitation</div>
                  <ul className="scan-list">
                    <li>All feedback came through founders — no direct investor input</li>
                    <li>Founders interpret user needs through their own lens</li>
                    <li>Design validated by logic and reference, not observed behaviour</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">07 — Outcomes</div>
              <div className="cs-section-title">What it delivered</div>
              <div style={{display: 'flex', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', marginTop: '20px'}}>
                <div style={{flex: 1, padding: '16px 20px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '28px', fontWeight: '700', color: 'var(--amber)', letterSpacing: '-0.04em', lineHeight: '1'}}>3 wks</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '400', color: 'var(--cream-35)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Brief to handoff</div>
                </div>
                <div style={{flex: 1, padding: '16px 20px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '28px', fontWeight: '700', color: 'var(--amber)', letterSpacing: '-0.04em', lineHeight: '1'}}>✓</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '400', color: 'var(--cream-35)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Client approved</div>
                </div>
                <div style={{flex: 1, padding: '16px 20px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '28px', fontWeight: '700', color: 'var(--amber)', letterSpacing: '-0.04em', lineHeight: '1'}}>✓</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '400', color: 'var(--cream-35)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>App built & deployed</div>
                </div>
                <div style={{flex: 1, padding: '16px 20px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '28px', fontWeight: '700', color: 'var(--amber)', letterSpacing: '-0.04em', lineHeight: '1'}}>0</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '400', color: 'var(--cream-35)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Scope creep</div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">08 — Reflection & foresight</div>
              <div className="cs-section-title">Honest reflection</div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px'}}>
                <div style={{border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', background: 'var(--bg-card)'}}>
                  <div className="sub-label" style={{marginBottom: '8px', marginTop: '0'}}>What I'd do differently</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.7'}}>Push for even 2 investor interviews before the first draft. The payment structure was complex enough that founder interpretation had real limits — a single confused investor would have surfaced issues that never came up on calls.</div>
                </div>
                <div style={{border: '1px solid var(--border)', borderRadius: '16px', padding: '20px', background: 'var(--bg-card)'}}>
                  <div className="sub-label" style={{marginBottom: '8px', marginTop: '0'}}>What I'd add with more time</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.7'}}>Build a lightweight design system before touching screens. Working without one slowed iteration rounds and introduced minor inconsistencies that had to be cleaned up manually. The 3-week timeline made this feel impossible — but even a half-day on a token system would have paid back.</div>
                </div>
              </div>

              <div style={{height: '32px'}}></div>
              <div className="sub-label">Key takeaways</div>
              <div className="takeaway-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '10px'}}>
                <div style={{border: '1px solid var(--border)', borderRadius: '14px', padding: '18px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '8px'}}>01</div>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--cream)', letterSpacing: '-0.01em', marginBottom: '6px', lineHeight: '1.3'}}>Design systems accelerate quality</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.6'}}>Using Polaris alongside Airbnb and MakeMyTrip patterns meant moving fast without sacrificing polish — even without a custom system.</div>
                </div>
                <div style={{border: '1px solid var(--border)', borderRadius: '14px', padding: '18px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '8px'}}>02</div>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--cream)', letterSpacing: '-0.01em', marginBottom: '6px', lineHeight: '1.3'}}>Simplifying complexity is a design skill</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.6'}}>Breaking investment-linked payments into digestible UI required deep collaboration with the founders. Understanding the logic came first. UI came second.</div>
                </div>
                <div style={{border: '1px solid var(--border)', borderRadius: '14px', padding: '18px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '8px'}}>03</div>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--cream)', letterSpacing: '-0.01em', marginBottom: '6px', lineHeight: '1.3'}}>Premium doesn't mean complicated</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.6'}}>The luxury market expects polish — but users still need simplicity. The core challenge was holding both at the same time without compromising either.</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* DEEP DIVE MODE */}
        {mode === 'dive' && (
          <>
            <div className="cs-section">
              <div className="cs-section-eyebrow">01 — The problem</div>
              <div className="cs-section-title">A luxury product with a broken booking experience</div>
              <div className="cs-section-subtitle">Investors who owned high-value properties had no self-serve way to book or manage their villa stays.</div>
              <div className="problem-statement">
                Equity Address investors needed a way to book luxury villas using their <strong>rental income</strong> — replacing a manual phone-based process with a digital experience that felt <strong>premium, trustworthy, and clear about complex investment-linked payments.</strong>
              </div>
              <div className="scan-divider" />
              <div className="sub-label">The harder design challenge</div>
              <ul className="scan-list">
                <li>Build a UI that feels luxury-grade while making a genuinely complex payment structure feel effortless</li>
                <li>Users aged 25–60 — app-comfortable but not tech-enthusiasts — would notice immediately if anything felt off</li>
              </ul>
              <div className="highlight-block" style={{display: 'block'}}>The design challenge wasn't just "build a booking app." It was: make a genuinely complex financial structure feel effortless inside a premium UI.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">02 — User & context</div>
              <div className="cs-section-title">Who we designed for</div>
              <div className="cs-section-subtitle">No direct user access — all insight came through the founders. The persona was built from founder interviews and knowledge of their investor base.</div>

              <div className="insight-grid" style={{marginTop: '24px'}}>
                <div className="insight-card">
                  <div className="insight-cat">Founder interview</div>
                  <div className="insight-finding">Payment confusion was the most common friction point on investor calls</div>
                  <span className="insight-source">Daily Zoom calls</span>
                  <div className="insight-expansion" style={{display: 'block'}}>Founders confirmed investors were frequently confused about how their rental income balance applied, what the price difference meant, and which payment method to use. This confusion lived in phone conversations — nowhere in the current process was it documented or explained.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">Founder interview</div>
                  <div className="insight-finding">First impressions were non-negotiable — the UI had to signal premium quality immediately</div>
                  <span className="insight-source">Client brief</span>
                  <div className="insight-expansion" style={{display: 'block'}}>The investors had made significant property purchases. A UI that felt cheap or generic would immediately damage trust. The founders were explicit: the app had to feel like the brand. This shaped every visual decision from typography to spacing to imagery.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">Constraint</div>
                  <div className="insight-finding">Founders were the only source of user insight — no direct investor access</div>
                  <span className="insight-source">Project constraint</span>
                  <div className="insight-expansion" style={{display: 'block'}}>All design decisions were validated through founders, not users. This is a real limitation. Founders know their product deeply — but they interpret user needs through their own lens. It was a constraint worth naming, not hiding.</div>
                </div>
                <div className="insight-card">
                  <div className="insight-cat">Payment logic</div>
                  <div className="insight-finding">Investors could use rental income, but price differences required additional payment methods</div>
                  <span className="insight-source">Founder briefing</span>
                  <div className="insight-expansion" style={{display: 'block'}}>If an investor chose a villa that cost more than their rental balance, they had to cover the difference via cash, cheque, or bank transfer. This wasn't simple — it needed its own dedicated UI treatment, not an afterthought in the booking flow.</div>
                </div>
              </div>
              <div className="highlight-block" style={{display: 'block'}}>Founders know their product deeply — but they're not their users. Every decision was made on logic and reference, not observed behaviour. That's a constraint worth naming honestly.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">03 — Design approach</div>
              <div className="cs-section-title">Building on what investors already knew</div>
              <div className="cs-section-subtitle">With no design system and a 3-week timeline, I built on established mental models rather than inventing new ones.</div>
              
              <div className="sub-label" style={{marginTop: '20px'}}>App overview — key screens</div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="📱" placeholderText="Venya_Onboarding.jpg · Splash, login, property listing screens" />
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="🏡" placeholderText="Venya_Listing.jpg · Property cards with imagery, pricing, availability" />
              </div>
              <div className="img-caption">Familiarity was a feature, not a shortcut. For a non-tech-enthusiast audience making high-value decisions, recognisable patterns lower cognitive load at exactly the moment it matters most.</div>
              <div className="highlight-block" style={{display: 'block'}}>Familiarity was a feature, not a shortcut. For an audience that values clarity over cleverness, recognisable patterns reduce cognitive load at the moment decisions are made.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">04 — Key decisions</div>
              <div className="cs-section-title">What I chose and why</div>
              
              <div className="decision-cards">
                <div className="dc">
                  <div className="dc-head">Why I designed the property details page first</div>
                  <div style={{padding: '16px 20px'}}>
                    <p style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>Every screen in the app either leads to or comes from the property details page. This is where investors decide — which villa, which dates, how much it costs, how payment works. I designed this page first and built all other flows around it. The structure: imagery at the top to establish premium feel, followed by amenities, pricing, and payment options in a logical decision sequence. <strong style={{color: 'var(--cream)', fontWeight: '500'}}>The most critical screen shaped everything else.</strong></p>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I used reference systems instead of designing from scratch</div>
                  <div style={{padding: '16px 20px'}}>
                    <p style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>With a 3-week timeline and no design system, I had a choice: invent something new or build on what investors already knew how to use. Novel UI patterns carry a learning cost — for an audience that values clarity over cleverness, that cost wasn't worth it. Airbnb and MakeMyTrip for booking flows, Polaris for consistency. <strong style={{color: 'var(--cream)', fontWeight: '500'}}>Familiarity was a feature, not a shortcut.</strong></p>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I broke the payment flow into a step-by-step structure</div>
                  <div style={{padding: '16px 20px'}}>
                    <p style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>The payment logic was genuinely complex. Investors could use rental income, but if the villa cost more than their available balance, they had to cover the difference via cash, cheque, or bank transfer. Showing all of this at once would have recreated the confusion that existed on phone calls. A step-by-step structure surfaced only what was relevant at each moment. <strong style={{color: 'var(--cream)', fontWeight: '500'}}>The UI made the decision — not the user.</strong></p>
                  </div>
                </div>
                <div className="dc">
                  <div className="dc-head">Why I structured property details into scannable sections</div>
                  <div style={{padding: '16px 20px'}}>
                    <p style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>The property details page had to carry a lot — imagery, amenities, availability, pricing, and investment-linked payment details. For a non-tech audience making high-value decisions, dense information kills trust. Clear section headings and strong visual hierarchy let users get an overview at a glance and go deeper only where needed. <strong style={{color: 'var(--cream)', fontWeight: '500'}}>The luxury feel came from restraint — what wasn't on screen mattered as much as what was.</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">05 — Screens & design</div>
              <div className="cs-section-title">The core flows</div>
              <div className="cs-section-subtitle">Three primary flows — property browsing, property details, and payment — each designed to feel premium and effortless.</div>
              
              <div className="sub-label" style={{marginTop: '20px'}}>Property details page — the most important screen</div>
              <div style={{marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="🏠" placeholderText="Venya_PropertyDetail.jpg · The core screen — imagery, amenities, pricing, payment options" />
              </div>
              <div className="img-caption">The property details page was the anchor of the entire design. Imagery comes first to establish premium feel. Amenities, pricing, and payment follow in a decision sequence — each section visible at a glance, with detail available on demand.</div>

              <div style={{height: '16px'}}></div>

              <div className="sub-label">Payment flow — step by step</div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="💰" placeholderText="Venya_Payment_1.jpg · Step 1 — Rental income balance shown" />
                <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="🔢" placeholderText="Venya_Payment_2.jpg · Step 2 — Deduction + difference shown" />
                <CaseStudyImage aspectClass="aspect-tall" placeholderIcon="💳" placeholderText="Venya_Payment_3.jpg · Step 3 — Cash / cheque / bank transfer options" />
              </div>
              <div className="img-caption">The step-by-step structure removed the cognitive load that existed on investor calls. Each step asks one question and answers it before moving to the next. The investor never sees the full complexity at once.</div>

              <div style={{height: '16px'}}></div>

              <div className="sub-label">Full screen overview</div>
              <div style={{marginTop: '10px'}}>
                <CaseStudyImage aspectClass="aspect-wide" placeholderIcon="📲" placeholderText="Venya_AllScreens.jpg · Complete screen collage — all primary flows" />
              </div>
              <div className="img-caption">Every screen maintains the same visual language — generous white space, strong imagery, minimal text. The premium feel isn't one decision. It's the accumulation of hundreds of small ones.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">06 — Iteration & refinement</div>
              <div className="cs-section-title">Three weeks, three rounds</div>
              <div className="cs-section-subtitle">First draft in week one. 2–3 rounds of iteration through daily Zoom calls with the founders.</div>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px'}}>
                <div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '6px'}}>How we iterated</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>The first draft was ready in a week. From there, 2–3 rounds of iteration through daily Zoom calls with the founders — reviewing screens, refining logic, adjusting layouts.</div>
                </div>
                <div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '6px'}}>What changed most</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>The payment breakdown went through the most rounds. Getting the rental income deduction to read clearly — without making the experience feel like a financial transaction rather than a luxury booking — took careful iteration. <strong style={{color: 'var(--cream)', fontWeight: '500'}}>The tension between clarity and luxury was real and took time to resolve.</strong></div>
                </div>
                <div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '500', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '6px'}}>The honest limitation</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>All feedback came through the founders. There was no direct investor input during the design process. Founders know their product deeply — but they interpret user needs through their own lens. Decisions were validated through logic and reference, not observed behaviour. <strong style={{color: 'var(--cream)', fontWeight: '500'}}>That's a constraint worth naming, not hiding.</strong></div>
                </div>
              </div>
              <div className="highlight-block" style={{display: 'block'}}>Designing without user access isn't ideal — but naming that constraint honestly and working around it deliberately is better than pretending it didn't exist.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">07 — Outcomes</div>
              <div className="cs-section-title">What it delivered</div>
              <div className="cs-section-subtitle">No post-launch metrics — I wasn't embedded with the client after handoff. But the outcome was clear.</div>
              
              <div style={{display: 'flex', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', marginTop: '20px'}}>
                <div style={{flex: 1, padding: '16px 20px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '28px', fontWeight: '700', color: 'var(--amber)', letterSpacing: '-0.04em', lineHeight: '1'}}>3 wks</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '400', color: 'var(--cream-35)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Brief to handoff</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.6', marginTop: '6px'}}>First draft in 7 days. 2–3 iteration rounds. Handoff on time with zero scope creep.</div>
                </div>
                <div style={{flex: 1, padding: '16px 20px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '28px', fontWeight: '700', color: 'var(--amber)', letterSpacing: '-0.04em', lineHeight: '1'}}>✓</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '400', color: 'var(--cream-35)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>Client approved</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.6', marginTop: '6px'}}>Approved across all iteration rounds. Payment breakdown specifically called out as solving the confusion investors had on calls.</div>
                </div>
                <div style={{flex: 1, padding: '16px 20px', background: 'var(--bg-card)'}}>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '28px', fontWeight: '700', color: 'var(--amber)', letterSpacing: '-0.04em', lineHeight: '1'}}>✓</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '10px', fontWeight: '400', color: 'var(--cream-35)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase'}}>App built & deployed</div>
                  <div style={{fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.6', marginTop: '6px'}}>App was built and deployed. The phone-based booking process was replaced with a self-serve digital experience.</div>
                </div>
              </div>
              <div className="highlight-block" style={{display: 'block'}}>Good UI isn't just about how things look — it's about how much thinking you can remove from the user's path without them noticing.</div>
            </div>

            <div className="cs-section">
              <div className="cs-section-eyebrow">08 — Reflection & foresight</div>
              <div className="cs-section-title">Honest reflection</div>
              
              <div style={{marginTop: '20px'}}>
                <p style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>The biggest risk on this project was never fully resolved: I designed for users I never spoke to. The founders were excellent proxies — they knew the product inside out — but they couldn't fully replicate how an investor would experience the payment flow for the first time.</p><br/>
                <p style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}><strong style={{color: 'var(--cream)', fontWeight: '500'}}>If I did this again:</strong> I'd push for even two investor interviews before the first draft. The payment structure was complex enough that founder interpretation had real limits — a single confused investor would have surfaced issues that never came up on calls.</p><br/>
                <p style={{fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '300', color: 'var(--cream-60)', lineHeight: '1.8'}}>I'd also build a lightweight design system before touching screens. Working without one slowed iteration rounds and introduced minor inconsistencies. The 3-week timeline made this feel impossible — but even a half-day on a token system would have paid back in the later rounds.</p>
              </div>
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

export default VenyaCaseStudy;

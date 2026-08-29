import Nav from '../components/Nav';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import AboutStrip from '../components/AboutStrip';
import ClosingCta from '../components/ClosingCta';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <WorkSection />
        <AboutStrip />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}

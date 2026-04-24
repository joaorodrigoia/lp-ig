import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CredibilityBar } from './components/CredibilityBar';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { SocialProof } from './components/SocialProof';
import { Process } from './components/Process';
import { About } from './components/About';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <PainPoints />
        <Services />
        <Differentials />
        <SocialProof />
        <Process />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

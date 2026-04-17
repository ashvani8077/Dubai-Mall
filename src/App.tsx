import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import WhyDubaiMall from './sections/WhyDubaiMall';
import Retail from './sections/Retail';
import Luxury from './sections/Luxury';
import DiningLifestyle from './sections/DiningLifestyle';
import AttractionsEntertainment from './sections/AttractionsEntertainment';
import EventsPlatform from './sections/EventsPlatform';
import LeasingPaths from './sections/LeasingPaths';
import ContactCTA from './sections/ContactCTA';

function App() {
  useEffect(() => {
    document.title = 'The Dubai Mall — A Global Destination';
  }, []);

  return (
    <div style={{ background: 'var(--black)', minHeight: '100vh' }}>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <WhyDubaiMall />
        <Retail />
        <Luxury />
        <DiningLifestyle />
        <AttractionsEntertainment />
        <EventsPlatform />
        <LeasingPaths />
        <ContactCTA />
      </main>
    </div>
  );
}

export default App;

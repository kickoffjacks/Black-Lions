import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ScreenshotsSection from './components/ScreenshotsSection';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/compUse/SectionWrapper';
import gridBackground from './components/compUse/gridbackground';
import { useEffect, useRef } from 'react';

function App() {
  const backgroundRef1 = useRef(null); // Voor Grid 1
  const backgroundRef2 = useRef(null); // Voor Grid 2

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (backgroundRef1.current) {
        backgroundRef1.current.style.backgroundPositionY = `${-600 + scrollY * 0.5}px`;
      }
      if (backgroundRef2.current) {
        backgroundRef2.current.style.backgroundPositionY = `${-600 + scrollY * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    //gebruik hier alleen components, geen HTML tags zoals <div> of <p>

    <div className="main-container">
      {/* <gridBackground /> */} 


      <Header /> 
      <div className="mainContent">


        <SectionWrapper>
          <Home />
        </SectionWrapper>


        

        <SectionWrapper>
          <ScreenshotsSection />
        </SectionWrapper>

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Process />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>

        <SectionWrapper>
          <Footer />
        </SectionWrapper>
      </div>
    // </div>
  );
}

export default App;
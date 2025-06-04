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
import MainSectionLayout from './components/compUse/MainSectionLayout';
import { useEffect, useRef } from 'react';
import Visuals from './components/compUse/Visuals';
import WhatIsGrid from './components/WhatIsGrid';



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
        <Visuals position="top" />

        <MainSectionLayout>
          <SectionWrapper>
            <WhatIsGrid />
          </SectionWrapper>
        </MainSectionLayout>
        {/* tijdelijke border */}
        <MainSectionLayout>
          <SectionWrapper>
            <ScreenshotsSection />
          </SectionWrapper>
        </MainSectionLayout>



        <MainSectionLayout>
          <SectionWrapper>
            <About />
          </SectionWrapper>
        </MainSectionLayout>

        <MainSectionLayout>
          <SectionWrapper>
            <Process />
          </SectionWrapper>
        </MainSectionLayout>

        <MainSectionLayout>
          <SectionWrapper>
            <Contact />
          </SectionWrapper>
        </MainSectionLayout>

        <SectionWrapper>
          <Footer />

        </SectionWrapper>
      </div>
    </div>
  );
}

export default App;
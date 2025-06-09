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
import { useEffect, useRef, useState } from 'react';
import Visuals from './components/compUse/Visuals';
import WhatIsGrid from './components/WhatIsGrid';
import IntakeForm from './components/compUse/IntakeForm';



function App() {
  const backgroundRef1 = useRef(null); // Voor Grid 1
  const backgroundRef2 = useRef(null); // Voor Grid 2
  const [isIntakeFormOpen, setIsIntakeFormOpen] = useState(false);

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

  const openIntakeForm = () => setIsIntakeFormOpen(true);
  const closeIntakeForm = () => setIsIntakeFormOpen(false);

  return (
    //gebruik hier alleen components, geen HTML tags zoals <div> of <p>

    <div className="main-container">
      {/* <gridBackground /> */}

      <Header openIntakeForm={openIntakeForm} />
      <div className="mainContent">


        <SectionWrapper>
          <div id="home">
            <Home openIntakeForm={openIntakeForm} />
            </div>
        </SectionWrapper>
        <Visuals position="top" />

        <MainSectionLayout>
          <SectionWrapper>
            <div id="watIsGridArea">
              <WhatIsGrid />
              </div>
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
            <div id="onsProcess">
              <Process />
              </div>
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
      <IntakeForm isOpen={isIntakeFormOpen} onClose={closeIntakeForm} />
    </div>
  );
}

export default App;
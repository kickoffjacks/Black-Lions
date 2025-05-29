import './App.css';
import Header from './components/Header'; //1
import Home from './components/Home';//2 
import About from './components/About'; //3
import ScreenshotsSection from './components/ScreenshotsSection'; //4
import Process from './components/Process'; //5
import Contact from './components/Contact'; //6
import Footer from './components/Footer'; //7
import SectionWrapper from './components/compUse/SectionWrapper';

//Volgorde van componenten:
// 1. Header
// 2. Home 
// 3. About
// 4. Screenshots
// 5. Process
// 6. Contact/Modal
// 7. Footer

function App() {
  return (
    <>



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
    </>
  );
}

export default App;

import './App.css';
import Header from './components/Header'; //1
import Home from './components/Home';//2 
import About from './components/About'; //3
import Footer from './components/Footer';

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
   <About />
   <Footer />
   </>
  );
}

export default App;

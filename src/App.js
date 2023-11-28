import './App.css';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
   <>
    <Navbar />   
    <Menu/>
    <Testimonials/>
    <Contact/>
    <About/>
    
   </>
  );
}

export default App;

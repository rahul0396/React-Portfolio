import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Intro from './Component/Intro';
import Services from './Component/services/Services';
import Experience from './Component/Experience/Experience';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
    





function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

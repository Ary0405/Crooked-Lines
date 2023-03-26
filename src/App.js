import './App.css';
import Navbar from './Components/Navbar';
import Contact_us from './Pages/Contact_us';
import Faq from './Pages/Faq';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Sign_in from './Pages/Sign_in';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact_us />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;

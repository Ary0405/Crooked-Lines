import './App.css';
import Navbar from './Components/Navbar';
import Contact_us from './Pages/Contact_us';
import Description from './Pages/Description';
import Faq from './Pages/Faq';
import Home from './Pages/Home';
import Sign_in from './Pages/Sign_in';
import Timeline from './Pages/Timeline';
import Eligible from './Pages/Eligible';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Description />
      <Eligible />
      <Timeline />
      <Contact_us />
      <Faq />
    </div>
  );
}

export default App;

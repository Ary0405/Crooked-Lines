import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main';
import { AnimatePresence } from "framer-motion";
import Otp from './Pages/Otp';
import Submission from './Pages/Submission';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import SubmissionComplete from './Pages/Submission_Complete';
import SignIn from './Pages/Sign_in';
import About from './Pages/About';
import BlogHero from './Pages/Blogs/BlogHero';

function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider>
        <AnimatePresence mode='wait'>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/otp' element={<Otp />} />
              <Route exact path='/signin' element={<SignIn />} />
              <Route exact path='/about' element={<About/>} />
              <Route exact path='/submission' element={<ProtectedRoute><Submission /></ProtectedRoute>} />
              <Route exact path='/submission-complete' element={<ProtectedRoute><SubmissionComplete /></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </AuthContextProvider> */}
      <BlogHero />
    </div>
  );
}

export default App;

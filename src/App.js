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
import Blogs from './Pages/Blogs';
import SpotLightContent from './Pages/SpotLightContent';
import BlogContent from './Pages/BlogContent';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem('view','blogs')
  },[])
  return (
    <div className="App">
      <AuthContextProvider>
        <AnimatePresence mode='wait'>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/otp' element={<Otp />} />
              <Route exact path='/signin' element={<SignIn />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/submission' element={<ProtectedRoute><Submission /></ProtectedRoute>} />
              <Route exact path='/submission-complete' element={<ProtectedRoute><SubmissionComplete /></ProtectedRoute>} />
              <Route exact path='/blogs' element={<Blogs />} />
              <Route exact path='/content/:id' element={<BlogContent />} />
              <Route exact path='/spotlight/:id' element={<SpotLightContent/>} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </AuthContextProvider>
    </div>
  );
}

export default App;

import './App.css';

import Sign_in from './Pages/Sign_in';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './Pages/Main';
import { AnimatePresence } from "framer-motion";
import Otp from './Pages/Otp';
import Submission from './Pages/Submission';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Submission_Complete from './Pages/Submission_Complete';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AnimatePresence mode='wait'>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Main />} />
              <Route exact path='/otp' element={<Otp />} />
              <Route exact path='/signin' element={<Sign_in />} />
              <Route exact path='/submission' element={<ProtectedRoute><Submission /></ProtectedRoute>} />
              <Route exact path='/submission-complete' element={<ProtectedRoute><Submission_Complete /></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </AnimatePresence>
      </AuthContextProvider>
    </div>
  );
}

export default App;

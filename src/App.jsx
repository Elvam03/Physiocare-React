import { useState } from 'react'
import Landing from './Pages/Landing.jsx';
import LogInPage from './Pages/LogInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return(
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Login Page */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>

  )
 
}

export default App

import { useState } from 'react'
import Landing from './Pages/Landing.jsx';
import LogInPage from './Pages/LogInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard.jsx';
import Profile from './Pages/Profile.jsx'




function App() {
  return(
    
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Login Page */}
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />


      </Routes>
    

  )
 
}

export default App

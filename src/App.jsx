import { useState } from 'react'
import Landing from './Pages/Landing.jsx';
import LogInPage from './Pages/LogInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard.jsx';
import Profile from './Pages/Profile.jsx';
import Appointments from "./Pages/Appointments.jsx";
import Physio from './Pages/Physio.jsx';
import Chat from './Pages/Chat.jsx';
import Progress from './Pages/Progress.jsx';



function App() {
  return(
    
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/appointments" element={<Appointments />} />
         <Route path="/physio" element={<Physio />} />
         <Route path="/chat" element={<Chat />} />
         <Route path="/progress" element={<Progress />} />





      </Routes>
    

  )
 
}

export default App

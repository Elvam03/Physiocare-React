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
import Consultations from './Pages/Consultations.jsx';
import Library from './Pages/Library.jsx';
import Community from './Pages/Community.jsx';
import Clinics from './Pages/Clinics.jsx';
import Settings from './Pages/Settings.jsx';
import PhysioDashboard from './Pages/PhysioDashboard.jsx';
import OnboardingPage from './Pages/OnboardingPage.jsx';
import PhysioAppointments from './Pages/PhysioAppointments.jsx';
import Patient from './Pages/Patient.jsx';
import PhysioChats from './Pages/PhysioChats.jsx';
import PhysioConsultations from './Pages/PhysioConsultations.jsx';
import PhysioClinics from './Pages/PhysioClinics.jsx';
import Physiotherapist from './Pages/Physiotherapist.jsx';
import PhysioLibrary from './Pages/PhysioLibrary.jsx';
import PhysioCommunity from './Pages/PhysioCommunity.jsx';
import PhysioSettings from './Pages/PhysioSettings.jsx';






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
         <Route path="/consultations" element={<Consultations />} />
         <Route path="/library" element={<Library />} />
         <Route path="/community" element={<Community />} />
         <Route path="/clinics" element={<Clinics />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/onboarding" element={<OnboardingPage />} />
         <Route path="/physioDashboard" element={<PhysioDashboard />} />
         <Route path="/physioAppointments" element={<PhysioAppointments />} />
         <Route path="/patient" element={<Patient />} />
         <Route path="/physioChats" element={<PhysioChats />} />
         <Route path="/physioConsultations" element={<PhysioConsultations />} />
         <Route path="/physioClinics" element={<PhysioClinics />} />
         <Route path="/physiotherapists" element={<Physiotherapist />} />
         <Route path="/physioLibrary" element={<PhysioLibrary />} />
         <Route path="/physioCommunity" element={<PhysioCommunity />} />
         <Route path="/physioSettings" element={<PhysioSettings />} />













      </Routes>
    

  )
 
}

export default App

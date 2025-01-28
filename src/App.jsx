import { useState } from 'react'
import Landing from './Landing Pages/Landing.jsx';
import ResourcePage from './Landing Pages/ResourcePage.jsx';
import LogInPage from './Landing Pages/LogInPage.jsx';
import SignUpPage from './Landing Pages/SignUpPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Client Side Pages/Dashboard.jsx';
import Profile from './Client Side Pages/Profile.jsx';
import Appointments from "./Client Side Pages/Appointments.jsx";
import Physio from './Client Side Pages/Physio.jsx';
import Chat from './Client Side Pages/Chat.jsx';
import Progress from './Client Side Pages/Progress.jsx';
import Consultations from './Client Side Pages/Consultations.jsx';
import Library from './Client Side Pages/Library.jsx';
import Community from './Client Side Pages/Community.jsx';
import Clinics from './Client Side Pages/Clinics.jsx';
import Settings from './Client Side Pages/Settings.jsx';
import PhysioDashboard from './Physio Side Pages/PhysioDashboard.jsx';
import OnboardingPage from './Landing Pages/OnboardingPage.jsx';
import PhysioAppointments from './Physio Side Pages/PhysioAppointments.jsx';
import Patient from './Physio Side Pages/Patient.jsx';
import PhysioChats from './Physio Side Pages/PhysioChats.jsx';
import PhysioConsultations from './Physio Side Pages/PhysioConsultations.jsx';
import PhysioClinics from './Physio Side Pages/PhysioClinics.jsx';
import Physiotherapist from './Physio Side Pages/Physiotherapist.jsx';
import PhysioLibrary from './Physio Side Pages/PhysioLibrary.jsx';
import PhysioCommunity from './Physio Side Pages/PhysioCommunity.jsx';
import PhysioSettings from './Physio Side Pages/PhysioSettings.jsx';
import AboutPage from './Landing Pages/AboutPage.jsx';






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
         <Route path="/resourcePage" element={<ResourcePage />} />
         <Route path="/aboutPage" element={<AboutPage />} />




      </Routes>
    

  )
 
}

export default App

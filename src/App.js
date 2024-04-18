import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
// import {Route,Routes} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PatientDb from "./Pages/PatientDb";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/patientdb" element={<PatientDb />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
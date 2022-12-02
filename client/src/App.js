import React, { Fragment } from "react";
import "./App.css";
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// components
import StudentsPage from "./components/pages/StudentsPage";
import HomePage from "./components/pages/HomePage";
import TeachersPage from "./components/pages/TeachersPage";
import SubjectsPage from "./components/pages/SubjectsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
          </Routes>
          <Footer className="footer" />
        </Router>
      </div>
    </Fragment>
  );
}

export default App;

import React, { Fragment } from "react";
import "./App.css";
import School from "./school.png";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// components
import StudentsPage from "./components/pages/StudentsPage";
import HomePage from "./components/pages/HomePage";
import TeachersPage from "./components/pages/TeachersPage";
import SubjectsPage from "./components/pages/SubjectsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment className="container">
      <div>
        <Router>
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li>
                  <img src={School} alt="" style={{width: "40px"}}/>
                </li>
                <li className="nav-item active">
                  <Link className="navbar-brand nav-link mb-0 h1" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="navbar-brand nav-link mb-0 h1"
                    to="/students"
                  >
                    Students
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="navbar-brand nav-link mb-0 h1"
                    to="/teachers"
                  >
                    Teachers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="navbar-brand nav-link mb-0 h1"
                    to="/subjects"
                  >
                    Subjects
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
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

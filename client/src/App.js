import React, { Fragment, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import "./App.css";
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// components
import StudentsPage from "./components/pages/StudentsPage";
import HomePage from "./components/pages/HomePage";
import TeachersPage from "./components/pages/TeachersPage";
import SubjectsPage from "./components/pages/SubjectsPage";
import ParticipationsPage from "./components/pages/ParticipationsPage";
import Footer from "./components/Footer";

function App() {

  const [logged, setLogged] = useState(false);

  return (
    <Fragment>
      {!logged && (
        <form className="form" action="">
          <h1>Login to the system</h1>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input type="login" id="login" />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input type="register" id="login" />
            </div>
          </div>
          <hr />
          <br />
          <div>
            <button onClick={()=>{setLogged(!logged)}} className="btn btn-info">Login</button>
            <button className="btn btn-succes">Register</button>
          </div>
        </form>
      )}

      {logged && (
        <div>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/participations" element={<ParticipationsPage />} />
            </Routes>
            <Footer className="footer" />
          </Router>
        </div>
      )}
    </Fragment>
  );
}

export default App;

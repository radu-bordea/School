import React, { Fragment, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import "../../App.css";
import Navbar from "../Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import StudentsPage from "../pages/StudentsPage";
import HomePage from "../pages/HomePage";
import TeachersPage from "../pages/TeachersPage";
import SubjectsPage from "../pages/SubjectsPage";
import ParticipationsPage from "../pages/ParticipationsPage";
import Footer from "../Footer";

import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading!</div>;
  }
 
  /* After the login the app shows on the web
  The React Routes are aded on this level*/
  return (
    isAuthenticated && (
      <div>
        <Fragment>
          <div>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/students" element={<StudentsPage />} />
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/subjects" element={<SubjectsPage />} />
                <Route
                  path="/participations"
                  element={<ParticipationsPage />}
                />
              </Routes>
              <Footer className="footer" />
            </Router>
          </div>
        </Fragment>
      </div>
    )
  );
};

export default UserProfile;

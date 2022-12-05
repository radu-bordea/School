import React from 'react';
import School from "../school.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-info">
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
              <img src={School} alt="" style={{ width: "40px" }} />
            </li>
            <li className="nav-item active">
              <Link className="navbar-brand nav-link mb-0 h1" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand nav-link mb-0 h1" to="/students">
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand nav-link mb-0 h1" to="/teachers">
                Teachers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand nav-link mb-0 h1" to="/subjects">
                Subjects
              </Link>
            </li>
            <li>
              <Link className="navbar-brand nav-link mb-0 h1" to="/participations">
                Participations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
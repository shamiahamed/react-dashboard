import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaThLarge,
  FaHistory,
  FaCalendarAlt,
  FaPlusSquare,
  FaChartLine,
  FaCommentDots,
  FaPhoneAlt,
  FaTools,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
  className="d-flex flex-column text-start p-4 sidebar-container"
  style={{
    width: "200px",
    height: "100vh",
    backgroundColor: "#f5f9ff",
    borderRight: "1px solid #e0e0e0",
    margin: "10px",
    borderRadius: "25px"
  }}
>
      {/* Logo */}
      <h4 className="mb-4 fw-bold">
        <span style={{ color: "#00d5ff" }}>Health</span>
        <span style={{ color: "#1d1b4f" }}>care.</span>
      </h4>

      {/* GENERAL SECTION */}
      <div className="text-uppercase text-muted small mb-2">General</div>
      <ul className="nav flex-column mb-3">
        <li className="nav-item mb-2">
          <a href="#dashboard" className="nav-link text-dark1 d-flex align-items-center">
            <FaThLarge className="me-2" /> Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#history" className="nav-link text-muted d-flex align-items-center">
            <FaHistory className="me-2" /> History
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#calendar" className="nav-link text-muted d-flex align-items-center">
            <FaCalendarAlt className="me-2" /> Calendar
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#appointments" className="nav-link text-muted d-flex align-items-center">
            <FaPlusSquare className="me-2" /> Appointments
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#statistics" className="nav-link text-muted d-flex align-items-center">
            <FaChartLine className="me-2" /> Statistics
          </a>
        </li>
      </ul>

      {/* TOOLS SECTION */}
      <div className="text-uppercase text-muted small mb-2">Tools</div>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#chat" className="nav-link text-muted d-flex align-items-center">
            <FaCommentDots className="me-2" /> Chat
          </a>
        </li>
        <li className="nav-item" style={{marginBottom:'70px'}}>
          <a href="#support" className="nav-link text-muted d-flex align-items-center">
            <FaPhoneAlt className="me-2" /> Support
          </a>
        </li>
        <li className="nav-item">
          <a href="#Settings" className="nav-link text-muted d-flex align-items-center">
            <FaTools className="me-2" /> Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

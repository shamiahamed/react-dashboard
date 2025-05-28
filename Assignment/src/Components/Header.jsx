import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaBell, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div
  className="d-flex justify-content-between align-items-center px-4 py-2 header-container"
  style={{ margin: '10px', borderRadius: '25px' }}
>
  {/* Search Input */}
  <div className="d-flex align-items-center rounded-2 px-3 py-2 shadow-sm position-relative search-wrapper" style={{ flex: 1, maxWidth: "440px" }}>
    <FaSearch className="text-muted me-2" />
    <input
      type="text"
      className="form-control border-0 p-0"
      placeholder="Search"
      style={{ boxShadow: "none", background: "transparent" }}
    />
    <div className="position-absolute s btn rounded-2 px-2 py-2 shadow-sm">
      <FaBell />
    </div>
  </div>

  {/* Avatar and Add Button */}
  <div className="d-flex align-items-center avatar-add-wrapper">
    {/* Avatar */}
    <div
      className="rounded-circle d-flex justify-content-center align-items-center me-3 header-avatar"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#00d6ff",
      }}
    >
      <img
        src="/assets/iusa_75x75.68294570_agzn.jpg"
        alt="User"
        className="rounded-circle"
        style={{ width: "28px", height: "28px" }}
      />
    </div>

    {/* Add Button */}
    <div
      className="rounded-circle d-flex justify-content-center align-items-center header-add-btn"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#2b2c86",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer",
      }}
    >
      <FaPlus />
    </div>
  </div>
</div>

  );
};

export default Header;

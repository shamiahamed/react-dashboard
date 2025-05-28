import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const UpcomingSchedule = () => {
  return (
    <motion.div
      className="p-2"
      style={{ width: '115%', color: "#1d1b4f",  backgroundColor: "#f5f9ff" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h5 className="fw-bold mb-2 mt-4">The Upcoming Schedule</h5>

      {/* Thursday */}
      <p className="fw-semibold">On Thursday</p>
      <div className="d-flex gap-3 flex-wrap mb-2">
        {/* Health checkup complete */}
        <motion.div
          className="p-2 rounded-4"
          style={{ backgroundColor: "#c4c9d8", minWidth: "220px" }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="d-flex justify-content-between">
            <span className="fw-semibold" style={{ fontSize: "14px" }}>
              Health checkup complete
            </span>
            <span style={{ fontSize: "14px" }}>🩺</span>
          </div>
          <p className="m-0" style={{ fontSize: "14px" }}>
            11:00 AM
          </p>
        </motion.div>

        {/* Ophthalmologist */}
        <motion.div
          className="p-2 rounded-4"
          style={{ backgroundColor: "#c4c9d8", minWidth: "200px", color: "#1d1b4f" }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="d-flex justify-content-between">
            <span className="fw-semibold" style={{ fontSize: "14px" }}>
              Ophthalmologist
            </span>
            <span style={{ fontSize: "16px" }}>👁️</span>
          </div>
          <p className="m-0" style={{ fontSize: "14px" }}>
            14:00 PM
          </p>
        </motion.div>
      </div>

      {/* Saturday */}
      <p className="fw-semibold">On Saturday</p>
      <div className="d-flex gap-3 flex-wrap">
        {/* Cardiologist */}
        <motion.div
          className="p-2 rounded-4"
          style={{ backgroundColor: "#c4c9d8", minWidth: "200px", color: "#2A2A2A" }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="d-flex justify-content-between">
            <span className="fw-semibold" style={{ fontSize: "14px" }}>
              Cardiologist
            </span>
            <span style={{ fontSize: "16px" }}>❤️</span>
          </div>
          <p className="m-0" style={{ fontSize: "14px" }}>
            12:00 AM
          </p>
        </motion.div>

        {/* Neurologist */}
        <motion.div
          className="p-2 rounded-4"
          style={{ backgroundColor: "#c4c9d8", minWidth: "200px", color: "#1d1b4f" }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="d-flex justify-content-between">
            <span className="fw-semibold" style={{ fontSize: "14px" }}>
              Neurologist
            </span>
            <span style={{ fontSize: "16px" }}>🧠</span>
          </div>
          <p className="m-0" style={{ fontSize: "14px" }}>
            16:00 PM
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UpcomingSchedule;

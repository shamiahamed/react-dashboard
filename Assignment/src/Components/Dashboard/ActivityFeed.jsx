import React from "react";

const ActivityFeed = () => {
  return (
    <div className="card p-2 mt-5 shadow" style={{ border: 'none', backgroundColor: '#f5f9ff', borderRadius:'20px',color:'#1d1b4f'}}>
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-bold">Activity</span>
        <span className="small">3 appointment on this week</span>
      </div>
      <img
        src="/assets/Graphh.png"
        alt="Activity Graph"
        className="img-fluid"
        style={{ maxHeight: "150px", objectFit: "contain" }}
      />
    </div>
  );
};

export default ActivityFeed;

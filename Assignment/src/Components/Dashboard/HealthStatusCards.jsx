import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HealthStatusCards = () => {
  const data = [
    { label: "Lungs", icon: "lungs", color: "danger", progress: 70 },
    { label: "Teeth", icon: "tooth", color: "success", progress: 40 },
    { label: "Bone", icon: "bone", color: "warning", progress: 80 },
  ];

  return (
    <div className="d-flex flex-column gap-2 He">
      {data.map((item, i) => (
        <div key={i} className="card p-3 shadow-sm" style={{border:'none',backgroundColor: '#f5f9ff', borderRadius:'20px',color:'#1d1b4f'}}>
          <div className="">
            <div className="fw-bold">{item.label}</div>
            <div className="small">Date: 26 Oct 2021</div>
          </div>
          <div className="progress mt-2" style={{ height: "6px" }}>
            <div
              className={`progress-bar bg-${item.color}`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-end mt-0" style={{color:'#1d1b4f'}}>
            <button className="btn p-0 btn-sm">Details →</button>
          </div>
    </div>
  );
};

export default HealthStatusCards;

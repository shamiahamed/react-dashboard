import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import SimpleAppointmentCard from './SimpleAppointmentCard';

const DashboardMainContent = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Left Column: Anatomy + Health Cards + Activity */}

        <div className="col-md-6">
          
      <div className="d-flex justify-content-between align-items-center w-100 mb-3" style={{color:'#1d1b4f'}}>
        <h4 className="fw-bold">Dashboard</h4>
        <div className="d-flex align-items-center small">
          This Week <i className="bi bi-chevron-down btn btn-sm"></i>
        </div>
      </div>
          <div className="row">
  <div className="col-md-8 d-flex justify-content-center align-items-center">
    <AnatomySection />
  </div>
  <div className="col-md-4">
    <HealthStatusCards />
  </div>
</div>
          <ActivityFeed />
        </div>

        {/* Right Column: Calendar + Upcoming Schedule */}
        <div className="col-md-6 ca" style={{backgroundColor: "#f5f9ff",borderRadius:'20px'}}>
          <CalendarView />
          <SimpleAppointmentCard />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;

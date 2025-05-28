import React from 'react'

const SimpleAppointmentCard = () => {
  return (
      <div className="container-fluid d-flex justify-content-center align-items-center App" style={{ backgroundColor: '#f5f8ff',width:'115%',overflow:'hidden'}}>
      <div className="row w-100 mt-1">
        {/* Dentist - Left Column */}
        <div className="col-md-4">
          <div
            className="text-white shadow-sm"
            style={{
              backgroundColor: '#4339F2',
              padding:'8px 6px', borderRadius:'25px'
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className="m-0 semibold">Dentist</p>
              <span style={{ fontSize: '18px' }}>🦷</span>
            </div>
            <p className="mb-1" style={{ fontSize: '14px' }}>
              09:00 – 11:00
            </p>
            <p className="mb-0" style={{ fontSize: '14px' }}>
              Dr. Cameron Williamson
            </p>
          </div>
        </div>

        {/* Physiotherapy - Right Column */}
        <div className="col-md-8">
          <div
            className="rounded-5 shadow-sm h-100"
            style={{
              backgroundColor: '#c4c9d8',
              padding:'8px 6px', color:'#1d1b4f', paddingLeft:'15px'
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className=" fw-semibold m-0">Physiotherapy Appointment</p>
              <span style={{ fontSize: '18px' }}>💪</span>
            </div>
            <p className="mb-1" style={{ fontSize: '14px' }}>
              11:00 – 12:00
            </p>
            <p className="mb-0" style={{ fontSize: '14px' }}>
              Dr. Kevin Djones
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
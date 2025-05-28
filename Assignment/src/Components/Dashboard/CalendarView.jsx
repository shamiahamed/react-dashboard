import React from 'react';
import './CalendarView.css';

const days = [
  { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
  { day: 'Tue', date: 26, times: ['08:00', '09:00', '10:00'] },
  { day: 'Wed', date: 27, times: ['12:00', '____', '13:00'] },
  { day: 'Thur', date: 28, times: ['10:00', '11:00', '____'] },
  { day: 'Fri', date: 29, times: ['____', '14:00', '15:00'] },
  { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'] },
  { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
];

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h5>October 2021</h5>
        <div className="nav-icons">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>
      <div className="calendar-week">
        {days.map((day, index) => (
          <div key={index} className={`day-card ${day.day === 'Tue' ? 'active-day' : ''}`}>
            <div className="day-title">{day.day}</div>
            <div className="day-date">{day.date}</div>
            <div className="time-slots">
              {day.times.map((time, i) => {
                let className = 'time-slot';

                // Active (deep blue)
                if (day.day === 'Tue' && time === '09:00') {
                  className += ' selected-time';
                }

                // Disabled (faded)
                if (day.day === 'Sun') {
                  className += ' disabled-time';
                }

                // Light active (same color as selected)
                if (
                  (day.day === 'Thur' && time === '11:00') ||
                  (day.day === 'Sat' && time === '12:00') ||
                  (day.day === 'Sun' && time === '09:00')
                ) {
                  className += ' active1';
                }

                return (
                  <div key={i} className={className}>
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;

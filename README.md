# React Project
🏥 Healthcare Dashboard (React + Bootstrap)
A responsive, modular healthcare dashboard built with React and Bootstrap, designed to showcase a clean and professional UI with reusable components.

🚀 Features
This project follows a component-based architecture for clarity and scalability:

📌 Layout Structure
App Component
The root layout managing Header, Sidebar, and DashboardMainContent using Flexbox/Grid.

Header Component
Displays:

App Logo/Title (“Healthcare.”)

Search bar (UI only)

Notification icon

Static user profile (avatar + name)

“+ Add” button (display-only)

Sidebar Component
Vertical navigation with:

"General" heading

Static links: Dashboard, History, Calendar, Appointments, Statistics, Tests, Chat, Support, Settings

DashboardMainContent Component
Hosts all sub-sections of the main content area:

DashboardOverview – High-level summary

AnatomySection – Human body image with labeled indicators like “Healthy Heart”, “Lungs”, each color-coded (green/red)

HealthStatusCards – Cards for “Lungs”, “Teeth”, and “Bone” showing health status and mock dates

CalendarView – Static calendar (e.g., October 2021) with mock times (“09:00”, “11:00”, etc.) and appointment cards (“Dentist”, “Physiotherapy”)

UpcomingSchedule – “The Upcoming Schedule” section organized by days (e.g., “On Thursday”)

Uses the SimpleAppointmentCard component for each appointment

ActivityFeed – Displays "3 appointments on this week" with a basic bar chart built using static CSS

🛠 Tech Stack
React.js

Bootstrap 5

CSS Flex/Grid

100% Static UI (No API/backend integration)

📁 File Structure
All UI components are modular, logically separated, and styled for responsiveness — perfect for extending into a full healthcare app.

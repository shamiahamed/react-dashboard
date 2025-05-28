# React Project
🏥 Healthcare Dashboard (React + Bootstrap)
A responsive, modular healthcare dashboard built with React and Bootstrap, designed to showcase a clean and professional UI with reusable components.

🚀 Features
This project follows a component-based architecture for clarity and scalability:

📌 Layout Structure
The app follows a modular component structure:

App Component
Root component that manages the layout using Flexbox/Grid for Header, Sidebar, and DashboardMainContent.

Header Component
Displays the app title/logo ("Healthcare."), search bar, notification icon, static user avatar with name, and a static “+ Add” button.

Sidebar Component
Vertical navigation with a "General" heading and static links for Dashboard, History, Calendar, Appointments, Statistics, Tests, Chat, Support, and Settings.

DashboardMainContent Component
Main container for all dashboard sub-sections:

DashboardOverview: Intro summary area.

AnatomySection: Static human anatomy image with labeled indicators (e.g., “Healthy Heart”, “Lungs”) in color-coded status (green/red).

HealthStatusCards: Cards for organs like "Lungs", "Teeth", and "Bone" showing static health info and mock dates.

CalendarView: Static monthly calendar (e.g., October 2021) with mock appointment times on specific days and appointment details below ("Dentist", "Physiotherapy Appointment").

UpcomingSchedule: Section titled “The Upcoming Schedule” organized by day (e.g., “On Thursday”) and displaying multiple appointments using:

SimpleAppointmentCard: Reusable card component for upcoming appointments with static title, time, and an icon.

ActivityFeed: Static "Activity" chart with text like "3 appointments on this week" and a simple bar chart created using CSS (no dynamic charting).

🛠 Tech Stack
React.js

Bootstrap 5

CSS Flex/Grid

100% Static UI (No API/backend integration)

📁 File Structure
All UI components are modular, logically separated, and styled for responsiveness — perfect for extending into a full healthcare app.

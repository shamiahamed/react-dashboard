import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import DashboardMainContent from './Components/Dashboard/DashboardMainContent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
          <Header />
          <DashboardMainContent />
      </div>
    </div>
    </>
  )
}

export default App

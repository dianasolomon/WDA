import React from 'react'
import { useState } from 'react'
import Patient_header from '../Components/Patient/Patient_header'
import Patient_sidebar from '../Components/Patient/Patient_sidebar'
import Patient_db from '../Components/Patient/Patient_db'
import '../Styles/PatientDb.css'
function PatientDb() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Patient_header openSidebarToggle={OpenSidebar}/>
      <Patient_sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Patient_db/>
    </div>
  )
}

export default PatientDb

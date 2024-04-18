import React from 'react'
import { CiMedicalCross } from "react-icons/ci"
 import { FaHandHoldingMedical } from "react-icons/fa";
 import { CgProfile } from "react-icons/cg";
 import { SlCalender } from "react-icons/sl";
 import { CiInboxIn } from "react-icons/ci";
 import { FaPrescriptionBottleMedical } from "react-icons/fa6";
 import { IoDocumentSharp } from "react-icons/io5";
 import { MdOutlinePayment } from "react-icons/md";
 import { IoIosSettings } from "react-icons/io";


function Patient_sidebar({openSidebarToggle,OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""} >
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <CiMedicalCross  className='icon_header'/> Mediplus
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
          <FaHandHoldingMedical className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <CgProfile  className='icon'/> Profile
          </a>
        </li><li className='sidebar-list-item'>
          <a href="">
            <SlCalender className='icon'/> Appointments
          </a>
        </li><li className='sidebar-list-item'>
          <a href="">
            <CiInboxIn  className='icon'/> Message Inbox
          </a>
        </li><li className='sidebar-list-item'>
          <a href="">
            <FaPrescriptionBottleMedical  className='icon'/> Prescriptions
          </a>
        </li><li className='sidebar-list-item'>
          <a href="">
            <IoDocumentSharp  className='icon'/>Medical Records
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <MdOutlinePayment  className='icon'/>Billing and Payments
          </a>
        </li><li className='sidebar-list-item'>
          <a href="">
            <IoIosSettings className='icon'/> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Patient_sidebar

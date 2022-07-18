import React from 'react'
import '../CSS/AdminNavBar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/cadd_logo.png'

function AdminNavBar() {
  return (
    <div className="navbar-container">
      <div className="icon-container">
        <center>
          {" "}
          <img src={Logo} alt="Logo" width="160px" />
        </center>
      </div>
      <div className="links-container">
        <div className="navbar-body">
          <p className="navbar-section-header">Navigation</p>
          <NavLink to="/dashboard" className="navbar-link">
            <div className="navbar-section-detail">
              <HomeOutlinedIcon fonrsize="small" />
              <p>Dashboard</p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-body">
          <p className="navbar-section-header">Main Name</p>
          <NavLink to="/recent/request" className="navbar-link">
            <div className="navbar-section-detail">
              <MarkUnreadChatAltOutlinedIcon fonrsize="small" />
              <p>Recent Requests</p>
            </div>
          </NavLink>
          <NavLink to="/pending/request" className="navbar-link">
            <div className="navbar-section-detail">
              <MoreHorizOutlinedIcon fonrsize="small" />
              <p>Pending Request</p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-body">
          <p className="navbar-section-header">History</p>
          <NavLink to="/issue/request" className="navbar-link">
            <div className="navbar-section-detail">
              <CheckCircleOutlineOutlinedIcon fonrsize="small" />
              <p>Issued Certificate</p>
            </div>
          </NavLink>
          <NavLink to="/reject/request" className="navbar-link">
            <div className="navbar-section-detail">
              <DoDisturbAltOutlinedIcon fonrsize="small" />
              <p>Rejected Certificate</p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-body">
          <p className="navbar-section-header">Options</p>
          <NavLink to="/certificate/templates" className="navbar-link">
            <div className="navbar-section-detail">
              <AddPhotoAlternateOutlinedIcon fonrsize="small" />
              <p>Templates</p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-body">
          <p className="navbar-section-header">Details</p>
          <NavLink to="/certificatecontent" className="navbar-link">
            <div className="navbar-section-detail">
              <AssignmentIcon fonrsize="small" />
              <p>Certificate Content</p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-body">
          <p className="navbar-section-header">Users</p>
          <NavLink to="/addusers" className="navbar-link">
            <div className="navbar-section-detail">
              <PersonAddAltIcon fonrsize="small" />
              <p>Add Users</p>
            </div>
          </NavLink>
        </div>
        <br />
      </div>
    </div>
  );
}

export default AdminNavBar
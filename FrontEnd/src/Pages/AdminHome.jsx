import React from "react";
import "../CSS/AdminHome.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import BarChart from "../Components/BarChart";

function AdminHome() {
  return (
    <div className="container">
      <div className="mob-navbar-wrapper">
        <MobNavBar />
      </div>
      <div className="navbar-wrapper">
        <AdminNavBar />
      </div>
      <div className="body-wrapper">
        <div className="body-header">
          <AccountMenu />
        </div>
        <div className="body-container">
          {/* ------------------------------------------------------ */}
          <p className="body-topic">Dashboard</p>
          <div className="card-wrapper ">
            <div className="card1-wrapper">
              <p className="card-topic">Total Pending Requests</p>
              <p className="card-detail">1000</p>
              <div className="card-detail-box1">
                <h4 className="pending">Pending</h4>
                {/* <MoreHorizOutlinedIcon /> */}
              </div>
            </div>
            <div className="card2-wrapper">
              <p className="card-topic">Total Issued Certificates</p>
              <p className="card-detail">1000</p>
              <div className="card-detail-box2 ">
                <h4 className="Issued">Issued</h4>
                {/* <DoneOutlinedIcon /> */}
              </div>
            </div>
            <div className="card3-wrapper">
              <p className="card-topic">Total Rejected Certificates</p>
              <p className="card-detail">1000</p>
              <div className="card-detail-box3">
                <h4 className="Rejected">Rejected</h4>
                {/* <ClearOutlinedIcon /> */}
              </div>
            </div>
          </div>
          <p className="body-topic">Overview</p>
          <div className="admin-dashboard-graph-wrapper">
            <div className="garph-wrapper1">
              <BarChart />
            </div>
            {/* <div className="garph-wrapper2">
              <h1>hi2</h1>
            </div> */}
          </div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

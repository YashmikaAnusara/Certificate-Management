import React, { useState, useEffect } from "react";
import "../CSS/AdminHome.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import BarChart from "../Components/BarChart";
import BarChart2 from "../Components/BarChart2";
import axios from "axios";

function AdminHome() {
  const [pending, setpending] = useState();
  const [issued, setissued] = useState();
  const [rejected, setrejected] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8070/student/pending/count`)
      .then((res) => {
        // console.log(res.data.pendingcount);
        setpending(res.data.pendingcount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/student/issued/count`)
      .then((res) => {
        // console.log(res.data.pendingcount);
        setissued(res.data.issuedcount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8070/student/rejected/count`)
      .then((res) => {
        // console.log(res.data.pendingcount);
        setrejected(res.data.rejectedcount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


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
              <p className="card-detail">{pending}</p>
              <div className="card-detail-box1">
                <h4 className="pendingadmin">Pending</h4>
                {/* <MoreHorizOutlinedIcon /> */}
              </div>
            </div>
            <div className="card2-wrapper">
              <p className="card-topic">Total Issued Certificates</p>
              <p className="card-detail">{issued}</p>
              <div className="card-detail-box2 ">
                <h4 className="Issuedadmin">Issued</h4>
                {/* <DoneOutlinedIcon /> */}
              </div>
            </div>
            <div className="card3-wrapper">
              <p className="card-topic">Total Rejected Certificates</p>
              <p className="card-detail">{rejected}</p>
              <div className="card-detail-box3">
                <h4 className="Rejectedadmin">Rejected</h4>
                {/* <ClearOutlinedIcon /> */}
              </div>
            </div>
          </div>
          <p className="body-topic">Overview</p>
          <div className="admin-dashboard-graph-wrapper">
            <div className="garph-wrapper1">
              <BarChart />
            </div>
            <div className="garph-wrapper2">
              <BarChart2 />
            </div>
          </div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

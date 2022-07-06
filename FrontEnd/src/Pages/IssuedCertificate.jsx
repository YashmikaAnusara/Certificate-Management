import React, { useEffect, useState } from "react";
import "../CSS/IssuedCertificate.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";
import Port from "../port";
import axios from "axios";

function IssuedCertificate() {
  const [details, setDetails] = useState([]);
  const [found, setFound] = useState("");

  useEffect(() => {
    axios
      .get(`http://${Port}:8070/request/issued/certificates/details`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const requests = details.filter((data) => {
      data.nic.toLowerCase().includes(found.toLowerCase()) ||
      data.name.toLowerCase().includes(found.toLowerCase())
    
  });
  return (
        <div className='container'>
            <div className='mob-navbar-wrapper'>
                <MobNavBar />
            </div>
            <div className='navbar-wrapper'>
                <AdminNavBar />
            </div>
            <div className='body-wrapper'>
                <div className='body-header'>
                    <AccountMenu />
                </div>
                <div className='body-container'>
                    {/* ------------------------------------------------------ */}
                    <div className='Issued-request-status-wrapper clearfix'>
                        <div><input type="search" placeholder='Search...' className='certificate-request-search' /> </div>
                        <div className='Issued-request-status'><div className='approved'> <FiberManualRecordIcon fontSize='small' style={{ color: "green" }} /></div><p style={{ marginLeft: "5px", fontSize: "14px", color: "black" }}>Approved</p> </div>
                    </div>
                    <div className='Issued-request-table-wrapper'>
                        <div className='Issued-request-table-header'>
                            <div id='Issued-request-body-col1'><center> Status</center></div>
                            <div id='Issued-request-body-col2'><center> Reg No</center></div>
                            <div id='Issued-request-body-col3'><center> Name</center></div>
                            <div id='Issued-request-body-col4'><center> Submited Date</center></div>
                            <div id='Issued-request-body-col5'><center> Approved Date</center></div>
                        </div>
                        <IssuedRequestTable />
                        <IssuedRequestTable />
                        <IssuedRequestTable />

                    </div>
                    {/* ------------------------------------------------------ */}
                </div>
            </div>
        </div>
        <div className="body-container">
          {/* ------------------------------------------------------ */}
          <div className="Issued-request-status-wrapper clearfix">
            <div>
              <input
                type="search"
                placeholder="Search..."
                className="certificate-request-search"
                onChange={(event) => {
                  setFound(event.target.value);
                }}
              />{" "}
            </div>
            <div className="Issued-request-status">
              {" "}
              <FiberManualRecordIcon
                fontSize="small"
                style={{ color: "green" }}
              />
              <p
                style={{ marginLeft: "5px", fontSize: "14px", color: "black" }}
              >
                Approved
              </p>{" "}
            </div>
          </div>
          <div className="Issued-request-table-wrapper">
            <div className="Issued-request-table-header">
              <div id="Issued-request-body-col1">
                <center> Status</center>
              </div>
              <div id="Issued-request-body-col2">
                <center> NIC</center>
              </div>
              <div id="Issued-request-body-col3">
                <center> Name</center>
              </div>
              <div id="Issued-request-body-col4">
                <center> Submited Date</center>
              </div>
              <div id="Issued-request-body-col5">
                <center> Approved Date</center>
              </div>
            </div>
            {requests.map((request, index) => (
              <div key={index}>
                <IssuedRequestTable
                  nic={request.nic}
                  name={request.name}
                  s_date={request.s_date}
                  r_date={request.r_date}
                  id={request.id}
                />
              </div>
            ))}

          </div>
          {/* ------------------------------------------------------ */}
        </div>
     
  );
}
export default IssuedCertificate;

function IssuedRequestTable(props) {
  const navigate = useNavigate();
  const issuedetailsHandler = () => {
    navigate(`/issue/request/${props.id}/${props.nic}`);
  };

  return (
    <div className="Issued-request-table-body" onClick={issuedetailsHandler}>
      <div className="Issued-request-body-col1">
        <center>
          {" "}
          <FiberManualRecordIcon fontSize="small" style={{ color: "green" }} />
        </center>
      </div>
      <div className="Issued-request-body-col2">
        <center> {props.nic}</center>
      </div>
      <div className="Issued-request-body-col3">
        <center> {props.name}</center>
      </div>
      <div className="Issued-request-body-col4">
        <center> {props.s_date}</center>
      </div>
      <div className="Issued-request-body-col5">
        <center> -</center>
      </div>
    </div>
  );
}

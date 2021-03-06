import React, { useEffect, useState } from "react";
import "../CSS/IssuedCertificate.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";
import Port from "../port";
import axios from "axios";
import Loader from '../Components/Loader'

function IssuedCertificate() {
  const [details, setDetails] = useState([]);
  const [found, setFound] = useState("");
  const [isOpen,setIsopen]=useState(false)
  const username=localStorage.getItem('username')
  const navigate=useNavigate()

  useEffect(() => {
    setIsopen(true)
    axios
      .get(`http://${Port}:8070/request/issued/certificates/details`)
      .then((res) => {
        if(res.data){
          setIsopen(false)
          setDetails(res.data);
        }
      })
      .catch((err) => {
        if(err){
          setIsopen(false)
          alert(err);
        }
      });
  }, []);

  const requests = details.filter((data) => {
    return (
      data.nic.toLowerCase().includes(found.toLowerCase()) ||
      data.uuid.toLowerCase().includes(found.toLowerCase()) ||
      data.name.toLowerCase().includes(found.toLowerCase())
    );
  });
  return username?(
    <div className="container">
       <Loader open={isOpen}/>
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
          <div className="Issued-request-status-wrapper clearfix">
            <div className="Issued-request-status-wrapper clearfix">
              <div>
                <input
                  type="search"
                  placeholder="Search ID Name or NIC..."
                  className="certificate-request-search"
                  onChange={(event) => {
                    setFound(event.target.value);
                  }}
                />{" "}
              </div>
              <div className="Issued-request-status">
                <div className="approved">
                  {" "}
                  <FiberManualRecordIcon
                    fontSize="small"
                    style={{ color: "green" }}
                  />
                </div>
                <p
                  style={{
                    marginLeft: "5px",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  Approved
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="Issued-request-table-wrapper">
            <div className="Issued-request-table-header">
              <div id="Issued-request-body-col1">
                <center> Status</center>
              </div>
              <div id="Issued-request-body-col6">
                <center> ID</center>
              </div>
              <div id="Issued-request-body-col2">
                <center> NIC</center>
              </div>
              <div id="Issued-request-body-col3">
                <center> Name</center>
              </div>
              <div id="Issued-request-body-col4">
                <center> Submited</center>
              </div>
              <div id="Issued-request-body-col5">
                <center> Approved</center>
              </div>
               
            </div>
            {requests.map((request, index) => (
              <div key={index}>
                <IssuedRequestTable
                  nic={request.nic}
                  name={request.name}
                  s_date={request.s_date}
                  r_date={request.r_date}
                  a_date={request.a_date}
                  id={request.uuid}

                />
              </div>
            ))}
          </div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  ):navigate("/");
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
      <div className="Issued-request-body-col6">
        <center> {props.id}</center>
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
        <center> {props.a_date}</center>
      </div>
    </div>
  );
}

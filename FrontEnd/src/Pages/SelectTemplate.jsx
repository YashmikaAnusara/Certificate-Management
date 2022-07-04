import React, { useEffect, useState } from "react";
import Port from "../port";
import "../CSS/CertificateTemplates.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import axios from "axios";
import PDFIcon from "../Assets/pdf.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'
 import Loader from "../Components/Loader";

function CertificateTemplates() {
  const navigate = useNavigate()
  const [isOpen,setOpen]=useState(false)
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${Port}:8070/request/templates`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const backBtnHandler = () => {
    navigate(-1)
}
 
  return (
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
          <ArrowBackIcon onClick={backBtnHandler} className='back-btn' />
          <div className="certificate-temp-body-wrapper clearfix">
            <p className="certificate-temp-dis2">Select the certificate template...</p>
            <br/>
            <div>
              {details.map((detail, index) => (
                <Templates name={detail} key={index} setOpen={setOpen}/>
              ))}
            </div>
          </div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default CertificateTemplates;

function Templates(props) {
  
  const navigate = useNavigate()
  const selectTemplate=()=>{
    props.setOpen(true)
    setTimeout(()=>{
      props.setOpen(false)
      navigate("/certificate/details/confirm/:id");
    },2000)

  }
  return (

    <div className="certificate-temp-wrapper clearfix" onClick={selectTemplate}>
       
      <div className="pdf-icon-wrapper">
        <img src={PDFIcon} alt="pdf" className="pdf-icon" />
      </div>
      <div className="name-wrapper">{props.name}</div>
    </div>
  );
}

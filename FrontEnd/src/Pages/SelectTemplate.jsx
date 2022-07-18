import React, { useEffect, useState } from "react";
import Port from "../port";
import "../CSS/CertificateTemplates.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import axios from "axios";
import PDFIcon from "../Assets/doc.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate,useParams } from 'react-router-dom'
 import Loader from "../Components/Loader";

function CertificateTemplates() {
  const navigate = useNavigate()
  const [isOpen,setOpen]=useState(false)
  const [details, setDetails] = useState([]);
  const username=localStorage.getItem('username')
  
  useEffect(() => {
    setOpen(true)
    axios
      .get(`http://${Port}:8070/request/templates`)
      .then((res) => {
        if(res.data){
          setOpen(false)
          setDetails(res.data);
        }
      })
      .catch((err) => {
        if(err){
          setOpen(false)
          alert(err);
        }
      });
  }, []);
  const backBtnHandler = () => {
    navigate(-1)
}
 
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
  ):navigate("/");
}

export default CertificateTemplates;

function Templates(props) {
  const params=useParams()
  const navigate = useNavigate()
  const id=params.id;
  const nic=params.nic
  const type=params.type

  const selectTemplate=()=>{
    props.setOpen(true)
    setTimeout(()=>{
      props.setOpen(false)
      navigate(`/requests/detail/${id}/${nic}/${type}/certificate/${props.name}`);
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

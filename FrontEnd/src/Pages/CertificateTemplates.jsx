import React, { useEffect, useState } from "react";
import Port from "../port";
import "../CSS/CertificateTemplates.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import DOCXIcon from "../Assets/doc.png";
import FileDownload from "js-file-download";
import Loader from '../Components/Loader'

function CertificateTemplates() {
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState([]);
  const[isOpen,setIsOpen]=useState(false)
  const tempAddhandler = () => {
    setActive(!active);
  };

  useEffect(() => {
    setIsOpen(true)
    axios
      .get(`http://${Port}:8070/request/templates`)
      .then((res) => {
        if(res.data){
          setIsOpen(false)
          setDetails(res.data);
        }
      })
      .catch((err) => {
        if(err){
          setIsOpen(false)
          alert(err);
        }
      });
  }, []);

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
          <div className="certificate-temp-add-btn-wrapper clearfix">
            <p className="certificate-temp-add-dis">Add Template</p>
            {!active ? (
              <AddCircleOutlineOutlinedIcon
                className="certificate-temp-add-btn"
                fontSize="medium"
                onClick={tempAddhandler}
              />
            ) : (
              <DoDisturbIcon
                className="certificate-temp-add-btn"
                fontSize="medium"
                onClick={tempAddhandler}
                style={{ color: "red" }}
              />
            )}
            {active ? <TemplateAdd setIsOpen={setIsOpen}/> : null}
          </div>
          <hr />
          <div className="certificate-temp-body-wrapper clearfix">
            <p className="certificate-temp-dis2">My Template</p>
            <div>
              {details.map((detail, index) => (
                <Templates name={detail} key={index} setIsOpen={setIsOpen}/>
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

function TemplateAdd(props) {
  const [file, setFile] = useState("");
  const filename=file.name

  const fileUploadHandler = () => {
    const data = new FormData();
    data.append("template", file);
    if (!file) {
      alert("Please select a file!");
    } else if ((filename.split('.').pop())!=='docx') {
      alert("Please select a 'docx' format file!");
    } else {
      props.setIsOpen(true)
      axios
        .post(`http://${Port}:8070/template/save`, data)
        .then(() => {
          setTimeout(()=>{
            props.setIsOpen(false)
            alert("Template added successful!");
            window.location.reload(false);
          },2000)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="tempplate-adding-wrapper clearfix">
      <form>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <FileUploadOutlinedIcon
          style={{ color: "green" }}
          fontSize="medium"
          className="upload-btn"
          onClick={fileUploadHandler}
        />
      </form>
    </div>
  );
}

function Templates(props) {
  const tempDeleteHandler = () => {
    const confirmBox = window.confirm(
      "Are you sure want to remove this template?"
    );
    if (confirmBox === true) {
      props.setIsOpen(true)
      axios
        .delete(`http://${Port}:8070/request/delete/template/${props.name}`)
        .then((res) => {
          if(res.data){
            props.setIsOpen(false)
            alert(res.data);
            window.location.reload(false);
          }
        })
        .catch((err) => {
          if(err){
            props.setIsOpen(false)
            alert(err);
          }
        });
    }
  };
  const tpmViewHandler = () => {
    props.setIsOpen(true)
    axios({
      url: `http://${Port}:8070/request/template/${props.name}`,
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        if(res.data){
          props.setIsOpen(false)
          FileDownload(res.data, `${props.name}`);
        }
      })
      .catch((err) => {
        if(err){
          props.setIsOpen(false)
          alert(err);
        }
      });
  };
  return (
    <div className="certificate-temp-wrapper clearfix">
      <div id="deleteIcon">
        <DeleteIcon fontSize="small" onClick={tempDeleteHandler} />
      </div>
      <div className="pdf-icon-wrapper" onClick={tpmViewHandler}>
        <img src={DOCXIcon} alt="pdf" className="pdf-icon" />
      </div>
      <div className="name-wrapper">{props.name}</div>
    </div>
  );
}

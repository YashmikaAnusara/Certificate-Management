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
import PDFIcon from "../Assets/pdf.png";
import FileDownload from "js-file-download";

function CertificateTemplates() {
  const [active, setActive] = useState(false);
  const [details, setDetails] = useState([]);
  const tempAddhandler = () => {
    setActive(!active);
  };

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
            {active ? <TemplateAdd /> : null}
          </div>
          <hr />
          <div className="certificate-temp-body-wrapper clearfix">
            <p className="certificate-temp-dis2">My Template</p>
            <div>
              {details.map((detail, index) => (
                <Templates name={detail} key={index} />
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

function TemplateAdd() {
  const [file, setFile] = useState("");

  const fileUploadHandler = () => {
    const data = new FormData();
    data.append("template", file);
    if (!file) {
      alert("Please select a file!");
    } else if (!file) {
      alert("Please select a file!");
    } else {
      axios
        .post(`http://${Port}:8070/template/save`, data)
        .then(() => {
          alert("Template added successful!");
          window.location.reload(false);
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
      axios
        .delete(`http://${Port}:8070/request/delete/template/${props.name}`)
        .then((res) => {
          alert(res.data);
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const tpmViewHandler = () => {
    axios({
      url: `http://localhost:8070/request/template/${props.name}`,
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        FileDownload(res.data, `${props.name}`);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="certificate-temp-wrapper clearfix">
      <div id="deleteIcon">
        <DeleteIcon fontSize="small" onClick={tempDeleteHandler} />
      </div>
      <div className="pdf-icon-wrapper" onClick={tpmViewHandler}>
        <img src={PDFIcon} alt="pdf" className="pdf-icon" />
      </div>
      <div className="name-wrapper">{props.name}</div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../CSS/RequestDetails.css";
import MonNavBar from "./MobNavBar";
import AdminNavBar from "./AdminNavBar";
import AccountMenu from "./Profile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import FileDownload from "js-file-download";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Port from '../port'


function IssuedCertificateDetails() {
    const params=useParams()
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [details,setDetails]=useState({})
  const id = params.id
  const nic=params.nic
  const backBtnHandler = () => {
    navigate(-1);
  };
  useEffect(() => {
    axios({
      url: `http://${Port}:8070/request/certificate/${id}`,
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    
    axios.get(`http://${Port}:8070/request/issued/details/${id}/${nic}`)
    .then((res)=>{
        setDetails(res.data)
    })
    .catch((err)=>{
        alert(err)
    })
  }, [id,nic]);

  const viewHandler = () => {
    const file = new Blob([data], { type: "application/pdf" });

    const fileURL = URL.createObjectURL(file);

    window.open(fileURL);
  };

  const downloadBtnHandler = () => {
    FileDownload(data, `${id}.pdf`);
  };
  return (
    <div className="container">
      <div className="mob-navbar-wrapper">
        <MonNavBar />
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
          <ArrowBackIcon onClick={backBtnHandler} className="back-btn" />
          <RemoveRedEyeIcon onClick={viewHandler} className="download-btn" />
          <FileDownloadOutlinedIcon
            onClick={downloadBtnHandler}
            className="download-btn"
          />

          <div className="student-request-details-header-wrapper">
            <div className="student-request-id">
              <p>102065042364BB</p>
            </div>
            <div className="student-request-timedate">
              <p>
                Request Date: <b>{details.s_date ? details.s_date : "-"}</b>
              </p>
              <p>
                Approved Date: <b>{details.a_date ? details.a_date : "-"}</b>
              </p>
            </div>
          </div>
          <div className="student-request-details-body-wrapper">
            <div className="student-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Registration No</p>
                <p className="student-question">Student Name</p>
                <p className="student-question">NIC</p>
                <p className="student-question">Email Address</p>
                <p className="student-question">Contact No</p>
                <p className="student-question">Occupation</p>
                <p className="student-question">Assignment Submission Date</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">{details.ms_email_id ? details.ms_email_id : "-"}</p>
                <p className="student-answer">{details.name ? details.name : "-"}</p>
                <p className="student-answer">{details.nic ? details.nic : "-"}</p>
                <p className="student-answer">{details.email ? details.email : "-"}</p>
                <p className="student-answer">{details.p_number ? details.p_number : "-"}</p>
                <p className="student-answer">{details.occupation ? details.occupation : "-"}</p>
                <p className="student-answer">{details.a_submission_d ? details.a_submission_d : "-"}</p>
              </div>
            </div>
            <hr />
            <div className="course-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Class ID</p>
                <p className="student-question">Name of Certificate applying for </p>
                <p className="student-question">Name of the Course Attended</p>
                <p className="student-question">Lecturer Name</p>
                <p className="student-question">Start date of the course</p>
                <p className="student-question">End date of the course</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">{details.class_id ? details.class_id : "-"}</p>
                <p className="student-answer">{details.name_cerificate ? details.name_cerificate : "-"}</p>
                <p className="student-answer">{details.name_c_attended ? details.name_c_attended : "-"}</p>
                <p className="student-answer">{details.name_lecturer ? details.name_lecturer : "-"}</p>
                <p className="student-answer">{details.s_date_course ? details.s_date_course : "-"}</p>
                <p className="student-answer">{details.e_date_course ? details.e_date_course : "-"}</p>
              </div>
            </div>
            <hr />
            <div className="feedback-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Have you completed the online assignment submission?</p>
                <p className="student-question">Do you require a TVEC Certificate?</p>
                <p className="student-question">How do you know about CAAD Center?</p>
                <p className="student-question">Do you recommended CADD center courses for others?</p>
                <p className="student-question">Learning experience at CADD Center Lanka</p>
                <p className="student-question">Lecturer's training proficiency</p>
                <p className="student-question">Student coordination</p>
                <p className="student-question">Have you completed the course fee payment?</p>
                <p className="student-question">Name of the branch inquired at?</p>
                <p className="student-question">Name of the contact person</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">{details.c_o_a_submission ? details.c_o_a_submission : "-"}</p>
                <p className="student-answer">{details.tvec_certificate ? details.tvec_certificate : "-"}</p>
                <p className="student-answer">{details.k_a_cadd_center ? details.k_a_cadd_center : "-"}</p>
                <p className="student-answer">{details.r_cadd_center ? details.r_cadd_center : "-"}</p>
                <p className="student-answer">{details.r_l_experience ? details.r_l_experience : "-"}</p>
                <p className="student-answer">{details.l_t_proficiency ? details.l_t_proficiency : "-"}</p>
                <p className="student-answer">{details.s_coordination ? details.s_coordination : "-"}</p>
                <p className="student-answer">{details.c_fee_payment ? details.c_fee_payment : "-"}</p>
                <p className="student-answer">{details.b_inquired ? details.b_inquired : "-"}</p>
                <p className="student-answer">{details.c_person ? details.c_person : "-"}</p>
              </div>
            </div>
          </div>
          <br />

          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default IssuedCertificateDetails;

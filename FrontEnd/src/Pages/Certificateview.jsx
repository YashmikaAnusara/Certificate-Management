import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/AdminHome.css";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Port from "../port";
import Loader from "../Components/Loader";
function Certificateview() {
  const params = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [downloadBtn, setDownloadBtn] = useState(false);
  const [content,setContent]=useState({})
  const id = params.id;
  const nic = params.nic;
  const tmpName = params.tempid;
  const type = params.type;

  const today = new Date();
  const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

  const data = {
    name:details.name,
    branch:details.b_inquired,
    sDate:details.s_date_course,
    eDate:details.e_date_course,
    msID:details.ms_email_id,
    cName:content.c_name,
    courses:content.c_content,
    cDuration:content.c_duration,
    test:content.test,
    
  }

  const issuedData={
    uuid: id,
    ms_email_id:  details.ms_email_id,
    a_submission_d:  details.a_submission_d,
    name: details.name,
    email: details.email,
    p_number: details.p_number,
    nic: details.nic,
    organization: details.organization,
    occupation: details.occupation,
    class_id: details.class_id,
    name_cerificate:type,
    name_c_attended: details.name_c_attended,
    name_lecturer: details.name_lecturer,
    s_date_course: details.s_date_course,
    e_date_course: details.e_date_course,
    c_o_a_submission: details.c_o_a_submission,
    tvec_certificate: details.tvec_certificate,
    k_a_cadd_center: details.k_a_cadd_center,
    r_cadd_center: details.r_cadd_center,
    r_l_experience: details.r_l_experience,
    l_t_proficiency: details.l_t_proficiency,
    s_coordination: details.s_coordination,
    c_fee_payment: details.c_fee_payment,
    b_inquired: details.b_inquired,
    c_person: details.c_person,
    feedbak: details.feedbak,
    bank_slip: details.bank_slip,
    s_date: details.s_date,
    s_month: details.s_month,
    a_date: date
  }

  useEffect(() => {
    setIsOpen(true);
    axios
      .get(`http://${Port}:8070/request/details/${id}/${nic}`)
      .then((res) => {
        if (res.data) {
          setIsOpen(false);
          setDetails(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          setIsOpen(false);
          alert(err);
        }
      });

      axios
      .get(`http://${Port}:8070/request/course/content/${type}`)
      .then((res) => {
        if (res.data) {
          setContent(res.data);
           
        }
      })
      .catch((err) => {
        if (err) {
          setIsOpen(false);
          alert(err);
        }
      });
    }, [nic, id,type]);
    
     
  const certificateGenarateHandler = () => {
    setIsOpen(true);
    axios
      .post(
        `http://${Port}:8070/request/genarate/certificate/${id}/${tmpName}`,data,content )
      .then((res) => {
        if (res.data === true) {
          setIsOpen(false);
          setDownloadBtn(true);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const viewHandler = () => {
    axios({
      url: `http://${Port}:8070/request/certificate/${id}`,
      method: "GET",
      responseType: "blob",
    })
      .then((res) => {
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const sendhandler = () => {
    const confirmBox = window.confirm(
      "Are you sure want to send this certificate?"
    );
    if (confirmBox === true) {
      setIsOpen(true);
      const send = new Promise((resolve, reject) => {
        axios
          .get(`http://${Port}:8070/request/send/${id}/${details.email}`)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });

      send
        .then((res) => {
          if (res) {
            const insertIssues = new Promise((resolve, reject) => {
              axios
                .post(`http://${Port}:8070/request/save/issued/details`, issuedData)
                .then((res) => { 
                  resolve(res);
                })
                .catch((err) => {
                  reject(err);
                });
            }); 
            insertIssues.then((response) => {
              if (response) {
                axios 
                  .delete(`http://${Port}:8070/request/remove/details/${id}`)
                  .then(() => {
                    setIsOpen(false);
                    alert("Done!");
                    navigate("/issue/request");
                  })
                  .catch((err) => {
                    alert(err);
                  });
              }
            });
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const cancelHandler = () => {
    const confirmBox = window.confirm(
      "Are you sure want to cancel this request?"
    );
    if (confirmBox === true) {
      setIsOpen(true);
      axios
        .delete(`http://${Port}:8070/request/delete/certificate/${id}`)
        .then((res) => {
          if (res.data === true)
            setTimeout(() => {
              setIsOpen(false);
              navigate("/pending/request");
            }, 2000);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="container">
      <Loader open={isOpen} />
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
          <br />
          {downloadBtn ? (
            <div>
              <RemoveRedEyeIcon
                onClick={viewHandler}
                className="download-btn"
              />
              <p className="download-btn">
                Check the certificate befor send it...{" "}
              </p>
            </div>
          ) : (
            <p className="download-btn" style={{ color: "blue" }}>
              Click "Genarate" Button to get a certificate...
            </p>
          )}

          <br />
          <br />
          <br />
          <div className="student-request-details-body-wrapper">
            <div className="student-details-body-wrapper">
              <div className="student-questions-wrapper">
                <p className="student-question">Student Name</p>
                <p className="student-question">NIC</p>
                <p className="student-question">Email Address</p>
                <p className="student-question">Contact No</p>
                <p className="student-question">Occupation</p>
                <p className="student-question">Assignment Submission Date</p>
              </div>
              <div className="student-answer-wrapper">
                <p className="student-answer">
                  {details.name ? details.name : "-"}
                </p>
                <p className="student-answer">
                  {details.nic ? details.nic : "-"}
                </p>
                <p className="student-answer">
                  {details.email ? details.email : "-"}
                </p>
                <p className="student-answer">
                  {details.p_number ? details.p_number : "-"}
                </p>
                <p className="student-answer">
                  {details.occupation ? details.occupation : "-"}
                </p>
                <p className="student-answer">
                  {details.a_submission_d ? details.a_submission_d : "-"}
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          {downloadBtn ? (
            <div>
              <center>
                <button className="approve-btn" onClick={sendhandler}>
                  Send
                </button>
                <button className="reject-btn" onClick={cancelHandler}>
                  Cancel
                </button>
              </center>
            </div>
          ) : (
            <center>
              <button
                className="check-btn"
                onClick={certificateGenarateHandler}
              >
                Genarate
              </button>
            </center>
          )}

          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default Certificateview;

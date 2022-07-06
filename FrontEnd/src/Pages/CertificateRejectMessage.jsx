import React,{useEffect,useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import AdminNavBar from "../Components/AdminNavBar";
import MobNavBar from "../Components/MobNavBar";
import AccountMenu from "../Components/Profile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../CSS/RequestDetails.css";
import axios from "axios";
import Port from "../port";
import Loader from '../Components/Loader'
function CertificateRejectMessage() {
  const navigate = useNavigate();
  const params=useParams()
  const[message,setMessage]=useState()
  let id=params.id;
  let nic=params.nic
  const [details, setDetails] = useState({});
  const [isOpen,setIsOpen]=useState(false)

  const backBtnHandler = () => {
    navigate(-1);
  };
  const today = new Date();
  const date=  today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  useEffect(() => {
    setIsOpen(true)
    axios
      .get(`http://${Port}:8070/request/details/${id}/${nic}`)
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
  }, [id, nic]);

  const data={
    id:details.id,
    ms_email_id:details.ms_email_id,
    a_submission_d:details.a_submission_d,
    name: details.name,
    email: details.email,
    p_number: details.p_number,
    nic: details.nic,
    organization: details.organization,
    occupation: details.occupation,
    class_id: details.class_id,
    name_cerificate: details.name_cerificate,
    name_c_attended: details.name_c_attended,
    name_lecturer: details.name_lecturer,
    s_date_course: details.s_date_course,
    e_date_course: details.e_date_course,
    c_o_a_submission: details.c_o_a_submission,
    tvec_certificate: details.tvec_certificate,
    k_a_cadd_center: details.k_a_cadd_center,
    r_cadd_center: details.r_cadd_center,
    r_l_experience: parseInt(details.r_l_experience),
    l_t_proficiency: parseInt(details.l_t_proficiency),
    s_coordination: parseInt(details.s_coordination),
    c_fee_payment: details.c_fee_payment,
    c_person: details.c_person,
    feedbak: details.feedbak,
    s_date: details.s_date,
    r_date: date,
    message: message
  }

  const submitHandler = () => {
    setIsOpen(true)
    axios
      .post(`http://${Port}:8070/request/reject/${id}/${nic}`,data)
      .then((res) => {
        if(res.data){
          setTimeout(()=>{
            setIsOpen(false)
            alert("Done!")
            navigate('/reject/request')
          },2000)
        }
      })
      .catch((err) => {
        alert(err);
      });
     
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
          <ArrowBackIcon onClick={backBtnHandler} className="back-btn" />
          <div className="student-request-details-header-wrapper">
            <div className="student-request-id">
              <p>102065042364BB</p>
            </div>
            <div className="student-request-timedate">
              <p>
                Request Date: <b>2022.06.21</b>
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
              <p className="student-answer">
                  {details.nic ? details.nic : "-"}
                </p>
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
            <hr />
            <div className="student-request-details-body-wrapper">
              <center>
                <textarea
                  rows="5"
                  className="message-area"
                  placeholder="Enter your reason..."
                  onChange={(event)=>{setMessage(event.target.value)}}
                  
                />
              </center>
              <center>
                <button className="approve-btn" onClick={submitHandler}>
                  Submit
                </button>
              </center>
            </div>
          </div>
          {/* ------------------------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default CertificateRejectMessage;

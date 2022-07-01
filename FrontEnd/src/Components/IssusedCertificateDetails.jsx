import React,{useEffect,useState} from 'react'
import '../CSS/RequestDetails.css'
import MonNavBar from './MobNavBar'
import AdminNavBar from './AdminNavBar'
import AccountMenu from './Profile'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FileDownload from 'js-file-download'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
 

function IssuedCertificateDetails() {
    const navigate = useNavigate()
    const [data, setData] = useState()
    const id = "output"
    const backBtnHandler = () => {
        navigate(-1)
    }
    useEffect(()=>{
        axios({
            url: `http://localhost:8070/request/certificate/${id}`,
            method: "GET",
            responseType: "blob"
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    },[id])

    const viewHandler = () => {
        const file = new Blob(
            [data],
            { type: 'application/pdf' });

        const fileURL=URL.createObjectURL(file);

        window.open(fileURL);
    }

    const downloadBtnHandler = () => {
        
        FileDownload(data, `${id}`)

    }
    return (
        <div className='container'>
            <div className='mob-navbar-wrapper'>
                <MonNavBar />
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
                    <ArrowBackIcon onClick={backBtnHandler} className='back-btn' />
                    <RemoveRedEyeIcon onClick={viewHandler} className='download-btn' />
                    <FileDownloadOutlinedIcon onClick={downloadBtnHandler} className='download-btn' />

                    <div className='student-request-details-header-wrapper'>
                        <div className='student-request-id'>
                            <p>102065042364BB</p>
                        </div>
                        <div className='student-request-timedate'>
                            <p>Request Date: <b>2022.06.21</b></p>
                            <p>Approved Date: <b>2022.06.21</b></p>
                        </div>
                    </div>
                    <div className='student-request-details-body-wrapper'>
                        <div className='student-details-body-wrapper'>
                            <div className='student-questions-wrapper'>
                                <p className='student-question'>Registration No</p>
                                <p className='student-question'>Student Name</p>
                                <p className='student-question'>NIC</p>
                                <p className='student-question'>Email Address</p>
                                <p className='student-question'>Contact No</p>
                                <p className='student-question'>Occupation</p>
                                <p className='student-question'>Assignment Submission Date</p>
                            </div>
                            <div className='student-answer-wrapper'>
                                <p className='student-answer'>Registration No</p>
                                <p className='student-answer'>Student Name</p>
                                <p className='student-answer'>NIC</p>
                                <p className='student-answer'>Email Address</p>
                                <p className='student-answer'>Contact No</p>
                                <p className='student-answer'>Occupation</p>
                                <p className='student-answer'>Assignment Submission Date</p>
                            </div>
                        </div>
                        <hr />
                        <div className='course-details-body-wrapper'>
                            <div className='student-questions-wrapper'>
                                <p className='student-question'>Class ID</p>
                                <p className='student-question'>Name of Certificate applying for </p>
                                <p className='student-question'>Name of the Course Attended</p>
                                <p className='student-question'>Lecturer Name</p>
                                <p className='student-question'>Start date of the course</p>
                                <p className='student-question'>End date of the course</p>
                            </div>
                            <div className='student-answer-wrapper'>
                                <p className='student-answer'>Class ID</p>
                                <p className='student-answer'>Name of Certificate applying for </p>
                                <p className='student-answer'>Name of the Course Attended</p>
                                <p className='student-answer'>Lecturer Name</p>
                                <p className='student-answer'>Start date of the course</p>
                                <p className='student-answer'>End date of the course</p>
                            </div>
                        </div>
                        <hr />
                        <div className='feedback-details-body-wrapper'>
                            <div className='student-questions-wrapper'>
                                <p className='student-question'>Have you completed the online assignment submission?</p>
                                <p className='student-question'>Do you require a TVEC Certificate? </p>
                                <p className='student-question'>How do you know about CAAD Center?</p>
                                <p className='student-question'>Do you recommended CADD center courses for others?</p>
                                <p className='student-question'>Learning experience at CADD Center Lanka</p>
                                <p className='student-question'>Lecturer's training proficiency</p>
                                <p className='student-question'>Student coordination</p>
                                <p className='student-question'>Have you completed the course fee payment?</p>
                                <p className='student-question'>Name of the branch inquired at?</p>
                                <p className='student-question'>Name of the contact person</p>
                            </div>
                            <div className='student-answer-wrapper'>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                                <p className='student-answer'>Yes</p>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* ------------------------------------------------------ */}
                </div>
            </div>
        </div>
    )
}

export default IssuedCertificateDetails
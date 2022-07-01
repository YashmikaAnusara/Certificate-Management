import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../CSS/AdminHome.css'
import AdminNavBar from '../Components/AdminNavBar'
import MobNavBar from '../Components/MobNavBar'
import AccountMenu from '../Components/Profile'
import FileDownload from 'js-file-download'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Port from '../port'

function Certificateview() {
    const params = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState()
    const id = params.id
    const backBtnHandler = () => {

        navigate(-1)
    }

    useEffect(() => {
        axios({
            url: `http://${Port}:8070/request/certificate/${id}`,
            method: "GET",
            responseType: "blob"
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }, [id])

    const viewHandler = () => {
        const file = new Blob(
            [data],
            { type: 'application/pdf' });

        const fileURL = URL.createObjectURL(file);

        window.open(fileURL);
    }

    const downloadBtnHandler = () => {

        FileDownload(data, `${id}.pdf`)

    }
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
                    <ArrowBackIcon onClick={backBtnHandler} className='back-btn' />
                    <RemoveRedEyeIcon onClick={viewHandler} className='download-btn' />
                    <FileDownloadOutlinedIcon onClick={downloadBtnHandler} className='download-btn' />
                    <p className='download-btn'>Check the certificate befor send it... </p>
                    <br/><br/><br/><br/>
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
                    </div>
                    <br/><br/>
                    <hr />
                    <br/><br/>
                    <center> <button className='approve-btn' >Send</button><button className='reject-btn'> Cancel</button></center>
 
                    {/* ------------------------------------------------------ */}
                </div>
            </div>
        </div>
    )
}

export default Certificateview
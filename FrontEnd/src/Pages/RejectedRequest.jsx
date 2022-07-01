import React from 'react'
import '../CSS/RejectedCertificate.css'
import AdminNavBar from '../Components/AdminNavBar'
import MobNavBar from '../Components/MobNavBar'
import AccountMenu from '../Components/Profile'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom'

function RejectedRequest() {

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
                    <div className='rejected-request-status-wrapper clearfix'>
                        <div><input type="search" placeholder='Search...' className='certificate-request-search' /> </div>
                        <div className='rejected-request-status'> <FiberManualRecordIcon fontSize='small' style={{ color: "red" }} /><p style={{ marginLeft: "5px", fontSize: "14px", color: "black" }}>Rejected</p> </div>
                    </div>
                    <div className='rejected-request-table-wrapper'>
                        <div className='rejected-request-table-header'>
                            <div id='rejected-request-body-col1'><center> Status</center></div>
                            <div id='rejected-request-body-col2'><center> Reg No</center></div>
                            <div id='rejected-request-body-col3'><center> Name</center></div>
                            <div id='rejected-request-body-col4'><center> Submited Date</center></div>
                            <div id='rejected-request-body-col5'><center> Rejected Date</center></div>
                        </div>

                        <RejectedRequestTable />
                        <RejectedRequestTable/>
                        <RejectedRequestTable />
                        <RejectedRequestTable />

                    </div>
                    {/* ------------------------------------------------------ */}
                </div>
            </div>
        </div>
    )
}

export default RejectedRequest

function RejectedRequestTable() {
    const navigate=useNavigate()
    const rejectDetailsHandler = () => {
        navigate("/rejected/certificate/details")
    }
    return (
        <div className='rejected-request-table-body' onClick={rejectDetailsHandler}>
            <div className='rejected-request-body-col1'><center> <FiberManualRecordIcon fontSize='small' style={{ color: "red" }} /></center></div>
            <div className='rejected-request-body-col2'><center> ID</center></div>
            <div className='rejected-request-body-col3'><center> Name</center></div>
            <div className='rejected-request-body-col4'><center> Submited Date</center></div>
            <div className='rejected-request-body-col5'><center> Issued Date</center></div>
        </div>
    )
}
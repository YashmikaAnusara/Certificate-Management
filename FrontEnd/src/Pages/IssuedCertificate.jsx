import React from 'react'
import '../CSS/IssuedCertificate.css'
import AdminNavBar from '../Components/AdminNavBar'
import MobNavBar from '../Components/MobNavBar'
import AccountMenu from '../Components/Profile'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom'


function IssuedCertificate() {

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
                    <div className='Issued-request-status-wrapper clearfix'>
                        <div><input type="search" placeholder='Search...' className='certificate-request-search' /> </div>
                        <div className='Issued-request-status'><div className='approved'> <FiberManualRecordIcon fontSize='small' style={{ color: "green" }} /></div><p style={{ marginLeft: "5px", fontSize: "14px", color: "black" }}>Approved</p> </div>
                    </div>
                    <div className='Issued-request-table-wrapper'>
                        <div className='Issued-request-table-header'>
                            <div id='Issued-request-body-col1'><center> Status</center></div>
                            <div id='Issued-request-body-col2'><center> Reg No</center></div>
                            <div id='Issued-request-body-col3'><center> Name</center></div>
                            <div id='Issued-request-body-col4'><center> Submited Date</center></div>
                            <div id='Issued-request-body-col5'><center> Approved Date</center></div>
                        </div>
                        <IssuedRequestTable />
                        <IssuedRequestTable />
                        <IssuedRequestTable />

                    </div>
                    {/* ------------------------------------------------------ */}
                </div>
            </div>
        </div>
    )
}
export default IssuedCertificate

function IssuedRequestTable() {
    const navigate=useNavigate()
    const issuedetailsHandler = () => {
        navigate('/issued/certificate/details')
    }

    return (

        <div className='Issued-request-table-body' onClick={issuedetailsHandler}>
            <div className='Issued-request-body-col1'><center> <FiberManualRecordIcon fontSize='small' style={{ color: "green" }} /></center></div>
            <div className='Issued-request-body-col2'><center> ID</center></div>
            <div className='Issued-request-body-col3'><center> Name</center></div>
            <div className='Issued-request-body-col4'><center> Submited Date</center></div>
            <div className='Issued-request-body-col5'><center> Approved Date</center></div>
        </div>

    )
}
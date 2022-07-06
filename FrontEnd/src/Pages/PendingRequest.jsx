import React, { useEffect, useState } from 'react'
import '../CSS/PendingRequest.css'
import AdminNavBar from '../Components/AdminNavBar'
import MobNavBar from '../Components/MobNavBar'
import AccountMenu from '../Components/Profile'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Port from '../port'

function PendingRequest() {
    const [details,setDetails]=useState([])
    const [found,setFound] = useState("");

    useEffect(()=>{
        axios.get(`http://${Port}:8070/request/details`)
        .then((res)=>{
            setDetails(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    },[])

    const requests = details.filter((data) => {
        return (
          data.nic.toLowerCase().includes(found.toLowerCase()) ||
          data.name.toLowerCase().includes(found.toLowerCase())

        );
      });

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
                    <div className='pending-request-status-wrapper clearfix'>
 
                        <div><input type="search" placeholder='Search...' className='pending-request-search' /> </div>
                        <div className='pending-request-status'><div className='pending'> <FiberManualRecordIcon  fontSize='small' style={{ color: "rgb(239, 129, 10)" }} /></div><p style={{ marginLeft: "5px", fontSize: "14px", color: "black" }}>Pending</p> </div>
 
                    </div>
                    <div className='pending-request-table-wrapper'>
                        <div className='pending-request-table-header'>
                            <div id='pending-request-body-col1'><center> Status</center></div>
                            <div id='pending-request-body-col6'><center> ID</center></div>
                            <div id='pending-request-body-col2'><center> NIC</center></div>
                            <div id='pending-request-body-col3'><center> Name</center></div>
                            <div id='pending-request-body-col4'><center> Submited Date</center></div>
                            <div id='pending-request-body-col5'><center> Action</center></div>
                        </div>
                        {requests.map((request,index)=>(
                            <div key={index}>
                                <PendingRequestTable ID={request.id} NIC={request.nic} Name={request.name} date={request.s_date}/>
                            </div>    
                        ))}

                    </div>
                    {/* ------------------------------------------------------ */}
                </div>
            </div>
        </div>
    )
}

export default PendingRequest

function PendingRequestTable(props) {
    const navigate=useNavigate()

    const detailsHandler = () => {
        navigate(`/requests/detail/${props.ID}/${props.NIC}`)
    }
    const viewHandler=()=>{
        navigate(`/requests/detail/${props.ID}/${props.NIC}`)
     }
    return (
        <div className='pending-request-table-body'>
            <div className='pending-request-body-col1' onClick={detailsHandler}><center> <FiberManualRecordIcon fontSize='small' style={{ color: "rgb(239, 129, 10)" }} /></center></div>
            <div className='pending-request-body-col6' onClick={detailsHandler}><center> {props.ID}</center></div>
            <div className='pending-request-body-col2' onClick={detailsHandler}><center> {props.NIC}</center></div>
            <div className='pending-request-body-col3' onClick={detailsHandler}><center> {props.Name}</center></div>
            <div className='pending-request-body-col4' onClick={detailsHandler}><center> {props.date}</center></div>
            <div className='pending-request-body-col5'><center> <RemoveRedEyeOutlinedIcon fontSize="small" style={{color:"green"}} onClick={viewHandler} className='view-request-btn'/></center></div>
        </div>
    )
}

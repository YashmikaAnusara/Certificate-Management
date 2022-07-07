import React,{useEffect,useState} from 'react'
import '../CSS/RejectedCertificate.css'
import AdminNavBar from '../Components/AdminNavBar'
import MobNavBar from '../Components/MobNavBar'
import AccountMenu from '../Components/Profile'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Port from '../port'
import Loader from '../Components/Loader'
function RejectedRequest() {
    const[details,setDetails]=useState([])
    const [found,setFound] = useState("");
    const [isOpen,setIsopen]=useState(false)

    useEffect(()=>{
        setIsopen(true)

        axios.get(`http://${Port}:8070/request/reject/certificates/details`)
        .then((res)=>{
            if(res.data){
                setIsopen(false)
                setDetails(res.data);
              }
        })
        .catch((err)=>{
            if(err){
                setIsopen(false)
                alert(err);
            }
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
             <Loader open={isOpen}/>
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
                        <div><input type="search" placeholder='Search...' className='certificate-request-search' onChange={(event) => {
                  setFound(event.target.value);
                }}/> </div>
                        <div className='rejected-request-status'><div className='rejected'> <FiberManualRecordIcon fontSize='small' style={{ color: "red" }} /></div><p style={{ marginLeft: "5px", fontSize: "14px", color: "black" }}>Rejected</p> </div>
                    </div>
                    <div className='rejected-request-table-wrapper'>
                        <div className='rejected-request-table-header'>
                            <div id='rejected-request-body-col1'><center> Status</center></div>
                            <div id='rejected-request-body-col2'><center> NIC</center></div>
                            <div id='rejected-request-body-col3'><center> Name</center></div>
                            <div id='rejected-request-body-col4'><center> Submited Date</center></div>
                            <div id='rejected-request-body-col5'><center> Rejected Date</center></div>
                        </div>
                            {requests.map((request,index)=>(
                                <div key={index}>
                                    <RejectedRequestTable nic={request.nic} name={request.name} s_date={request.s_date} r_date={request.r_date} id={request.id}/>
                                </div> 
                            ))}
                    </div>
                    {/* ------------------------------------------------------ */}
                </div>
            </div>
        </div>
    )
}

export default RejectedRequest

function RejectedRequestTable(props) {
    const navigate=useNavigate()
    const rejectDetailsHandler = () => {
        navigate(`/reject/request/${props.id}/${props.nic}`)
    }
    return (
        <div className='rejected-request-table-body' onClick={rejectDetailsHandler}>
            <div className='rejected-request-body-col1'><center> <FiberManualRecordIcon fontSize='small' style={{ color: "red" }} /></center></div>
            <div className='rejected-request-body-col2'><center> {props.nic}</center></div>
            <div className='rejected-request-body-col3'><center> {props.name}</center></div>
            <div className='rejected-request-body-col4'><center> {props.s_date}</center></div>
            <div className='rejected-request-body-col5'><center> {props.r_date}</center></div>
        </div>
    )
}
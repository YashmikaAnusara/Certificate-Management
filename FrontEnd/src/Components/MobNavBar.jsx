import React, { useState } from 'react'
import '../CSS/MobNavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';
import { NavLink } from 'react-router-dom'


import AccountMenu from './Profile';

function MonNavBar() {
    const [active, setActive] = useState(false)
    const navBarHandler = () => {
        setActive(!active)
    }
    return (
        <div className='mob-nav-container'>
            <div className='mob-nav-header clearfix'>
                <div className='mob-nav-header-logo'>

                    <button className='menu-btn' onClick={navBarHandler}><MenuIcon fontSize='large' /></button>
                </div>
                <div className='mob-nav-header-btn'>
                    <AccountMenu />
                </div>
            </div>
            {active && <div className='mob-nav-body'>
                <div className='mob-nav-body-links' ></div>
                <NavLink to="/dashboard" className='navbar-link'><div className='mob-nav-body-links' ><HomeOutlinedIcon /><p>Dashboard</p></div></NavLink>
                <NavLink to="/recent/request" className='navbar-link'><div className='mob-nav-body-links' ><MarkUnreadChatAltOutlinedIcon /><p>Recent Requests</p></div></NavLink>
                <NavLink to="/pending/request" className='navbar-link'><div className='mob-nav-body-links' ><MoreHorizOutlinedIcon /><p>Pending Request</p></div></NavLink>
                <NavLink to="/issue/request" className='navbar-link'><div className='mob-nav-body-links' ><CheckCircleOutlineOutlinedIcon /><p>Issued Certificate</p></div></NavLink>
                <NavLink to="/reject/request" className='navbar-link'><div className='mob-nav-body-links' ><DoDisturbAltOutlinedIcon /><p>Rejected Certificate</p></div></NavLink>
            </div>}

        </div>
    )
}

export default MonNavBar
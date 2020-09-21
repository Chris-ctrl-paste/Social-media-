import React from 'react'
import '../css/Header.css'
import logo from '../images/logo.png';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
// import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';

import { useStateValue } from '../context/StateProvider';




function Header() {

    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <img src={logo} alt="Logo" />

                <div className="header_input">
                    <SearchIcon />
                    <input placeholder="Search" type="text"  ></input>
                </div>

            </div>

            <div className="header_middle">
                <div className="header_option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StoreOutlinedIcon fontSize="large" />
                </div>
                {/* <div className="header_option">
                    <SupervisedUserCircleOutlinedIcon fontSize="large" />
                </div> */}
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName} </h4>

                    <IconButton >
                        <ContactsIcon style={{ color: "black" }} fontSize="large" />
                    </IconButton>
                    <IconButton >
                        <ForumIcon style={{ color: "black" }} fontSize="large" />
                    </IconButton>
                    <IconButton >
                        <NotificationsIcon style={{ color: "black" }} fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'

// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from '../context/StateProvider';


function Sidebar() {

    const [{ user }] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <a href="https://corona-numbers.web.app/"><SidebarRow Icon={LocalHospitalIcon} title="Covid-19 information center" /></a>
            {/* <SidebarRow Icon={EmojiFlagsIcon} title="Pages" /> */}
            <SidebarRow Icon={EmojiPeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />

            <SidebarRow Icon={StoreIcon} title="Marketplace" />
            <a href="https://www.youtube.com/" ><SidebarRow Icon={VideoLibraryIcon} title="Videos" /> </a>
            {/* <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" /> */}

        </div>
    )
}

export default Sidebar

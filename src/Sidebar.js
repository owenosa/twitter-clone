import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar(){
    return(
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon className="sidebar_twitter_icon"/>

            {/* Sidebar Option */}
            <SidebarOption active Icon ={HomeIcon} text = "Home"/>
            {/* Sidebar Option */}
            <SidebarOption Icon ={SearchIcon} text = "Explore"/>
            {/* Sidebar Option */}
            <SidebarOption Icon ={NotificationsNoneIcon} text = "Notifications"/>
            {/* Sidebar Option */}
            <SidebarOption Icon ={MailOutlineIcon} text = "Mail"/>
            {/* Sidebar Option */}
            <SidebarOption Icon ={BookmarkBorderIcon} text = "Bookmarks"/>
            {/* Sidebar Option */}
            <SidebarOption Icon ={ListAltIcon} text = "Lists"/>
            {/* Sidebar Option */}
            <SidebarOption Icon ={PermIdentityIcon} text = "Profile"/>
            {/* Sidebar Option */}
            <SidebarOption Icon ={MoreHorizIcon} text = "More"/>

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth=""> Tweet </Button>
        </div>
    );
}

export default Sidebar;
//import { ExpandMoreOutlined, VideoLibrary } from '@material-ui/icons';
import React , { useContext } from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LocalHospitalOutlinedIcon from "@material-ui/icons/LocalHospitalOutlined";
import { useStateValue } from "./StateProvider";
import userEvent from '@testing-library/user-event';
import { UserContext } from "./App";
function Sidebar() {
    const [user, setUser] = useContext(UserContext);
    return (
    <div className ="sidebar">
        <SidebarRow src={user.photoURL}
           title={user.photoURL}
                SidebarRow Icon ={LocalHospitalOutlinedIcon}
                 title="COVID-19 Information Center"
           />
           
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Learn More" />
    </div>
    );
}

export default Sidebar

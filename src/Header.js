import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };
    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img
                    src="https://the8-bit.com/wp-content/uploads/2020/10/Redesigned-Gmail.jpg"
                    alt=""
                />
            </div>
            <div className="header_middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon className="header_inputCart" />
            </div>
            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>
            </div>
        </div>
    )
}

export default Header
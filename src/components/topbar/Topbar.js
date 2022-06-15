import React from "react";
import "./Topbar.css";
import {
  NotificationsNone,
  Language,
  SettingsApplications,
} from "@mui/icons-material";
import avatar from "../../image/shobuj.png";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <span className="logo">Admin Panel</span>
        <div className="topRight">
          <div className="notificationContainer">
            <NotificationsNone />
            <span className="topIconBadg">2</span>
          </div>
          <div className="notificationContainer">
            <Language />
            <span className="topIconBadg">2</span>
          </div>
          <div className="notificationContainer">
            <SettingsApplications />
          </div>
          <div className="notificationContainer">
            <img src={avatar} alt="avatar" className="topAvatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

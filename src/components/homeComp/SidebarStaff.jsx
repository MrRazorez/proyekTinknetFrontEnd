import React from 'react'
import './Sidebar.css'
import AccountInfo from "..//../components/logo/user.png";
import PowerOut from "..//../components/logo/power-off.png";

import Logout from "../logout";

export default function sidebar() {
  return (

    <div className="sidebar">
        <div className="sidebarWrapper">       
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Akun</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <img src={AccountInfo} alt="" className="sidebarIcon" />
                Akun
              </li>
              <li onClick={Logout} className="sidebarListItem">
              <img src={PowerOut} alt="" className="sidebarIcon" />
                Keluar
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

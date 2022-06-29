import React from 'react'
import './Sidebar.css'
import AllInventory from "..//../components/logo/boxes.png";
import Inventory from "..//../components/logo/box.png";
import ShowStaff from "..//../components/logo/show_user.png";
import AddStaff from "..//../components/logo/add_user.png";
import EditStaff from "..//../components/logo/edit_user.png";
import AccountInfo from "..//../components/logo/user.png";
import PowerOut from "..//../components/logo/power-off.png";

import Logout from "../logout";

export default function sidebar() {
  return (

    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Dasboard</h3>
               <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <img src={AllInventory} alt="" className="sidebarIcon" />
                    Seluruh Data Barang
                    </li>
                    <li className="sidebarListItem">
                    <img src={Inventory} alt="" className="sidebarIcon" />
                    Gudang
                    </li>
                    <li className="sidebarListItem">
                    <img src={Inventory} alt="" className="sidebarIcon" />
                    Kantor
                    </li>
                    <li className="sidebarListItem">
                    <img src={Inventory} alt="" className="sidebarIcon" />
                    POP ANTV
                    </li>
                    <li className="sidebarListItem">
                    <img src={Inventory} alt="" className="sidebarIcon" />
                    POP INDOSIAR
                    </li>
                    <li className="sidebarListItem">
                    <img src={Inventory} alt="" className="sidebarIcon" />
                    POP Sumber Agung
                    </li>
                </ul>
              </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Kelola Staff</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <img src={AddStaff} alt="" className="sidebarIcon" />
                  Tambah Staff
                </li>
                <li className="sidebarListItem">
                <img src={EditStaff} alt="" className="sidebarIcon" />
                  Update Staff
                </li>
                <li className="sidebarListItem">
                <img src={ShowStaff} alt="" className="sidebarIcon" />
                  Lihat Staff
                </li>              
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Akun</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <img src={AccountInfo} alt="" className="sidebarIcon" />
                Informasi Akun
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

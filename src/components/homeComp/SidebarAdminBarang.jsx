import React from 'react'
import './Sidebar.css'
import AddInventory from "..//../components/logo/add-product.png";
import EditInventory from "..//../components/logo/edit-product.png";
import History from "..//../components/logo/history.png";
import AccountInfo from "..//../components/logo/user.png";
import PowerOut from "..//../components/logo/power-off.png";

import Logout from "../logout";

export default function sidebar() {
  return (

    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Kelola Barang</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <img src={AddInventory} alt="" className="sidebarIcon" />
                  Tambah
                </li>
                <li className="sidebarListItem">
                <img src={EditInventory} alt="" className="sidebarIcon" />
                  Update
                </li>            
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Riwayat</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <img src={History} alt="" className="sidebarIcon" />
                Lihat Riwayat
              </li>              
            </ul>
          </div>
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

import React from 'react'
import './Sidebar.css'
import AllInventory from "..//../components/logo/boxes.png";
import Inventory from "..//../components/logo/box.png";
import AddInventory from "..//../components/logo/add-product.png";
import EditInventory from "..//../components/logo/edit-product.png";
import EditLocation from "..//../components/logo/rotate.png";
import History from "..//../components/logo/history.png";
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
            <h3 className="sidebarTitle">Kelola Barang</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                <img src={AddInventory} alt="" className="sidebarIcon" />
                  Tambah Barang
                </li>
                <li className="sidebarListItem">
                <img src={EditInventory} alt="" className="sidebarIcon" />
                  Update Barang
                </li>
                <li className="sidebarListItem">
                <img src={EditLocation} alt="" className="sidebarIcon" />
                  Update Lokasi
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

import React from 'react'
import './Sidebar.css'
import {
  AllInbox,
  Inbox,
  CreateNewFolder,
  EditLocation,
  Edit,
  History,
  AccountBox,
  PowerSettingsNew

} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (

    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">Dasboard</h3>
               <ul className="sidebarList">
                    <Link to="/" className="link">
                    <li className="sidebarListItem">
                    <AllInbox className="siebarIcon"/>
                    Seluruh Data Barang
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                    <Inbox className="siebarIcon"/>
                    Gudang
                    </li>
                    <li className="sidebarListItem">
                    <Inbox className="siebarIcon"/>
                    Office
                    </li>
                    <li className="sidebarListItem">
                    <Inbox className="siebarIcon"/>
                    POP ANTV
                    </li>
                    <li className="sidebarListItem">
                    <Inbox className="siebarIcon"/>
                    POP INDOSIAR
                    </li>
                    <li className="sidebarListItem">
                    <Inbox className="siebarIcon"/>
                    POP Sumber Agung
                    </li>
                </ul>
              </div>
            <div className="sidebarMenu">
            <h3 className="sidebarTitle">Kelola Barang</h3>
            <ul className="sidebarList">
                <Link to="/users" className="link">
                <li className="sidebarListItem">
                  <CreateNewFolder className="sidebarIcon" />
                  Tambah Barang
                </li>
                </Link>
                <Link to="/productList" className="link">
                <li className="sidebarListItem">
                  <Edit className="sidebarIcon" />
                  Update Barang
                </li>
                </Link>
              <li className="sidebarListItem">
                <EditLocation className="sidebarIcon" />
                Update Lokasi
              </li>              
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Riwayat</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <History className="sidebarIcon" />
                Lihat Riwayat
              </li>              
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Akun</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <AccountBox className="sidebarIcon" />
                Informasi Akun
              </li>
              <li className="sidebarListItem">
                <PowerSettingsNew className="sidebarIcon" />
                Keluar
              </li>              
            </ul>
          </div>
        </div>
    </div>
  )
}

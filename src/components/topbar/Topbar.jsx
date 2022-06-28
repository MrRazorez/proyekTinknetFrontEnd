import React from 'react'
import "./Topbar.css"
import Logo from "./tunas link.png"
import Hosting from "./hosting.png"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topleft">
              <h1 className="title"> Inventory Asset</h1>
              <span className="logo"> <img src={Hosting} alt="" className="Hosting" /></span>
            </div>
            
            <div className="topright">
                <div className="topbarIconsContainer">
                <span className="logo"> <img src={Logo} alt="" className="Logo" /></span>
                </div>
            </div>
        </div>
    </div>

  )
}

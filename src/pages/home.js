import React from "react";
import DesicionRole from "../components/roleTinknet";
import TopBar from "../components/homeComp/Topbar";
import SideBarAdminBarang from "../components/homeComp/SidebarAdminBarang";
import SideBarAdminRegister from "../components/homeComp/SidebarAdminRegister";
import SideBarStaff from "../components/homeComp/SidebarStaff";
import Boss from "./roles/boss";
import AdminBarang from "./roles/adminBarang";
import AdminRegister from "./roles/adminRegister";
import Staff from "./roles/staff";
import "./home.css"
export default function Home() {
    const dataRole = DesicionRole();
    console.log(dataRole);

    return (
        <div className="top">
            <TopBar/>
            <div className="side">
            <SideBarAdminBarang/>
                <div className="pages">
                {
                    !(localStorage.getItem("token"))? window.location.replace("login"):
                    (localStorage.getItem("token") === "jangan_login")?
                    window.location.replace("failed"):
                    (localStorage.getItem("token") === dataRole[0]["token"])?
                    <Boss/>:
                    (localStorage.getItem("token") === dataRole[1]["token"])?
                    <AdminBarang/>:
                    (localStorage.getItem("token") === dataRole[2]["token"])?
                    <AdminRegister/>:
                    <Staff/>
                }
                </div>
            </div>
        </div>
    );
}
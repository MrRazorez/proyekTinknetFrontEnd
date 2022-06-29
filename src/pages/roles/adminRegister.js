import React from "react";
import SideBarAdminRegister from "..//../components/homeComp/SidebarAdminRegister";
import TableOfficeTinknet from "../../components/tableOffice";

export default function AdminRegister() {
    return (
        <div className="side">
            <SideBarAdminRegister/>
            <div className="pages">
                <div>
                    <TableOfficeTinknet/>
                </div>
            </div>
        </div>
    );
}
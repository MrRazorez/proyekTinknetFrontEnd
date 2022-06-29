import React from "react";
import SideBarAdminBarang from "..//../components/homeComp/SidebarAdminBarang";
import TableOfficeTinknet from "../../components/tableOffice";

export default function AdminBarang() {
    return (
        <div className="side">
            <SideBarAdminBarang/>
            <div className="pages">
                <div className="TableList">
                    <TableOfficeTinknet/>
                </div>
            </div>
        </div>
    );
}
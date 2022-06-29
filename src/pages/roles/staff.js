import React from "react";
import SideBarStaff from "..//../components/homeComp/SidebarStaff";
import TableOfficeTinknet from "../../components/tableOffice";

export default function Staff() {
    return (
        <div className="side">
            <SideBarStaff/>
            <div className="pages">
                <div>
                    <TableOfficeTinknet/>
                </div>
            </div>
        </div>
    );
}
import "./sidebar.css";

import React from "react";
import TableOfficeTinknet from "../../components/tableOffice";
import Logout from "..//../components/logout";

export default function Staff() {
    return (
        <div>
            <TableOfficeTinknet/>
            <button className="ui submit black button" onClick={Logout}>Keluar</button>
        </div>
    );
}
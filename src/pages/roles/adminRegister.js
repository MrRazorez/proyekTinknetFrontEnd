import React from "react";
import TableOfficeTinknet from "../../components/tableOffice";
import Logout from "..//../components/logout";

export default function AdminRegister() {
    return (
        <div>
            <h1>Selamat Datang, Admin Tinknet!!!</h1>
            <TableOfficeTinknet/>
            <button className="ui submit black button" onClick={Logout}>Keluar</button>
        </div>
    );
}
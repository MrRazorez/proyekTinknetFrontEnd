import "../components/semantic-ui/components/grid.css";
import "../components/semantic-ui/components/button.css";

import React from "react";
import Logout from "../components/logout";
import TableOfficeTinknet from "../components/tableOffice";

export default function Home() {
    return (
        <body>
            {
                !(localStorage.getItem("token"))? window.location.replace("login"):
                (localStorage.getItem("token") === "jangan_login")?
                window.location.replace("failed"):
            <div className="ui middle aligned center aligned grid" style={{ height: "100vh"}}>
                <div className="column" style={{ maxWidth: 450 }}>
                    <h1>Selamat Datang, Karyawan Tinknet!!!</h1>
                    <TableOfficeTinknet/>
                    <button className="ui submit black button" onClick={Logout}>Keluar</button>
                </div>
            </div>
            }
        </body>
    );
}
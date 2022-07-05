import "./InfoAkun.css";
import React from "react";
import { useState } from "react";
import SidebarAdminRegister from "../../components/homeComp/SidebarAdminRegister";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import axios from "axios";
import "../../components/semantic-UI/button.css"

export default function AddStaff() {
  const dataRole = DesicionRole();
  const [namaPerangkat, setNamaPerangkat] = useState("");
  const [jenis, setJenis] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [status, setStatus] = useState("");
  const [kondisi, setKondisi] = useState("");
  const [lokasi, setLokasi] = useState("");

  const runValid = async (data) => {
    data.preventDefault();
    const getData = async () => {
      try {
          await axios.post("http://localhost:8000/api/databarang/store",{
            nama_perangkat: namaPerangkat,
            jenis: jenis,
            jumlah: jumlah,
            status: status,
            kondisi: kondisi,
            lokasi: lokasi
          })
          .then(
            function (response) {
              localStorage.setItem("msg", response.data.msg);
              window.location.replace("/dataconfirmed");
            }
          );
      } catch(error) {
          alert(error);
      }
    }

    getData();
  }

  return (
    <body>
      <div className="top">
          <TopBar/>
          {
            (localStorage.getItem("token") === dataRole[1]["token"])?
          <div className="side">
              <SidebarAdminRegister/>
              <div className="pages">
                  <div className="newStaff">
                  <h1 className="newStaffTitle">Tambah Staff</h1>
                  <form onSubmit={runValid}>
                      <div className="newStaffForm">
                      <div className="newStaffItem">
                      <label>Username Staff</label>
                      <input
                        type="text"
                        placeholder="..."
                        value={ namaPerangkat }
                        onChange={(data => setNamaPerangkat(data.target.value))}
                      />
                      </div>
                      <div className="newStaffItem">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="..."
                        value={ namaPerangkat }
                        onChange={(data => setNamaPerangkat(data.target.value))}
                      />
                      </div>
                      <div className="newStaffButton">
                      <button className="ui fluid large submit black button">Sunting Username dan Password</button>
                      </div>                      
                      </div>
                      
                  </form>
                  </div>
              </div>
          </div>:
          window.location.replace("/home")
          }
      </div>
    </body>
  );
}
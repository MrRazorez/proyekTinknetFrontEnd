import "./InfoAkun.css";
import React from "react";
import { useState } from "react";
import SidebarAdminBarang from "../../components/homeComp/SidebarAdminBarang";
import SidebarAdminRegister from "../../components/homeComp/SidebarAdminRegister";
import SidebarStaff from "../../components/homeComp/SidebarStaff";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import axios from "axios";
import "../../components/semantic-UI/button.css"

export default function AccInfo() {
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
          console.log(error);
      }
    }

    getData();
  }

  return (
    <body>
      <div className="top">
          <TopBar/>
          <div className="side">
              {
                (localStorage.getItem("token") === dataRole[1]["token"])?
                <SidebarAdminBarang/>:
                (localStorage.getItem("token") === dataRole[2]["token"])?
                <SidebarAdminRegister/>:
                <SidebarStaff/>
              }
              <div className="pages">
                  <div className="newStaff">
                  <h1 className="newStaffTitle">Ganti Nama Akun dan Kata Sandi</h1>
                  <form onSubmit={runValid}>
                      <div className="newStaffForm">
                      <div className="newStaffItem">
                      <label>Nama Akun</label>
                      <input
                        type="text"
                        placeholder="..."
                        value={ namaPerangkat }
                        onChange={(data => setNamaPerangkat(data.target.value))}
                      />
                      </div>
                      <div className="newStaffItem">
                      <label>Kata Sandi</label>
                      <input
                        type="password"
                        placeholder="..."
                        value={ namaPerangkat }
                        onChange={(data => setNamaPerangkat(data.target.value))}
                      />
                      </div>
                      <div className="newStaffButton">
                      <button className="ui fluid large submit black button">Sunting</button>
                      </div>                      
                      </div>
                      
                  </form>
                  </div>
              </div>
          </div>
      </div>
    </body>
  );
}
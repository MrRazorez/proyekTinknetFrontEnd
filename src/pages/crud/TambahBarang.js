import "./TambahBarang.css";
import React from "react";
import { useState } from "react";
import SideBarAdminBarang from "../../components/homeComp/SidebarAdminBarang";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import "../../components/semantic-UI/button.css"

export default function AddInventory() {
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
          const response = await fetch("http://localhost:8000/api/databarang/store?nama_perangkat="+namaPerangkat+"&jenis="+jenis+"&jumlah="+jumlah+"&status="+status+"&kondisi="+kondisi+"&lokasi="+lokasi);
          const json = await response.json();
          localStorage.setItem("msg", json.msg);
          window.location.replace("/home");
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
              <SideBarAdminBarang/>
              <div className="pages">
                  <div className="newInventory">
                  <h1 className="newInventoryTitle">Tambah Barang</h1>
                  <form onSubmit={runValid}>
                      <div className="newInventoryForm">
                      <div className="newInventoryItem">
                      <label>Nama Perangkat</label>
                      <input
                        type="text"
                        placeholder="Masukkan Nama Perangkat..."
                        value={ namaPerangkat }
                        onChange={(data => setNamaPerangkat(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Jenis Perangkat</label>
                      <input
                        type="text"
                        placeholder="Masukkan Jenis Perangkat... "
                        value={ jenis }
                        onChange={(data => setJenis(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Jumlah</label>
                      <input
                        type="text" placeholder="Masukkan Jumlah Perangkat..."
                        value={ jumlah }
                        onChange={(data => setJumlah(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Status</label>
                      <input
                        type="text"
                        placeholder="Masukkan Status Perangkat..."
                        value={ status }
                        onChange={(data => setStatus(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Kondisi</label>
                      <input
                        type="text"
                        placeholder="Masukkan Kondisi Perangkat..."
                        value={ kondisi }
                        onChange={(data => setKondisi(data.target.value))}
                      />
                      </div>
                      <div className="newInventoryItem">
                      <label>Lokasi</label>
                      <input
                        type="text"
                        placeholder="Masukkan Lokasi Perangkat..."
                        value={ lokasi }
                        onChange={(data => setLokasi(data.target.value))}
                      />
                      </div>
                      </div>
                      <div className="newInventoryButton">
                      <button className="ui fluid large submit black button">Tambah</button>
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
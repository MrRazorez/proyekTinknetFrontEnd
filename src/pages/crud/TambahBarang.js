import "./TambahBarang.css";
import React from "react";
import { useForm } from "react-hook-form";
import SideBarAdminBarang from "../../components/homeComp/SidebarAdminBarang";
import TopBar from "../../components/homeComp/topbar";
import DesicionRole from "../../components/roleTinknet";
import tambahInv from "../../components/olahBarang";
import "../../components/semantic-UI/button.css"

export default function NewUser() {
  const dataRole = DesicionRole();
  const {register, handleSubmit} = useForm();

  const runValid = (data) => {
    if (data) {
      tambahInv(data);
    }
    else {
      alert("MASUK, GOBLOK!!");
    }
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
                  <form onSubmit={handleSubmit(runValid)}>
                      <div className="newInventoryForm">
                      <div className="newInventoryItem">
                      <label>Nama Perangkat</label>
                      <input type="text" placeholder="Masukkan Nama Perangkat..." {...register("nama_perangkat")} />
                      </div>
                      <div className="newInventoryItem">
                      <label>Jenis Perangkat</label>
                      <input type="text" placeholder="Masukkan Jenis Perangkat... " {...register("jenis")} />
                      </div>
                      <div className="newInventoryItem">
                      <label>Jumlah</label>
                      <input type="number" id="quantity"  placeholder="Masukkan Jumlah Perangkat..." {...register("jumlah")} />
                      </div>
                      <div className="newInventoryItem">
                      <label>Status</label>
                      <input type="text" placeholder="Masukkan Status Perangkat..." {...register("status")}/>
                      </div>
                      <div className="newInventoryItem">
                      <label>Kondisi</label>
                      <input type="text" placeholder="Masukkan Kondisi Perangkat..." {...register("kondisi")} />
                      </div>
                      <div className="newInventoryItem">
                      <label>Lokasi</label>
                      <input type="text" placeholder="Masukkan Lokasi Perangkat..." {...register("lokasi")} />
                      </div>
                      </div>
                      <div className="newInventoryButton">
                      <button className="ui fluid large submit black button">Tambah</button>
                      </div>
                  </form>
                  </div>
              </div>
          </div>:
          window.location.replace("home")
          }
      </div>
    </body>
  );
}
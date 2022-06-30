import "./TambahBarang.css";
import SideBarAdminBarang from "..//../components/homeComp/SidebarAdminBarang";
import TopBar from "../../components/homeComp/topbar";
import "../../components/semantic-UI/button.css"

export default function NewUser() {
  return (
    <div className="top">
        <TopBar/>
        <div className="side">
            <SideBarAdminBarang/>
            <div className="pages">
                <div className="newInventory">
                <h1 className="newInventoryTitle">Tambah Barang</h1>
                <form className="newInventoryForm">
                    <div className="newInventoryItem">
                    <label>Nama Perangkat</label>
                    <input type="text" placeholder="Masukkan Nama Perangkat..." />
                    </div>
                    <div className="newInventoryItem">
                    <label>Jenis Perangkat</label>
                    <input type="text" placeholder="Masukkan Jenis Perangkat... " />
                    </div>
                    <div className="newInventoryItem">
                    <label>Jumlah</label>
                    <input type="number" id="quantity"  placeholder="Masukkan Jumlah Perangkat..." />
                    </div>
                    <div className="newInventoryItem">
                    <label>Status</label>
                    <input type="text" placeholder="Masukkan Status Perangkat..." />
                    </div>
                    <div className="newInventoryItem">
                    <label>Kondisi</label>
                    <input type="text" placeholder="Masukkan Kondisi Perangkat..." />
                    </div>
                    <div className="newInventoryItem">
                    <label>Lokasi</label>
                    <input type="text" placeholder="Masukkan Lokasi Perangkat..." />
                    </div>
                    <div className="newInventoryButton">
                    <button className="ui fluid large submit black button">Tambah</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  );
}
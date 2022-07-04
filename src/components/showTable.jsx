import "../components/semantic-UI/table.css";
import "./semantic-UI/icon.css"
import "./semantic-UI/grid.css"
import "./semantic-UI/button.css"
import "./semantic-UI/input.css"
import "./showTable.css"

import AmbilData from "./fetchData";
import IconCari from "./logo/loupe.png"
export default function TableTinknet() {
    const dataAPI = AmbilData();

    return (
        <div className="body">
            <div className="ui equal width grid">
                <div className="column">
                    <div className="export_button">
                        <button class="ui primary button">Export csv</button>
                    </div>                    
                </div>
                <div className="column">
                    <div className="search_bar">
                        <div class="ui action input">
                        <input type="text" placeholder="Cari..."/>
                        <button class="ui button"><img src={IconCari} alt="" className="icon-cari" /></button>
                        </div>
                    </div>                                
                </div>                
            </div>
            <div className="content">   
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Perangkat</th>
                            <th>Jenis</th>
                            <th>Jumlah</th>
                            <th>Status</th>
                            <th>Kondisi</th>
                            <th>Lokasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        { dataAPI.map((val, key) => (
                            <tr key={key}>
                                <td data-label="id">{val.id_barang}</td>
                                <td data-label="nama_perangkat">{val.nama_perangkat}</td>
                                <td data-label="jenis">{val.jenis}</td>
                                <td data-label="jumlah">{val.jumlah}</td>
                                <td data-label="status">{val.status}</td>
                                <td data-label="kondisi">{val.kondisi}</td>
                                <td data-label="lokasi">{val.lokasi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
       
    )
}
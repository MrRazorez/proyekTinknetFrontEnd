import { useEffect, useState } from "react";
import "../components/semantic-UI/table.css";
import "./semantic-UI/icon.css"
import "./semantic-UI/input.css"
import "./showTable.css"

export default function TableTinknet() {
    const [dataAPI, setDataAPI] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/databarang");
            const json = await response.json();
            setDataAPI(json.barang);
        } catch(error) {
            alert(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="body">
            <div className="input">
            <div class="ui icon input">
            <input type="text" placeholder="Search..."/>
            <i class="search icon"></i>
            </div>
            </div>
            
            <div className="content">   
                <table class="ui celled table">
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
                        { dataAPI.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td data-label="id">{val.id_barang}</td>
                                    <td data-label="nama_perangkat">{val.nama_perangkat}</td>
                                    <td data-label="jenis">{val.jenis}</td>
                                    <td data-label="jumlah">{val.jumlah}</td>
                                    <td data-label="status">{val.status}</td>
                                    <td data-label="kondisi">{val.kondisi}</td>
                                    <td data-label="lokasi">{val.lokasi}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            
        </div>
       
    )
}
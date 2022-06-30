import { useEffect, useState } from "react";
import "../components/semantic-UI/table.css";

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
       
    )
}
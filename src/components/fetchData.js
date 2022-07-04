import { useEffect, useState } from "react";
import axios from "axios";

export default function AmbilData() {
    const [dataAPI, setDataAPI] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/databarang");
            setDataAPI(response.data.barang);
        } catch(error) {
            console.log(error);
            setDataAPI([
                {
                    id_barang: "-1",
                    nama_perangkat: "Server Down",
                    jenis: "Server Down",
                    jumlah: "Server Down",
                    status: "Server Down",
                    kondisi: "Server Down",
                    lokasi: "Server Down"
                }
            ]);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return dataAPI;
}
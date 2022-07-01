import { useEffect, useState } from "react";
import axios from "axios";

export default function AmbilData() {
    const [dataAPI, setDataAPI] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/databarang");
            setDataAPI(response.data.barang);
        } catch(error) {
            alert(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return dataAPI;
}
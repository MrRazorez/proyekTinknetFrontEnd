export default function tambahInv(data) {
    const getData = async (data) => {
        try {
            const response = await fetch("http://localhost:8000/api/databarang/store?nama_perangkat="+data["nama_perangkat"]+"&jenis="+data["jenis"]+"&jumlah="+data["jumlah"]+"&status="+data["status"]+"&kondisi="+data["kondisi"]+"&lokasi="+data["lokasi"]);
            const json = await response.json();
            localStorage.setItem("msg", json.msg);
            window.location.replace("home");
        } catch(error) {
            alert(error);
        }
    }

    getData(data);
}
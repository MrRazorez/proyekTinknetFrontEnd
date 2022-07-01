import "../../components/semantic-UI/table.css";
import "../../components/semantic-UI/icon.css"
import "../../components/semantic-UI/input.css"
import "./ListEditBarang.css"
import SideBarAdminBarang from "../../components/homeComp/SidebarAdminBarang";
import TopBar from "../../components/homeComp/topbar";
import { Link } from "react-router-dom";
import DesicionRole from "../../components/roleTinknet";
import "../../components/semantic-UI/button.css"

import AmbilData from "../../components/fetchData";


export default function TableTinknet() {
    const dataRole = DesicionRole();
    const dataAPI = AmbilData();

    return (
        <div className="body">
                <div className="top">
                    <TopBar/>
                    {
                        (localStorage.getItem("token") === dataRole[1]["token"])?
                    <div className="side">
                        <SideBarAdminBarang/>
                        <div className="pages">
                        <div className="search_bar">
                        <div className="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i className="search icon"></i>
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
                                        <th>Aksi</th>
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
                                            <td>
                                                <div className="ui buttons">
                                                    <Link to={"/editbarang/"+val.id_barang} className="ui positive button">Edit</Link>
                                                    <div className="or"></div>
                                                    <button className="ui negative button">Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )) }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>:
                window.location.replace("/home")
            }
            </div>
            
        </div>
       
    )
}
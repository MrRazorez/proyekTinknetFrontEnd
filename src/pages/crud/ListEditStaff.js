import "../../components/semantic-UI/table.css";
import "../../components/semantic-UI/icon.css"
import "../../components/semantic-UI/input.css"
import "./ListEditStaff.css"
import SidebarAdminRegister from "../../components/homeComp/SidebarAdminRegister";
import TopBar from "../../components/homeComp/topbar";
import { Link } from "react-router-dom";
import DesicionRole from "../../components/roleTinknet";
import axios from "axios";
import "../../components/semantic-UI/button.css"
import IconCari from "../../components/logo/loupe.png"
import AmbilData from "../../components/fetchData";


export default function TableTinknet() {
    const dataRole = DesicionRole();
    const dataAPI = AmbilData();

    const hapusData = async (myID) => {
        if (myID > 0) {
            const response = await axios.get("http://localhost:8000/api/databarang/delete/"+myID);
            localStorage.setItem("msg", response.data.msg);
            window.location.replace("/dataconfirmed");
        }
    }

    return (
        <div className="body">
                <div className="top">
                    <TopBar/>
                    {
                        (localStorage.getItem("token") === dataRole[1]["token"])?
                    <div className="side">
                        <SidebarAdminRegister/>
                        <div className="pages">
                        <div className="search_bar_list">
                            <div class="ui action input">
                            <input type="text" placeholder="Cari..."/>
                            <button class="ui button"><img src={IconCari} alt="" className="icon-cari" /></button>
                            </div>
                        </div>
                        <div className="content">   
                            <table className="ui celled table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { dataAPI.map((val, key) => (
                                        <tr key={key}>
                                            <td data-label="id">{val.id_barang}</td>                                
                                            <td>
                                                <div className="ui buttons">
                                                    <Link to={(val.id_barang > 0)? "/resetpassword/"+val.id_barang : ""} className={(val.id_barang > 0)? "ui positive button" : "ui button"}>Reset Password</Link>
                                                    <div className="or"></div>
                                                    <button onClick={() => hapusData(val.id_barang)}className={(val.id_barang > 0)? "ui negative button" : "ui button"}>Delete</button>
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
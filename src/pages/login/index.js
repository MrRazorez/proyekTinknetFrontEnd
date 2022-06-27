import "..//../components/semantic-ui/components/grid.css";
import "..//../components/semantic-ui/components/form.css";
import "..//../components/semantic-ui/components/segment.css";
import "..//../components/semantic-ui/components/input.css";
import "..//../components/semantic-ui/components/button.css";

import React from "react";
import { useForm } from "react-hook-form";
import Logo from "..//../components/logo/tinknet.png";
import ValidAccount from "../../components/validation";

export default function Login() {
    let aturField = 10;
    const {handleSubmit} = useForm();

    return (
        <body>
            {
                (localStorage.getItem("token"))? window.location.replace("home"): 
            <div className="ui middle aligned center aligned grid" style={{ height: "100vh"}}>
                <div className="column" style={{ maxWidth: 450 }}>
                    <form onSubmit={handleSubmit(ValidAccount)} className="ui large form">
                        <img src={Logo} alt="Logo Tinknet" style={{ padding: 10, width: 100 }}/>
                        <div className="ui segment" style={{ padding: 40 }}>
                            <div className="field" style={{ padding: aturField }}>
                                <div className="ui input">
                                    <input type="text" placeholder="Masukkan Nama Akun"/>
                                </div>
                            </div>
                            <div className="field" style={{ padding: aturField }}>
                                <div className="ui input">
                                    <input type="password" placeholder="Masukkan Kata Sandi"/>
                                </div>
                            </div>
                            <div className="field" style={{ padding: aturField }}>
                                <button className="ui fluid large submit black button">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            }
        </body>
    );
}
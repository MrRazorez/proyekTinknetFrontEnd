import "..//../components/semantic-ui/components/grid.css";
import "..//../components/semantic-ui/components/form.css";
import "..//../components/semantic-ui/components/segment.css";
import "..//../components/semantic-ui/components/input.css";
import "..//../components/semantic-ui/components/button.css";
import "..//../components/semantic-ui/components/icon.css";

import React from "react";
import { useForm } from "react-hook-form";
import Logo from "..//../components/logo/tinknet.png";
import ValidAccount from "../../components/validation";

export default function Login() {
    let aturField = 10;
    const {register, handleSubmit} = useForm();

    const runValid = (data) => {
        if (!(data["username"] === "") && !(data["password"] === "")) {
            ValidAccount(data);
        }
        else {
            window.location.replace("confirmed");
        }
    }

    return (
        <body>
            {
                (localStorage.getItem("token"))? window.location.replace("/"): 
            <div className="ui middle aligned center aligned grid" style={{ height: "100vh"}}>
                <div className="column" style={{ maxWidth: 450 }}>
                    <form onSubmit={handleSubmit(runValid)} className="ui large form">
                        <img src={Logo} alt="Logo Tinknet" style={{ padding: 10, width: 100 }}/>
                        <div className="ui segment" style={{ padding: 40 }}>
                            <div className="field" style={{ padding: aturField }}>
                                <div className="ui left icon input">
                                    <i className="user icon"/>
                                    <input type="text" placeholder="Masukkan Nama Akun" {...register("username")}/>
                                </div>
                            </div>
                            <div className="field" style={{ padding: aturField }}>
                                <div className="ui left icon input">
                                    <i className="lock icon"/>
                                    <input type="password" placeholder="Masukkan Kata Sandi" {...register("password")}/>
                                </div>
                            </div>
                            <div className="field" style={{ padding: aturField }}>
                                <button className="ui fluid large submit black button">Masuk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            }
        </body>
    );
}
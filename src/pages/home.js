import "../components/semantic-ui/components/grid.css";
import "../components/semantic-ui/components/button.css";

import Logout from "../components/logout";

export default function Home() {
    return (
        <body>
            {
                !(localStorage.getItem("token"))? window.location.replace("login"): 
            <div className="ui middle aligned center aligned grid" style={{ height: "100vh"}}>
                <div className="column" style={{ maxWidth: 450 }}>
                    <h1>Hello</h1>
                    <button className="ui submit black button" onClick={Logout}>Sign Out</button>
                </div>
            </div>
            }
        </body>
    );
}
import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"

function App() {
    return (
      <Router>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
                       
          </Routes>
        </div>
     </Router> 
    )
}
  
export default App;
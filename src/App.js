import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Decision from "./components/checkTokens";
import Home from "./pages/home";
import Login from "./pages/login";
import LoginFailed from "./components/failed";
import LoginEmpty from "./components/confirmation";
import AddInventory from "./pages/crud/TambahBarang"
import ListInventory from "./pages/crud/ListEditBarang"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Decision/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/failed" element={<LoginFailed/>} />
        <Route path="/confirmed" element={<LoginEmpty/>} />
        <Route path="/addbarang" element={<AddInventory/>} />
        <Route path="/listeditbarang" element={<ListInventory/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

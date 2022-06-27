import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Decision from "./components/checkTokens";
import Home from "./pages/home";
import Login from "./pages/login";
import LoginFailed from "./components/failed";
import LoginEmpty from "./components/confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Decision/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/failed" element={<LoginFailed/>} />
        <Route path="/confirmed" element={<LoginEmpty/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

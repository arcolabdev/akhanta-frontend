import "./App.css";
import Login from "./pages/login/Login";
import AssociatedDetail from "./pages/associatedDetail/AssociatedDetail";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/admin/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/associated/:id" element={<AssociatedDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

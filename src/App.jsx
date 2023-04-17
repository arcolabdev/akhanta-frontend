import "./App.css";
import Login from "./pages/Login/Login";
import AssociatedDetail from "./pages/associatedDetail/AssociatedDetail";
import Home from "./pages/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./pages/DBTest/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/associated/:id" element={<AssociatedDetail />} />
        </Routes>
      </div>
      {/* <Formulario /> */}
    </BrowserRouter>
  );
}

export default App;

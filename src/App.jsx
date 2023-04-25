import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./Context";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AssociatePanel from "./pages/admin/AssociatePanel";
import AssociatedDetail from "./pages/associatedDetail/AssociatedDetail";

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/associated/:id" element={<AssociatedDetail />} />
            <Route path="/admin" element={<AssociatePanel />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;

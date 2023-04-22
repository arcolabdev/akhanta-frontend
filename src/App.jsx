import "./App.css";
import Login from "./pages/Login/Login";
import AssociatedDetail from "./pages/associatedDetail/AssociatedDetail";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssociatePanel from "./pages/admin/AssociatePanel";
import { MyContextProvider } from "./Context";

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

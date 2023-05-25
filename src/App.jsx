import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./Context";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AssociatePanel from "./pages/admin/AssociatePanel";
import AssociatedDetail from "./pages/associatedDetail/AssociatedDetail";
import ArticlesPage from "./pages/articles/ArticlesPage";

function App() {
  return (
   <MyContextProvider>
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/associates/:id" element={<AssociatedDetail />} />
          <Route path="/admin" element={<AssociatePanel />} />
          <Route path="/articles" element={<ArticlesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
   </MyContextProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./Context";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AssociatePanel from "./pages/admin/associate/AssociatePanel";
import ArticlePanel from "./pages/admin/article/ArticlePanel";
import AdminPanel from "./pages/admin/AdminPanel";
import AssociateDetail from "./pages/associatedDetail/AssociateDetail";
import ArticlesPage from "./pages/articles/ArticlesPage";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import NotFound from "./components/not-found/not-found";

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/asociados/:id" element={<AssociateDetail />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/admin/asociados" element={<AssociatePanel />} />
              <Route path="/admin/articulos" element={<ArticlePanel />} />
            </Route>
            <Route path="/articulos" element={<ArticlesPage />} />
            <Route path="/articulos/:id" element={<ArticleDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;

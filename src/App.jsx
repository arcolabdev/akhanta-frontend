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

function App() {
  return (
   <MyContextProvider>
     <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/associates/:id" element={<AssociateDetail />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/asociados" element={<AssociatePanel />} />
          <Route path="/admin/articulos" element={<ArticlePanel />} />
          <Route path="/articles" element={<ArticlesPage />} />
          {/* <Route path="/articles/:title" element={<ArticleDetail/>} /> */}
          <Route path="/articles/:id" element={<ArticleDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
   </MyContextProvider>
  );
}

export default App;

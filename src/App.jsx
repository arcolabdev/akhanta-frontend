import './App.css';
import Login from './pages/Login/Login';
import AssociatedDetail from './pages/associatedDetail/AssociatedDetail';
import Home from './pages/Home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    </BrowserRouter>
  );
}

export default App;

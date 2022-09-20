import './App.css';
import Home from './views/home/home';
import Login from './views/login/login';
import VODashboard from './views/vo_dashboard/vo_dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vo_dashboard" element={<VODashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GuestPast from './pages/GuestPage';
import RequirePage from './pages/RequirePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/guest" element={<GuestPast />} />
      <Route path="/require" element={<RequirePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;

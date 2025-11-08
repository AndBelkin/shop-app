import type { FC } from "react";
import Header from "./layouts/header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Menu from "./pages/menu/Menu";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

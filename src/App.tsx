import type { FC } from "react";
import Header from "./layouts/header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PromoList from "./layouts/promo/PromoList";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <PromoList />
      <Routes>
        <Route index element={<div />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

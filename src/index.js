import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './paginas/NotFound';
import UsoInadecuado from './paginas/UsoInadecuado';
import Usuarios from './paginas/Usuarios';
import Panel from './paginas/Panel';
import Login from "./paginas/Login";
import LandingPage from "./paginas/LandingPage";
import NavBar from "./comunes/NavBar";
import Agenda from "./paginas/Agenda";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/users" element={<Usuarios />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/error" element={<UsoInadecuado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

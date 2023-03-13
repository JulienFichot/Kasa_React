import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Accueil from "./pages/Accueil/Accueil";
import Fiche from "./pages/Fiche-logement/Fiche";
import APropos from "./pages/A-propos/APropos";
import Erreur404 from "./pages/404/404";

ReactDOM.render(
  <React.StrictMode>
    <div className="contenu">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Navigate replace to="/accueil" />} path="/" />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/logement/:id" element={<Fiche />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<Erreur404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

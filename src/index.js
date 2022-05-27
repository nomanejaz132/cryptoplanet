import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Market from "./pages/market";
import Watchlist from "./pages/watchlist";
import Portfolio from "./pages/portfolio";
import Learn from "./pages/learn";
import SignIn from "./pages/signin";
import Register from "./pages/register";
import Error from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="market" element={<Market />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="learn" element={<Learn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

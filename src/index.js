import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store/store";
import "./index.css";
import App from "./App";
import Market from "./pages/market";
import Watchlist from "./pages/watchlist";
import Portfolio from "./pages/portfolio";
import Learn from "./pages/learn";
import SignIn from "./pages/signin";
import Register from "./pages/register";
import Error from "./pages/404";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

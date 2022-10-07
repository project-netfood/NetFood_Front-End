import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from './components/Client.js';
import Home from "./components/Home.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/espace-client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
;
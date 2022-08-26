import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import Home from './view/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  ));
;
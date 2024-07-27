import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Edit from "./pages/Edit";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

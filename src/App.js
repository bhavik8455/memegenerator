import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';



function App() {

  const navigate = useNavigate();


  return (
    <div className="App">
      <h1 style={{ textAlign: "center", cursor: "pointer" }} onClick={(e) => navigate(`/`)}>MEME GENERATOR</h1 >
      <Routes>
        <Route path='/' element={<HomePage />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

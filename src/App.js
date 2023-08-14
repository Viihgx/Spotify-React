import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
import Home from './pages/Home';
import Login from './pages/Login';
// import { getTokenFromUrl } from "./pages/Spotify";
// import { useEffect, useState } from "react";

// const [token, setToken] = useState();

// useEffect(() => {
//   const hash = getTokenFromUrl();
//   window.location.hash = "";
//   const _token = hash.access_token;
  
//   if (_token) {
//     setToken(_token);
//   }
  
//   console.log("token", token);
// }, []);

function App() {
  return (
    <Router>
      <div>{token ? <h1>Logged in</h1> : <Login />}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Weather from './components/Weather'
import Ecommerce from './components/E_commerce'
import Soil from './components/Soil'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
          <Route path="/soil" element={<Soil/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


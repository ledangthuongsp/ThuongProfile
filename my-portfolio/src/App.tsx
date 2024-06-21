import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/main.css';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/project" element={<div>Projects Page</div>} />
        <Route path="/resume" element={<div>Resume Page</div>} />
      </Routes>
    </>
  );
};

export default App;

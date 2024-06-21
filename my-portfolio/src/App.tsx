import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './styles/main.css';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Home />
    </div>
  );
};

export default App;

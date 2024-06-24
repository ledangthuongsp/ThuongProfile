import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NavBar from './components/navbar/Navbar';

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const App: React.FC = () => {
  useTitle('Piller');
  return (
    <div className='relative'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
    </div>


  );
};

export default App;

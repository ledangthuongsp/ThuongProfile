import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Projects from './pages/project/Projects';

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
        <Route path="/ThuongProfile" element={<Home />} />
        <Route path="/ThuongProfile/about" element={<About />} />
        <Route path='/ThuongProfile/project' element={<Projects />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </div>


  );
};

export default App;

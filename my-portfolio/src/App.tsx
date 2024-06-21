import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
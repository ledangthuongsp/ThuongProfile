import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import './styles/main.css';

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
const App: React.FC = () => {
  useTitle('Piller');
  return (
    <div className="relative">
      <Home />
    </div>
  );
};

export default App;

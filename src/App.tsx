import React, { useEffect } from 'react';
import './styles/main.css';
import Home from './pages/home/Home';

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

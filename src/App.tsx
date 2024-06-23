import React, { useEffect } from 'react';
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
    </div>
  );
};

export default App;

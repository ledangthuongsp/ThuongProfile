// App.js
import React from 'react';
import Navigation from './navigation/Navigation';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import AboutMe from './component/aboutme/aboutme';
import PersonalProject from './component/project/project';
function App() {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <AboutMe/>
      <PersonalProject/>
    </div>
  );
}

export default App;

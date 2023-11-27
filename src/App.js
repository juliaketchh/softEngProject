import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

import Navbar from './Navbar'; // Navbar component
import Home from './Home';    // Home page/component
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* <Auth />             ADD IN AUTHENTICATION*/}
      <Navbar />

      <div className="content">
        <Router>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            {/* <Route path="/about" element={AboutPage} /> */}
            {/* <Route path="/contact" element={ContactPage} />   test -> replace "element" with "component" */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

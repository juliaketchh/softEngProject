import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import { Auth } from './authentication';

import Navbar from './Navbar'; // Navbar component
import Home from './Home';    // Home page
import { LoginPage, Registration } from './Login';        // Log-in page
import Dashboard from './dashboard';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      {/* <Navbar /> */}

      <div className="content">
        <Router>
          <Auth />
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <LoginPage /> } />   {/* test -> replace "element" with "component" */}
            <Route path="/register" element={ <Registration /> } />
            <Route path="/dashboard" element={ <Dashboard /> } />
            {/* <Route path="/about" element={AboutPage} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

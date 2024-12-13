import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CubeAnimation from './components/CubeAnimation';

import './App.css'; 

function App() {
    return (
        <Router>
            <div className="site-container">
               
                <MyNavbar />
                <div className="content-wrap">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes> 
                </div>
                <CubeAnimation />
                <Footer />
            </div>
        </Router>
    );
}

export default App;

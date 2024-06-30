import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageContainer from './components/PageContainer'; // Ensure this import is correct
import Cakes from './components/Cakes';
import ChocoFlan from './components/ChocoFlan';
import Contact from './components/Contact';
import Cheesecakes from './components/Cheesecakes';
import Home from './components/Home';

function App() {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/chocoflan" element={<ChocoFlan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cheesecakes" element={<Cheesecakes />} />
        </Routes>
      </PageContainer>
      <Footer />
    </div>
  );
}

export default App;

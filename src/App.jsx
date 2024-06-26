import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageContainer from './components/PageContainer'; // Ensure this import is correct
import Cakes from './components/Cakes';
import Cupcakes from './components/Cupcakes';
import Contact from './components/Contact';
import Cheesecakes from './components/Cheesecakes';
import About from './components/About';

function App() {
  return (
    <div>
      <NavBar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cheesecakes" element={<Cheesecakes />} />
        </Routes>
      </PageContainer>
      <Footer />
    </div>
  );
}

export default App;

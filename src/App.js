import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';
import CryptoState from './contexts/CryptoContext';
import Footer from './components/Footer';

const App = () => {
  return (
    <CryptoState>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/coin/:id' element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    </CryptoState>  
  )
}

export default App;


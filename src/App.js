import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import CoinDetails from './components/CoinDetails';
import CryptoState from './contexts/CryptoContext';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthState from './contexts/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthState>
        <CryptoState>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/coins' element={<Coins />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/coin/:id' element={<CoinDetails />} />
              <Route path='/auth/login' element={<Login />} />
              <Route path='/auth/signup' element={<Signup />} />
            </Routes>
            <Footer />
        </CryptoState> 
      </AuthState> 
    </Router>
  )
}

export default App;


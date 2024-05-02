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
import Success from './components/Success';

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
              <Route path='/a1b2c-3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3/success/:subscription' element={<Success />} />
            </Routes>
            <Footer />
        </CryptoState> 
      </AuthState> 
    </Router>
  )
}

export default App;


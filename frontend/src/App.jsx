import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './pages/Login';
import Home from './pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Signup from './pages/Signup';
//import OrderForm from './pages/orderForm';

function App() {
  return ( 
    <div>
        <Router>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path='/signup' element={<Signup/>} />
            </Routes>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // <-- notice BrowserRouter here
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ItemDetails from './components/ItemDetails';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <AuthProvider>
      <Router> 
        <Navbar /> 
        <Routes> 
          <Route path="/" element={<ItemList />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

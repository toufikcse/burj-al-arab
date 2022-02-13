import React, { createContext, useState } from 'react';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/RivateRoute';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route 
              path="/about" 
              element={<PrivateRoute><AboutUs /></PrivateRoute>}
            ></Route>
            <Route 
              path="/book/:bedType" 
              element={<PrivateRoute><Book /></PrivateRoute>}
            ></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;

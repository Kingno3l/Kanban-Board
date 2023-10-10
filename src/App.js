import React from 'react';
import Navigation from './Navigation';
import NavRoutes from './NavRoutes';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Mission from './components/Mission';

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Navigation />

      <NavRoutes />
    </>
  );
}

export default App;

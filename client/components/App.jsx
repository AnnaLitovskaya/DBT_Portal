import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SignIn from './forms/SignIn';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="" element={<h1>hi</h1>} />
        <Route path="#SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

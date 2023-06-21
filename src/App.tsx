import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

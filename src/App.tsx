import React from 'react';
import SignUpPage from './components/pages/signup/signup';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import LoginPage from './components/pages/login/login';




const App: React.FC = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path ="/signup" element={<SignUpPage/>} />
        <Route path ="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>


    
  
  );
};

export default App;

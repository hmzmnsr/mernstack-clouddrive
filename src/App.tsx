  import React from 'react';
  import SignUpPage from './components/pages/signup/signup';
  import { BrowserRouter, Route, Routes, } from 'react-router-dom';
  import LoginPage from './components/pages/login/login';
import ControlBar from './components/pages/dashboard/controlbar/controlbar';




  const App: React.FC = () => {
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path ="/signup" element={<SignUpPage/>} />
          <Route path ="/login" element={<LoginPage/>} />
          <Route path ="/dashboard" element={<ControlBar/>} />
        </Routes>
      </BrowserRouter>


      
    
    );
  };

  export default App;

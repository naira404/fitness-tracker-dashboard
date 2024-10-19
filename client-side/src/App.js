import React from "react";
import "./final/App.css";
import Home from './final/Home';
import Profile from "./final/Profile";
import { Route, Routes, useLocation } from "react-router-dom";
import Sider from "./final/Sider";
import Dashboard from "./final/dash/Dashboard";
import Leave from "./final/Leave";
import EditPage from "./final/EditPage";
import SignIn from "./final/SignIn";
import SignUp from "./final/SignUp"

function App() {
  const location = useLocation();
  const isSignInPage = location.pathname === '/SignIn';
  const isSignUppage=location.pathname==='/SignUp';
  const isHomepage=location.pathname==='/';

//   if (window.location.pathname === '/') {
//     const link = document.createElement('link');
//     link.href = 'https://assets.codepen.io/605876/GeistVF.ttf';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
// }


  return (
    <div className="app-container mt-0">
      {!isSignInPage &&!isSignUppage &&!isHomepage && <Sider/>}
      <div className="main-content">
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/Leave" element={<Leave />} />
          <Route path="/EditPage/:id" element={<EditPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

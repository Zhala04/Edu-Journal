import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './sass/app.scss'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import News from './components/News';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/main' element={<App/>}></Route>
      <Route path='/haberler' element={<News/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



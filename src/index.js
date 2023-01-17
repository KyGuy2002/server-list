import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/global/Header.js';
import Footer from './components/global/Footer.js';
import NotFound from './pages/NotFound.js';
import HomePage from './pages/HomePage.js';
import ServerListingPage from './pages/ServerListingPage.js';


ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/server/:id' element={<ServerListingPage/>}/>

                    <Route path='*' element={<NotFound />}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    </>
);
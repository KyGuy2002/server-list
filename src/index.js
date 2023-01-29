import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/global/Header.js';
import Footer from './components/global/Footer.js';
import NotFound from './pages/NotFound.js';
import HomePage from './pages/HomePage.js';
import AddServerPage from './pages/AddServerPage';
import ServerListingPage from './pages/ServerListingPage.js';

import { GoogleOAuthProvider } from '@react-oauth/google';

import { setCookie, UserData, getUserDataFromCookie } from './UserData'

import { useState, useCallback } from 'react';
import SignInModal from './components/global/SignInModal.js';


function App() {

    const [ userData, setUserData ] = useState(getUserDataFromCookie());
    const [ isShowingSignInModal, setShowingSignInModal ] = useState(false);

    const setToken = useCallback((token) => {
        setCookie(token) // Set cookie to new token
        setUserData(getUserDataFromCookie()) // Read newely set cookie, decode, update state/context
    }, []);

    const showSignInModal = useCallback((showing) => {
        setShowingSignInModal(showing)
    }, []);

    return (
        <BrowserRouter>
            <GoogleOAuthProvider clientId="986209059237-tblmkk1ql61lpuhas27k0ujb2jb3e4dl.apps.googleusercontent.com">
                <UserData.Provider value={{ setter: setToken, showSignInModal: showSignInModal, value: userData }}>
                    <SignInModal showing={isShowingSignInModal}/>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/server/:server_uuid' element={<ServerListingPage/>}/>
                        <Route path='/create-server' element={<AddServerPage/>}/>

                        <Route path='*' element={<NotFound />}/>
                    </Routes>
                    <Footer/>
                </UserData.Provider>
            </GoogleOAuthProvider>
        </BrowserRouter>
    )

}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
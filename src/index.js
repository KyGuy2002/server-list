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
import ErrorModal from './components/global/ErrorModal.js';

import { createContext } from 'react';

export const ErrorModalContext = createContext({showErrorModal: null})


function App() {

    const [ userData, setUserData ] = useState(getUserDataFromCookie());

    const [ isShowingSignInModal, setShowingSignInModal ] = useState(false);
    const [ signInModalCallback, setSignInModalCallback ] = useState(undefined);

    const [ isShowingErrorModal, setShowingErrorModal ] = useState(false);
    const [ errorModalReason, setErrorModalReason ] = useState(undefined);

    const setToken = useCallback((token) => {
        setCookie(token) // Set cookie to new token
        setUserData(getUserDataFromCookie()) // Read newely set cookie, decode, update state/context
    }, []);

    const showSignInModal = useCallback((showing, callback) => {
        setShowingSignInModal(showing)
        setSignInModalCallback(() => callback)
    }, []);

    const showErrorModal = useCallback((showing, reason) => {
        setShowingErrorModal(showing)
        setErrorModalReason(reason)
    }, []);

    return (
        <BrowserRouter>

            <GoogleOAuthProvider clientId="986209059237-tblmkk1ql61lpuhas27k0ujb2jb3e4dl.apps.googleusercontent.com">
            <ErrorModalContext.Provider value={{ showErrorModal: showErrorModal }}>
            <UserData.Provider value={{ setter: setToken, showSignInModal: showSignInModal, value: userData }}>


                <SignInModal showing={isShowingSignInModal} callback={signInModalCallback}/>
                <ErrorModal showing={isShowingErrorModal} errorMessage={errorModalReason}/>


                <Header/>


                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/server/:server_uuid' element={<ServerListingPage/>}/>
                    <Route path='/create-server' element={<AddServerPage/>}/>

                    <Route path='*' element={<NotFound />}/>
                </Routes>


                <Footer/>


            </UserData.Provider>
            </ErrorModalContext.Provider>
            </GoogleOAuthProvider>

        </BrowserRouter>
    )

}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
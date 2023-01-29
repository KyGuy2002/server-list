import React from 'react';
import { Link } from "react-router-dom";

import '../../scss/global/header.scss';

import { useContext } from 'react';
import { UserData } from '../../UserData'

import { useState } from 'react';


export default function Header() {

    const userData = useContext(UserData);

    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <header>

            <div className='title-container'>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='Server List Logo'/>
                    <h1>Minecraft Server List</h1>
                </Link>

                <i className="info-button fa-solid fa-circle-info"></i>
            </div>


            <div className='nav' mobile-nav-open={mobileNavOpen.toString()}>
                <Link to='/'>Discovery</Link>
                <Link to='/trending'>Trending</Link>
                <Link to='/new'>New</Link>
            </div>


            <a className="discord" href="https://discord.com/" target="_blank" rel="noreferrer">
                <h1>Discord</h1>
                <i className="fa-brands fa-discord"></i>
            </a>

            <a className="github" href="https://github.com/" target="_blank" rel="noreferrer">
                <h1>GitHub</h1>
                <i className="fa-brands fa-github"></i>
            </a>

            <div className='account'>
                {
                    userData.value
                    ?
                    <img src={userData.value.picture}></img>
                    :
                    <span className='fa-stack'>
                        <i className="fa-solid fa-user fa-stack-1x"></i>
                        <i className="fa-regular fa-circle fa-stack-2x"></i>
                    </span>
                }

            </div>

            <div className='account-menu'>
                    {
                        userData.value
                        ?
                        <>
                            <a href="/account"><i className="fa-solid fa-gear"></i> Manage Account</a>
                            <a href="/account/servers"><i className="fa-solid fa-server"></i> My Servers</a>
                            <a href="/create-server"><i className="fa-solid fa-plus"></i> Create Server</a>
                            <p onClick={() => userData.setter(null)}><i className="fa-solid fa-right-from-bracket"></i> Sign Out</p>
                        </>
                        :
                        <>
                            <p onClick={() => userData.showSignInModal(true)}><i className="fa-solid fa-right-to-bracket"></i> Sign In</p>
                        </>
                    }
                </div>

            <button className='mobile-nav-button' onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <i className="fa-solid fa-bars"></i>
            </button>

        </header>
    )
}
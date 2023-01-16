import React from 'react';
import { Link } from "react-router-dom";

import '../../scss/global/header.scss';

export default function Header() {
    return (
        <header>

            <div className='title-container'>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + '/images/logo.png'}/>
                    <h1>Minecraft Server List</h1>
                </Link>

                <i className="info-button fa-solid fa-circle-info"></i>
            </div>


            <div className='nav'>
                <Link to='/'>Discovery</Link>
                <Link to='/trending'>Trending</Link>
                <Link to='/new'>New</Link>
            </div>


            <button className="discord" onclick="window.open('https://discord.com/','_blank')">
                Discord
                <i className="fa-brands fa-discord"></i>
            </button>

            <button className="github" onclick="window.open('https://github.com/','_blank')">
                GitHub
                <i className="fa-brands fa-github"></i>
            </button>

        </header>
    );
}
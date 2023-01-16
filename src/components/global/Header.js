import React from 'react';
import { Link } from "react-router-dom";

import '../../scss/global/header.scss';

export default function Header() {
    return (
        <header>

            <h1>Minecraft Server List</h1>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>

        </header>
    );
}
import React from 'react';
import { Link } from "react-router-dom";

import '../../scss/global/header.scss';



class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNavOpen: true
        };

        // This binding is necessary to make `this` work in the callback
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState(prevState => ({
            mobileNavOpen: !prevState.mobileNavOpen
        }));
    }

    render() {
        return (
            <header>

                <div className='title-container'>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt='Server List Logo'/>
                        <h1>Minecraft Server List</h1>
                    </Link>

                    <i className="info-button fa-solid fa-circle-info"></i>
                </div>


                <div className='nav' mobile-nav-open={this.state.mobileNavOpen.toString()}>
                    <Link to='/'>Discovery</Link>
                    <Link to='/trending'>Trending</Link>
                    <Link to='/new'>New</Link>
                </div>


                <a className="discord" href="https://discord.com/" target="_blank">
                    <h1>Discord</h1>
                    <i className="fa-brands fa-discord"></i>
                </a>

                <a className="github" href="https://github.com/" target="_blank">
                    <h1>GitHub</h1>
                    <i className="fa-brands fa-github"></i>
                </a>

                <button className='mobile-nav-button' onClick={this.toggleNav}>
                    <i className="fa-solid fa-bars"></i>
                </button>

            </header>
        );
    }
}
import React from 'react'
import './Navbar.css'
// import logo from './icon.svg'
export default function Navbar() {
    return (
        <div className='nav-bar'>
            <header>

                <img src="icon.svg" alt="logo" className='logo' height={40} />
                <nav>
                    <ul className='nav_links'>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/track-package">Track Package</a></li>
                        <li><a href="/new-package">New Package</a></li>
                    </ul>
                </nav>
                <button href="" className='cta'>cta</button>
            </header>
        </div>
    )
}

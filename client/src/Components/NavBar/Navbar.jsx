import React, { useState } from 'react'
import './Navbar.css'
// import logo from './icon.svg'
import { Link } from 'react-router-dom';
//Components import
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
//End of components import


export default function Navbar() {
    const [username, setUsername] = useState(localStorage.getItem('user'))
    let greet = "";
    let time = new Date();
    if (time.getHours() >= 24 && time.getHours() < 12) {
        greet = "Good morning";
    }
    else if (time.getHours() >= 12 && time.getHours() < 16) {
        greet = "Good afternoon";
    }
    else {
        greet = "Good evening";
    }

    return (
        <header className='nav-bar'>
            <div class="oD">
                <div className='logo-box'>
                    <img src="icon.svg" alt="logo" className="logo" height={40} />
                    <div>
                        <p>{greet}, {username}</p>
                        {/* <br /> */}
                        <a href='/'><span class="material-symbols-outlined">
                            logout
                        </span></a>
                    </div>
                </div>

                <div class="iD">

                    <br />
                    <a href="#" class="linksM"> Track package</a><br /><br />
                    <a href="#" class="linksM"> New package</a><br /><br />
                    <Link to="/reg" class="linksM"> Register</Link><br /><br />
                    <Link to="/blog" class="linksM"> Blog</Link><br /><br />

                </div>
            </div>

            {/*Nav*/}
            <nav className='nav-container'>
                <ul className='nav_links'>
                    <Link to="/home"><li><a href="">Home</a></li></Link>
                    <Link to="/new-shipment"><li><a href="">New Shipments</a></li></Link>
                    <Link to="/shipments"><li><a href="">Shipments</a></li></Link>
                    <Link to="/about"><li><a href="">About</a></li></Link>
                </ul>
            </nav>
            {/* <button href="" className='cta'>cta</button> */}
        </header>
    )
}

import React from 'react'
import './MNavbar.css'
// import logo from './icon.svg'
import { Link} from 'react-router-dom';
//Components import
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
//End of components import


export default function Navbar(props) {
    let greet="";
    let time=new Date();
    if(time.getHours()>=24 && time.getHours()<12)
    greet="Good morning";
   else if(time.getHours()>=12 && time.getHours()<16)
   greet="Good afternoon";
else
greet="Good evening";

    return (
        <header>
                <div class="oD">
            <img src="icon.svg" alt="logo" className="logo" height={40} />
            {/* <p>{greet},{props.name}</p> */}

            <div class="iD">

                <br/>
            <a href="#" class="linksM"> Track package</a><br/><br/>
            <a href="#" class="linksM"> New package</a><br/><br/>
            <Link to ="/reg" class="linksM"> Register</Link><br/><br/>
            <Link to ="/blog" class="linksM"> Blog</Link><br/><br/>

            </div>
            </div>

            {/*Nav*/ }
            <nav>
                <ul className='nav_links'>
                    <Link to="/"><li><a href="">Home</a></li></Link>
                    <Link to="/about"><li><a href="">ABOUT</a></li></Link>
                    <Link to="/community"><li><a href="">COMMUNITY</a></li></Link>
                </ul>
 
         
            </nav>
            <button href="" className='cta'>C</button>
        </header>
    )
}

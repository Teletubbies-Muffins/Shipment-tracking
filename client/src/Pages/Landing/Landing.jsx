import React from 'react'
import { Container, Stack, Grid, Button } from '@mui/material'
import './Landing.css'
import TextField from '@mui/material/TextField';
import Image from './truck.png'
import Navbar from '../../Components/NavBar/Navbar'
export default function Landing() {
    return (
        <>
            <div className='landing-page'>
                <Grid className='container' container gap={1}>
                    <Grid className="left" item xs={12} sm={12} md={7}>
                        <h1 className='hero'>Find Your Shipment</h1>
                        <div className="search">
                            <input type="text" placeholder='search for a shipment' />
                        </div>
                        <br />
                        <h4 className='hero'>
                            You can enter the shipment Id to see the details of the shipment
                        </h4>
                        <hr />
                        <h6>
                            Help your customers to track their shipment, You can add a shipment and Share the link with the customer. <a href='/sign-up'>Sign Up Now</a>
                        </h6>
                    </Grid>
                    <Grid className="right" item xs={12} sm={12} md={4}>
                        <div className="auth">
                            <div className="login">
                                <p className='text-center'>Login</p>
                                <form action="">
                                    <label htmlFor="username">Username</label>
                                    {/* <br /> */}
                                    <input type="text" name="username" id="" />
                                    {/* <br /> */}
                                    <label htmlFor="password">Password</label>
                                    {/* <br /> */}
                                    <input type="password" name="password" id="" />
                                    <hr />
                                    <Button variant='contained' className='' >Login</Button>
                                </form>
                            </div>
                            <div className="text-center">
                                <a href="/sign-up">Sign Up</a>
                            </div>

                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

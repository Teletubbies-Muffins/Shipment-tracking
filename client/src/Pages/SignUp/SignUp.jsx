import React from 'react'
import './SignUp.css'
import { Grid, Button } from '@mui/material'

export default function SignUp() {
    return (
        <div className='sign-up-page'>
            <form action="">
                <h3>Sign Up</h3>
                <img src="icon.svg" alt="logo" className="logo" height={80} />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="Password" />
                <label htmlFor="">Repeat password</label>
                <input type="Password" />
                <Button variant='contained' >Register</Button>
            </form>


        </div>
    )
}

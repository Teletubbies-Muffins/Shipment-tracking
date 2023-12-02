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
                <input type="text" className='form-control'/>
                <label htmlFor="">Username</label>
                <input type="text" className='form-control'/>
                <label htmlFor="">Password</label>
                <input type="Password" className='form-control'/>
                <label htmlFor="">Repeat password</label>
                <input type="Password" className='form-control'/>
                <div className='action-btn-box'>
                    <Button variant='contained' type='reset' color='error'>clear</Button>
                    <Button variant='contained' className='float-end'>Register</Button>
                </div>
                <a href="/">login</a>

            </form>


        </div>
    )
}

import React, { useState } from 'react'
import './SignUp.css'
import { Button } from '@mui/material'
import { Axios } from '../../Components/Axios/Axios'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
    const [Error, setError] = useState(false)
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        setError(false)
        if (e.target.password.value === e.target.password2.value) {
            Axios.post("user/new-user", {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }).then((res) => {
                navigate('/home')
            }).catch((err) => {
                setError(err.response.data.message)

            })
        } else {
            setError("Passwords doesn't match!")
        }
    }
    return (
        <div className='sign-up-page'>
            <form action="" onSubmit={handleSignUp}>
                <h3>Sign Up</h3>
                <img src="icon.svg" alt="logo" className="logo" height={80} />

                {Error && <p className='error-msg'>{Error}</p>}
                <label htmlFor="">Username</label>
                <input type="text" className='form-control' name='username' required />
                <label htmlFor="">Email</label>
                <input type="email" className='form-control' name="email" required />
                <label htmlFor="">Password</label>
                <input type="Password" className='form-control' name="password" required minLength={8} />
                <label htmlFor="">Repeat password</label>
                <input type="Password" className='form-control' name="password2" required minLength={8} />
                <div className='action-btn-box'>
                    <Button variant='contained' type='reset' color='error'>clear</Button>
                    <Button variant='contained' className='float-end' type="submit">Register</Button>
                </div>
                <a href="/">login</a>

            </form>


        </div>
    )
}

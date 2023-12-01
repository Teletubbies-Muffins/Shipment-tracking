import React from 'react'
import { Container, Stack, Grid } from '@mui/material'
import './Landing.css'
import Image from './truck.png'
export default function Landing() {
    return (
        <Grid container style={{ backgroundColor: "" }} className='container-grid justify-content-center'>
            <Grid item md={6} style={{  }} className='item-grid'>
            <h4>Add a package And let the customer track his package</h4>
            <br />
                <form action="">
                    {/* <Stack className='' direction={'row'} > */}
                    <input type='text' className='form-control login-input' />
                    <input type='text' className='form-control  login-input' />
                    <input type='submit' className='btn btn-primary ' value={'Login'} />
                    {/* </Stack> */}
                </form>
            </Grid>
            <Grid item md={6} style={{ backgroundColor: "" }} className=''>
                
                <img src={Image} alt="" />
            </Grid>
        </Grid>
    )
}

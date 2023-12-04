import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import InfoCard from '../../Components/InfoCard/InfoCard'
import './Home.css'
import { Grid } from '@mui/material'
export default function Home() {
    return (
        <>
            <Navbar name="Majd" />
            <div className='home-page'>
                <br />
                <Grid container justifyItems={'center'} justifyContent={'center'} style={{ backgroundColor: "white" }}>
                    <Grid item>
                        <InfoCard img="https://cdn-icons-png.flaticon.com/512/2801/2801874.png" hTitle="Shipments, latest and old and current" title="Shipments" content="Latest shipments" linkText="Ship details"></InfoCard>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

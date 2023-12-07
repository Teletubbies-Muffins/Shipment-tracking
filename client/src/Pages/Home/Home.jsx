import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
// import InfoCard from '../../Components/InfoCard/InfoCard'
import './Home.css'
import ShipmentCard from '../../Components/ShipmentCard/ShipmentCard'
import { Grid } from '@mui/material'
export default function Home() {
    return (
        <>
            <Navbar />
            <div className='home-page'>
                <br />
                <Grid container justifyItems={'center'} justifyContent={'center'} gap={1}>
                    <Grid item >
                        hello
                    </Grid>
                    <Grid item>
                        <ShipmentCard />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

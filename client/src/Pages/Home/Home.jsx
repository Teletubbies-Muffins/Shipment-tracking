import React from 'react'
import Navbar from '../../Components/MNavBar/Navbar'
import InfoCard from '../../Components/InfoCard/InfoCard'
import { Grid } from '@mui/material'
export default function Home() {
    return (
        <>
            <Navbar />
            <br />
            <Grid container justifyItems={'center'} justifyContent={'center'}  style={{backgroundColor:"white"}}>
                <Grid item>
                    <InfoCard title="this" content="hello do you want to win"></InfoCard>
                </Grid>
            </Grid>
        </>
    )
}

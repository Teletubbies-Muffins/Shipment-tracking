import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
// import InfoCard from '../../Components/InfoCard/InfoCard'
import './Home.css'
import ShipmentCard from '../../Components/ShipmentCard/ShipmentCard'
import { Grid } from '@mui/material'
import CreateShipment from '../../Components/CreateShipment/CreateShipment'
import { Axios } from '../../Components/Axios/Axios'
import AnimatedCard from '../../Components/AnimatedCard/AnimatedCard'

export default function Home() {
    const [RecentShipment, setRecentShipment] = useState([])

    const getRecentShipments = () => {
        Axios.get(`shipment/user-shipments/${localStorage.getItem('user')}`).then((res) => {
            setRecentShipment(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log("error getting data")
        })
    }

    useEffect(() => {
        getRecentShipments()
    }, [])
    return (
        <>
            <Navbar />
            <div className='home-page'>
                <br />
                <Grid container justifyItems={'center'} justifyContent={'center'} gap={2} >
                    <Grid item md={6}>
                        <CreateShipment />
                    </Grid>
                    <Grid item md={4} xs={12} sm={12}>
                        <div className='recent-card-container'>
                            {RecentShipment ?
                                RecentShipment.map((shipment) => (
                                    // <ShipmentCard shipment={shipment} />
                                    <AnimatedCard  shipment={shipment}/>
                                ))
                                : <>no recent shipment</>}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

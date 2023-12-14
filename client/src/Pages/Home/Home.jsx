import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/NavBar/Navbar'
// import InfoCard from '../../Components/InfoCard/InfoCard'
import './Home.css'
import ShipmentCard from '../../Components/ShipmentCard/ShipmentCard'
import { Grid } from '@mui/material'
import CreateShipment from '../../Components/CreateShipment/CreateShipment'
import { Axios } from '../../Components/Axios/Axios'
import CreateNew from '../../Components/CreateNew/CreateNew'
export default function Home() {
    const [RecentShipment, setRecentShipment] = useState([])
    const [CreateTab, setCreateTab] = useState(false)
    const navigate = useNavigate()
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
                        <div className='insight-container'>
                            <div className='insight'>
                                <div className='all'>all : {RecentShipment.length}</div>
                                <div className='active'>active : {(RecentShipment.filter((s) => !s.done)).length}</div>
                                <div className='done'>done : {(RecentShipment.filter((s) => s.done)).length}</div>
                            </div>
                        </div>
                        {CreateTab ? <CreateShipment /> : <>
                            <div className="heading-container">
                                <h1 className='title text-white'>See your recent shipments or add new </h1>
                            </div>
                            <Button label="New shipment" action={() => setCreateTab(true)} />
                            <hr />
                            <Button label="View All " action={() => navigate('/shipments')} />
                        </>}

                        {/* <CreateNew /> */}
                    </Grid>
                    <Grid item md={4} xs={12} sm={12}>
                        <div className='recent-card-container'>
                            {RecentShipment ?
                                RecentShipment.map((shipment) => (
                                    <ShipmentCard shipment={shipment} />

                                ))
                                : <>no recent shipment</>}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}





export function Button(props) {
    return (
        <button class="animated-button" id="create-btn" onClick={props.action}>
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
            <span class="text">{props.label}</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
        </button>

    )
}

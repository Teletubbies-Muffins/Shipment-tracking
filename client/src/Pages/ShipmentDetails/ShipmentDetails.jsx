import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import { useParams } from 'react-router-dom'
import './ShipmentDetails.css'
import { Axios } from '../../Components/Axios/Axios'
// import Navbar from '../../Components/NavBar/Navbar'
import VerticalLinearStepper from '../../Components/Steps/Steps'
import { Grid } from '@mui/material'

export default function ShipmentDetails() {
    const [Shipment, setShipment] = useState({})

    const { sh_id } = useParams()
    const getShipmentDetails = () => {
        Axios.get(`shipment/${sh_id}`).then((res) => {
            // alert("get")
            setShipment(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err.data)
        })
    }

    const handleUpdateStatus = () => {

    }
    const handleUpdateButtonClicked = () => {
        document.getElementById('shipment-info-card').style.display = "none"
        document.getElementById('form-container').style.display = "inline"
    }
    useEffect(() => {
        getShipmentDetails()
    }, [])
    return (
        <>
            <Navbar />
            <div className='shipment-details-page'>
                {/* ShipmentDetails */}
                <Grid>

                    <Grid className='' id="shipment-info-card" item>
                        <p>to: {Shipment.to}</p>
                        <p>description: {Shipment.description}</p>
                        <p>Estimated arrival date {Shipment.arrivalTime}</p>
                        <button className='btn btn-secondary ' onClick={handleUpdateButtonClicked}>Update Shipment Status</button>
                        <hr />
                    </Grid>
                    <Grid item className='form-container' id="form-container">
                        <form action="" className='card'>
                            <label htmlFor="">title</label>
                            <input type="text" name='title' />
                            <br />
                            <label htmlFor="">Description</label>
                            <input type="text" name='description' />
                            <hr />
                            <button className='btn btn-secondary '>Update</button>
                        </form>
                        <hr />
                    </Grid>
                    <Grid className='card step' item>
                        {Shipment.steps ? <VerticalLinearStepper steps={Shipment.steps} /> : <VerticalLinearStepper steps={[{ label: "Pending", description: "your shipment still not shipped" }]} />}


                    </Grid>
                </Grid>
            </div>
        </>
    )
}

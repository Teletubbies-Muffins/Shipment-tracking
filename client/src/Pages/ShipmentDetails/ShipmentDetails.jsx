import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import './ShipmentDetails.css'
import { Axios } from '../../Components/Axios/Axios'
// import Navbar from '../../Components/NavBar/Navbar'
import VerticalLinearStepper from '../../Components/Steps/Steps'
import { Grid } from '@mui/material'
import GetFullDate from '../../Components/DateStrToDate'
export default function ShipmentDetails() {
    const navigate = useNavigate()
    const [Shipment, setShipment] = useState({})
    const [Msg, setMsg] = useState(false)
    const { sh_id } = useParams()
    const getShipmentDetails = () => {
        Axios.get(`/shipment/shipment-details/${sh_id}`).then((res) => {
            // alert("get")
            setShipment(res.data)
            // console.log(res.data)
        }).catch((err) => {
            console.log(err.data)
        })
    }

    const handleUpdateStatus = (e) => {
        e.preventDefault()
        Axios.post('/shipment/' + sh_id, {
            label: e.target.label.value,
            description: e.target.description.value,
        }).then((res) => {
            getShipmentDetails()
            document.getElementById('shipment-info-card').style.display = "inline"
            document.getElementById('form-container').style.display = "none"
        }).catch((err) => {
            console.log(err)
            setMsg("Error updating status try again")
        })
    }
    const handleUpdateButtonClicked = () => {
        document.getElementById('shipment-info-card').style.display = "none"
        document.getElementById('form-container').style.display = "inline"
    }

    const handleDeleteShipment = () => {
        Axios.delete('/shipment/' + Shipment._id).then((res) => {
            alert("Shipment Deleted")
            navigate('/home')
        }).catch((err) => {
            setMsg("Error when deleting try again")
            console.log(err)

        })
    }
    useEffect(() => {
        getShipmentDetails()
    }, [])

    return (
        <>
            <Navbar />
            <div className='shipment-details-page'>
                {/* ShipmentDetails */}
                {/* <div> */}

                <div className='' id="shipment-info-card" >
                    <p>to: {Shipment.to}</p>
                    <p>description: {Shipment.description}</p>
                    <p>Estimated arrival date {GetFullDate(Shipment.arrivalTime)}</p>
                    <hr />
                    <div className='action-box'>
                        <button className='btn btn-secondary ' onClick={handleUpdateButtonClicked}>Update Shipment Status</button>
                        <button className='btn btn-danger ' onClick={handleDeleteShipment}>Delete</button>


                    </div>
                    <hr />
                </div>
                <div item className='form-container' id="form-container">
                    <form action="" className='card' onSubmit={handleUpdateStatus}>
                        <p>Update status</p>
                        <label htmlFor="">label</label>
                        <input type="text" name='label' />
                        <br />
                        <label htmlFor="">Description</label>
                        <input type="text" name='description' />
                        <hr />
                        <button className='btn btn-secondary '>Update</button>

                    </form>
                    <hr />
                </div>
                <div className='card step' item>
                    {Shipment.steps ? <VerticalLinearStepper steps={Shipment.steps} /> : <VerticalLinearStepper steps={[{ label: "Pending", description: "your shipment still not shipped" }]} />}


                </div>
                {/* </div> */}
            </div>
        </>
    )
}

import React, { useState, useEffect } from 'react'
import "./shipments.css";
import { Axios } from '../../Components/Axios/Axios';
import { Grid } from "@mui/material"
import MainCard from '../../Components/MainCard/MainCard';
import Navbar from '../../Components/NavBar/Navbar';
import ShipmentCard from '../../Components/ShipmentCard/ShipmentCard';
import ActionButtons from './ActionButtons';
export default function Shipments() {
  const [shipments, setShipments] = useState([])
  const [shipmentsFilter, setShipmentsFilter] = useState('all')
  const getShipments = () => {
    Axios.get(`shipment/user-shipments/${localStorage.getItem('user')}`).then((res) => {
      setShipments(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log("error getting data")
    })
  }

  useEffect(() => {
    getShipments()
  }, [])

  return (
    <div className="shipment-page">
      <Navbar />
      <ActionButtons handleChangeTab={setShipmentsFilter} />
      <Grid container gap={1} className='cards-container'>
        {shipmentsFilter == 'all' ? shipments.map((shipment) => (
          <ShipmentCard shipment={shipment} />
        )) : shipmentsFilter == "on-del" ? shipments.map((shipment) => {
          if (shipment.done == false) {
            return <ShipmentCard shipment={shipment} />
          }
        }) : shipments.map((shipment) => {
          if (shipment.done == true) {
            return <ShipmentCard shipment={shipment} disableDeliver={true}/>
          }
        })
        }
      </Grid>
    </div>
  )
}

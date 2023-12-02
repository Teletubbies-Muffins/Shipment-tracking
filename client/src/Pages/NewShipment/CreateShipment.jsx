import React from 'react'
import './CreateShipment.css'
import { Grid, FormLabel, TextField, Button } from '@mui/material'
import Navbar from '../../Components/NavBar/Navbar'
// import InsertLinkIcon from '@mui/icons-material/InsertLink';
export default function CreateShipment() {
  const ShipmentId = "Auto Generated"
  return (
    <>
    
      <Navbar/>
      {/* <h2 className='headline'>Create new Shipment</h2> */}
    <div className='create-shipment-page' >
      <Grid container className='container'>
        <Grid item sm={12} xs={12} md={5}>
          <form action="">
            <FormLabel className='label '>From</FormLabel>
            <TextField size='small' name='' className='input'></TextField>
            <FormLabel className='label'>To</FormLabel>
            <TextField size='small' name='' className='input'></TextField>
            <hr />
            <FormLabel className='label'>Shipment Material</FormLabel>
            <TextField size='small' name='' className='input'></TextField>
            <FormLabel className='label'>Estimated delivery date</FormLabel>
            <input size='small' name='' type='date' className='input'></input>
            <Button>Create</Button>
          </form>
        </Grid>
        <Grid item sm={12} xs={12} md={5}>
          <h2 className="text-white">Create New Shipment</h2>
          <hr />
          <h5 className='text-white'>After Creating new shipment share Shipment ID With the receiver so he can see the details </h5>
          <hr />
          <h4 className='shipment-id'>
            {ShipmentId}
            {/* <Button variant='contained' className='float-end'>Copy</Button> */}
            <span class="material-symbols-outlined float-end ">
              content_copy
            </span>
          </h4>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

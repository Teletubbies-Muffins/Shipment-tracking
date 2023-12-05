import React, { useState } from 'react'
import './CreateShipment.css'
import { Grid, FormLabel, TextField, Button } from '@mui/material'
import Navbar from '../../Components/NavBar/Navbar'
import { Axios } from '../../Components/Axios/Axios'
// import InsertLinkIcon from '@mui/icons-material/InsertLink';
function generateID(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
export default function CreateShipment() {

  const [ShipmentId, setShipmentId] = useState('Auto Generated')
  const handleNewShipment = (e) => {
    e.preventDefault()
    const TempShipmentCode = generateID(10)
    Axios.post('shipment/new', {
      sh_id: TempShipmentCode,
      from: localStorage.getItem('user'),
      to: e.target.to.value,
      arrivalTime: e.target.arrivalTime.value,
    }).then((res) => {
      setShipmentId(TempShipmentCode)
      document.getElementById('success').style.display = 'flex';
      document.getElementById('form').style.display = 'none';
    }).catch((err) => {
      console.log(err)
    })
  }

  const copyShipmentCode = () => {
    // const code = "12324";

    // Create a temporary textarea element to hold the code
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = ShipmentId;
    // tempTextArea.style.position = 'fixed';
    // tempTextArea.style.left = '-9999px';
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
  };

  const handleAddAnother = () => {
    document.getElementById('success').style.display = 'none';
    document.getElementById('form').style.display = 'flex';
    setShipmentId("Auto Generated")
  }
  return (
    <>
      <Navbar />
      {/* <h2 className='headline'>Create new Shipment</h2> */}
      <div className='create-shipment-page' >
        <Grid container className='container'>
          <Grid item sm={12} xs={12} md={5}>
            <form action="" onSubmit={handleNewShipment} id="form">
              {/* <FormLabel className='label '>From</FormLabel> */}
              {/* <TextField size='small' name='from' className='input'></TextField> */}
              <FormLabel className='label'>To</FormLabel>
              <TextField size='small' name='to' className='input'></TextField>
              <hr />
              <FormLabel className='label'>Estimated delivery date</FormLabel>
              <input size='small' name='arrivalTime' type='date' className='input'></input>
              <hr style={{ color: "black" }} />
              <Button variant='outlined' type="submit">Create</Button>
            </form>
            <div action="" className='success' id="success">
              <span class="material-symbols-outlined done-icon">
                task_alt
              </span>
              <p className='text-center text-white'>Shipment Created</p>
              <Button variant='contained' color='secondary' onClick={handleAddAnother}>add another one</Button>
            </div>
          </Grid>
          <Grid item sm={12} xs={12} md={5}>
            <h2 className="text-white">Create New Shipment</h2>
            <hr />
            <h5 className='text-white'>After Creating new shipment share Shipment ID With the receiver so he can see the details </h5>
            <hr />
            <h4 className='shipment-id'>
              {ShipmentId}
              {/* <Button variant='contained' className='float-end'>Copy</Button> */}
              <span class="material-symbols-outlined float-end " onClick={copyShipmentCode}>
                content_copy
              </span>
            </h4>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

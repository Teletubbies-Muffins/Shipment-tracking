import React from 'react'
import './InfoCard.css'
import { Grid } from '@mui/material'
export default function InfoCard(props) {
  return (
    <div className='info-card' title={props.hTitle}>
      <div className='header'>
        <img src={props.img} />
        <h4>{props.title}</h4>
      </div>
      <hr />
      <p>{props.content}</p>

      <button class="btn text-white">{props.linkText}</button>



    </div>
  )

}

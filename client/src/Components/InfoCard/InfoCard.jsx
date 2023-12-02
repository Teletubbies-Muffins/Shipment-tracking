import React from 'react'
import './InfoCard.css'
import { Grid } from '@mui/material'
export default function InfoCard(props) {
  return (
    <div className='info-card' title={props.hTitle}>   
      <img src={props.img}/>
      <h4>{props.title}</h4>
      <hr/>
      <p>{props.content}</p>
      <ul class="nav nav-item">
      <button class="btn nav-link">{props.linkText}</button>

      </ul>

    </div>
  )

}

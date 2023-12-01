import React from 'react'
import './InfoCard.css'
import { Grid } from '@mui/material'
export default function InfoCard(props) {
  return (
    <div className='info-card'>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

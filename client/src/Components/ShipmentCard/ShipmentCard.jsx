import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ShipmentCard.css'
import GetFullDate from '../DateStrToDate';
export default function ShipmentCard({ shipment }) {
    const navigate = useNavigate()

    const handleViewClicked = () => {
        navigate("/shipment/" + shipment.sh_id)
    }
    return (
        <div className='shipment-card'>
            <Card sx={{ minWidth: 275 }} className='card-1'>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                        to: {shipment.to}
                    </Typography>
                    <hr />
                    <Typography variant="h5" component="div">
                        {shipment.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} >
                        expected arrival date {GetFullDate(shipment.arrivalTime)}
                    </Typography>
                    <Typography variant="body2">
                        {/* well meaning and kindly. */}
                        <br />
                        {/* {'"a benevolent smile"'} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button variant='contained' className='btn' onClick={handleViewClicked}>View</button>
                    <div className='deliver-icon-container'>
                        <span class="material-symbols-outlined">
                            local_shipping
                        </span>
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

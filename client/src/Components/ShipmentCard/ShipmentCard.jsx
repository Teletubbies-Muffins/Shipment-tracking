import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ShipmentCard.css'
export default function ShipmentCard({ shipment }) {

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
                        expected arrival date {getFullDate(shipment.arrivalTime)}
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <button variant='contained' className='btn'>View</button>
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
const getFullDate = (dateStr) => {
    const date = new Date(dateStr)
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!

    const yyyy = date.getFullYear();

    return `${dd}-${mm}-${yyyy}`;
}
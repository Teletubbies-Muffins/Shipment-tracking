import React, { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'
import { Axios } from '../Axios/Axios'

export default function SearchBar({ handleSetErr }) {
    // const [shipment_id, setShipment_id] = useState()
    const navigate = useNavigate()
    const handleSearch = () => {
        handleSetErr(false)
        const searchBar = document.getElementById('search_bar')

        Axios.get('shipment/shipment-details/' + searchBar.value).then((res) => {
            navigate('/shipment/' + searchBar.value)
        }).catch((err) => {
            console.log(err)

            handleSetErr("Shipment not found")

        })
    }
    return (
        <div class="search">

            <input id="search_bar" placeholder="Shipment ID..." type="text" />

            <button type="submit" onClick={handleSearch}>Search</button>

        </div>

    )
}

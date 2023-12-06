import React from 'react'
import "./MainCardS.css";
import s_i from "./shipping info.png";
export default function MainCard(props) {
  return (
    <div className='Outer-Div'>
      <img src={s_i}/>
      <p>#SH:{props.id}</p>
      <p>TO:{props.cust}</p>
      <p>Date:{props.date}</p>
<button className="btn btn-primary" onClick={props.View}>VIEW</button>
<button className="btn btn-warning" onClick={props.Delete}>DELETE</button>

    </div>
  )
}

import React from 'react'
import './pin.scss'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude ,item.longitude]}>
    <Popup>
      <div className='popupContainer'>
       <img alt=''  src={item.img}/>
       <div className='textContainer'>
         <Link to={`/${item.id}`} >{item.title}</Link>
         <span className='bed'>{item.bedroom} bedroom  , {item.bathroom} bathroom</span>
         <b>${item.price}</b>
       </div>
      </div>
    </Popup>
  </Marker>
  )
}

export default Pin

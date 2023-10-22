import React from 'react'
import {NavLink} from 'react-router-dom'


//<a> tag'inin react karşılığı navlink'tir (react-router-dom içindedir)
//<a>'da sayfa yenilenir. ve Href davranışı vardır.
//Böylece sayfa yenilenmeden içerik değişir.

function NavBar() {
  return (
    <>
        <NavLink to='/dashboard'>Dashboard</NavLink> | 
        <NavLink to='/profile'>Profile</NavLink>  | 
        <NavLink to='/setting'>setting</NavLink>
    </>
  )
}

export default NavBar
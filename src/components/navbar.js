import React from 'react'
import "./css/navbar.css"

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar--logo'>
        <img src={require('../images/troll-face.png')} alt="" className='navbar--trollface' />
        <h1 className='navbar--title'>MemeGenerator</h1>
      </div>
      <h3 className='navbar--right'>React Course - Project 3</h3>
    </div>
  )
}

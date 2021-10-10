import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'
export default function Layout(props) {
  return (
    <div>
      <header className='nav-bar'>
        <div className='logo-div'>
          <img className='icon' src="https://cdn-icons-png.flaticon.com/128/685/685664.png" />
          <h1>APB</h1>
        </div>
        {props.currentUser ? (
          <div className='login-div'>
            <h2 className='username-div'> Hi, {props.currentUser.username}</h2>
            <br />
            <div className='logout-div'>
              <button className='logout-button' onClick={props.handleLogout}>Logout</button>
              <Link className='home-link' to='/'>Home</Link>
            </div>
          </div>
        ) : (
          <Link className='login-link' to='/login'>Login/Register</Link>
        )}
      </header>
      {props.children}
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>APB</h1>
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
            <Link to='/'>Home</Link>
          </div>
        ) : (
          <Link to='/login'>Login/Register</Link>
        )}
      </header>
      {props.children}
    </div>
  )
}

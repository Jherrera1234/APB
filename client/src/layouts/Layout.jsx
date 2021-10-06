import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>APB</h1>
        <Link to="/login">Login/Register</Link>
        <hr />
      </header>
      {props.children}
    </div>
  )
}

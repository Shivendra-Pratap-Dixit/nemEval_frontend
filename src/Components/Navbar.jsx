import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",margin:"10px 5px 5px 10px"}}>
      <div>
        <Link to="/"><h4>Home</h4></Link>
      </div>
      <div>
        <Link to="/posts"><h4>Posts</h4></Link>
      </div>
      <div>
        <Link to="/login"><h4>Login</h4></Link>
      </div>
      <div>
        <Link to="/signup"><h4>Signup</h4></Link>
      </div>
      <div>
        <Link to="/logout"><h4>Logout</h4></Link>
      </div>
    </div>
  )
}

export default Navbar
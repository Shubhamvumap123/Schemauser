import React from 'react'
import {Link} from 'react-router-dom'
const User = () => {
  return (
    <div>
      <Link to="/CreateUser">CreateUser</Link>
      <Link to="/EditUser"></Link>
      <Link to="/ShowUser"></Link>
    </div>
  )
}

export default User
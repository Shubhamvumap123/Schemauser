import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
        <h4>Home</h4>
<Link to="/Users">Users</Link>
<Link to="/Brand">Brand</Link>
    </div>
  )
}

export default Home
import axios from 'axios';
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Routes, Route, useParams} from 'react-router-dom';


const ShowUser = () => {

let [searchParams, setSearchParams] = useSearchParams();

let {userID} = useParams();

// let getData = ({getdata})=>{
//     axios.get("http://localhost:5000/users/?`${id}`")
//     .then((res)=>{
//         setSearchParams(res.data)
//     })

// }

  return (
    <div>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
      <div>{searchParams.name}</div>
    </div>
  );
}

export default ShowUser
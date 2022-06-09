import React from 'react'
import { useSearchParams } from 'react-router-dom'
const ShowUser = () => {
let [searchParams, setSearchParams] = useSearchParams();


  return (
    <div>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </div>
  );
}

export default ShowUser
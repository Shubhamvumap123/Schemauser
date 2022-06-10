import React,{useState,useEffect} from 'react'
import {Link,Navigate} from 'react-router-dom'
import axios from 'axios'
const User = ({getdata}) => {
  const [showdata,setshowdata]=useState([]);

  let fetchData = () => {
  axios.get(`http://localhost:5000/users`)
    .then(res => {
     
      setshowdata(res.data)
     } )
    
  }
  useEffect (() =>{
fetchData();
  },[])

  // fetchData();
 console.log(showdata);
  return (
    <div>
      <div>
        <Link to="/users/create">CreateUser</Link>
      </div>
   

      <div className="App">
        <h1>Employee Table</h1>
        <table style={{ border: "1px solid" }}>
          <thead>
            <tr>
              <th >Name</th>
              <th>Age</th>
              <th>Line1</th>
              <th>Line2</th>
              <th>Contry</th>
              <th>City</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody >
            {showdata.map((value, key) => {
              return (
                <tr key={key}>
                  <td style={{ border: "1px solid" }}>{value.name}</td>
                  <td style={{ border: "1px solid" }}>{value.age}</td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].line1}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].line2}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].contry}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].city}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {value.address[0].type}
                  </td>
                  <td style={{ border: "1px solid" }}>
                    {/* <button onclick={handleData}>UserId</button> */}
                    <Link to={`/user/${value._id}`}>UserID</Link>
                  </td>
                  <td style={{ border: "1px solid" }}>
                    <Link to="/users/:id/edit">IDEDIT</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User
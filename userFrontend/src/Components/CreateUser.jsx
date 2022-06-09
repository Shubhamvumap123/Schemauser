import React, { useState, useEffect } from "react";
import axios from "axios";
// import{useHistory} from 'react-router-dom';

const User = () => {
  const [data, setdata] = useState([]);
  const [name1, setname] = useState({
    name: "",
    age: "",
  });
  const [address, setaddress] = useState({
    line1: "",
    line2: "",
    city: "",
    contry: "",
    type: "",
  });
  const handlechange = (e) => {
    let { name, value } = e.target;

    setname({ ...name1, [name]: value });
    // (e.target.value);
  };
  console.log(name1);
  const handleAddress = (e) => {
    let { name, value } = e.target;

    setaddress({ ...address, [name]: value });
    console.log(address);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let postUser = async () => {
      let postUsers = await axios.post(`http://localhost:5000/users/create`, {
        name: name1.name,
        age: name1.age,
        address: [
          {
            line1: address.line1,
            line2: address.line2,
            city: address.city,
            contry: address.contry,
            type: address.type,
          },
        ],
      });
      console.log(postUsers.data);
    };

    postUser();
  };

  return (
    <div>
      <form className="create-form">
        <label>Name</label>
        <input placeholder="name" name="name" onChange={handlechange} />

        <label>age</label>
        <input placeholder="age" name="age" onChange={handlechange} />

        <label>address</label>
        <input placeholder="line1" name="line1" onChange={handleAddress} />

        <input placeholder="line2" name="line2" onChange={handleAddress} />
        <input placeholder="city" name="city" onChange={handleAddress} />
        <input placeholder="contry" name="contry" onChange={handleAddress} />
        <input placeholder="type" name="type" onChange={handleAddress} />

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      <div>
        
      </div>
    </div>
  );
};

export default User;


import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ShowUser () {
    var arr = [];
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setPosts(res.data);
        arr.push(posts);
      })
      
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <table style={{ border: "1px solid" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Line1</th>
            <th>Line2</th>
            <th>Contry</th>
            <th>City</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((value, key) => {
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
                <td style={{ border: "1px solid" }}>{value.address[0].city}</td>
                <td style={{ border: "1px solid" }}>{value.address[0].type}</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowUser;

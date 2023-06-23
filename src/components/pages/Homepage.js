
import React, {useEffect, useState} from 'react'
import axios from "axios";
import { Table,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Homepage() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    // getAllUsers()
    getAllUsersAwait()
  }, []);

  const getAllUsersAwait =async()=>{
    const result = await axios.get("http://localhost:5000/users")
    console.log(result);
    setUsers(result.data)
    console.log("before axios Api call");
  }

  const deleteUser = async(userId)=>{
    await axios.delete(`http://localhost:5000/users/${userId}`)
    getAllUsersAwait()
  }

  const getAllUsers =()=>{
    axios.get("http://localhost:5000/users")
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
    console.log("after axios Api call");
  }
  return (

    <div className='container'>
      <h4 className='py-3'>User Management System</h4>
   
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        users.map((user,index)=>{
         return <tr key={index}>
          <td>{index+1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <Link to={`/users/view/${user.id}`} className='btn btn-info me-2'>View</Link>
            <Link to={`/users/edit/${user.id}`} className='btn btn-outline-info me-2'>Edit</Link>
            <Button onClick={()=>deleteUser(user.id)} variant="danger">Delete</Button>{' '}
          </td>
        </tr>
        })
      }
        
        
      </tbody>
    </Table>
  
    </div>
  )
}

export default Homepage

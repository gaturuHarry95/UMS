import React,{useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom";
import {useEffect } from 'react';
import { ListGroup } from "react-bootstrap";




const ViewUser = () => {
    const {userId} = useParams()//it will grab the userid value from the url and return
    const initialState = {name:'', username:'', email:'', phone:'', website:''}
    const [user,setUser] = useState(initialState)
    const [address,setAddress] = useState({})
    const [company,setCompany] = useState({})

   useEffect(()=>{
    fetchUser()
   },[])

   const fetchUser = async()=>{
    const response = await axios.get(`http://localhost:5000/users/${userId}`)
    setUser(response.data)
    setAddress(response.data.address)
    setCompany(response.data.company)
   }
  return (
    <div className='container'>
  
    <ListGroup variant="flush" className='p-4 w-75'>
      <ListGroup.Item>Fullname: {user.name}</ListGroup.Item>
      <ListGroup.Item>Username: {user.username}</ListGroup.Item>
      <ListGroup.Item>Email: {user.email}</ListGroup.Item>
      <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
      <ListGroup.Item>Website: {user.website}</ListGroup.Item>
      <ListGroup.Item>Address: {address.street}|{address.city}</ListGroup.Item>
      <ListGroup.Item>Company name: {company.name}</ListGroup.Item>
    </ListGroup>
 
    </div>
  )
}

export default ViewUser
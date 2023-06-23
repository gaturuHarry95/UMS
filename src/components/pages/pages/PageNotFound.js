
import React from 'react'
import { Button } from "react-bootstrap";
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className='hide-navbar'>
      <h2 className='p-4'>Page You are looking for does not exist</h2>
      <button type="button" className="btn btn-primary">Normal Bootstrap</button>
       <Button className='m-2' variant="primary">React Bootstrap</Button> 
       <a href='/'>Home </a> 

       {/* You should consider using react bootstrap to the normal css bootstrap */}
    </div>
  )
}

export default PageNotFound

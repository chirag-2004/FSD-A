import './App.css'
import React from 'react';
// rafce
const App=({s1,s2,s3})=>{
  return(
    <div id="disp"> 
      <h1>Student Details</h1>
      <h2>Name: {s1}</h2>
      <h2>Email: {s2}</h2>
      <h2>Phone No: {s3}</h2>
    </div> 
  )
}

export default App

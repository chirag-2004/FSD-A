import React, { useState } from 'react'
import pic from '../images/photos.avif'
import './ImageEditor.css'
const ImageEditor = () => {
    const[height,setHeight]= useState(200);
    const[width,setWidth]= useState(200);
    const[rotation,setRotation]= useState(0);
  return (
    <div className='disp'>
    <div className="img">
        <img 
        src={pic}
        style={{
            height: height,
            width : width,
            transform: `rotate(${rotation}deg`)
        }}
        />
        
        </div>
        </div>
    
    
  )
}

export default ImageEditor;
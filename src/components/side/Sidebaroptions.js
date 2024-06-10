import React from 'react'
import './Sidebaroptions.css'

function Sidebaroptions({ active, text, Icon}) {                  // here we using props and write this props in app.js
  return (        
    <div className="sidebaroptions">
        <Icon/>
        <h2>{text}</h2>
      
    </div>
  )
}

export default Sidebaroptions

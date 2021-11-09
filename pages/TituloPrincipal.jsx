import React from 'react'
import './TituloPrincipal.css'

 

const TituloPrincipal = (props) => {
  return (
    <div>
      <div className="container">
        
         <div className="row ">
             <h1 className="mt-4 mb-4 container-fluid px-4">{props.name} </h1>
          </div>
      </div>
     
      
    </div>
  )
}

export default TituloPrincipal

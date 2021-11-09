import React from 'react'
import './CardErro.css'
 


const CardSemImg = (props) => {
  return (
  
    

  <div className="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
                            <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon">


                                    <h1 className="card-title text-center">356.900<p className="card-category">
                                            00/00/00</p>
                                    </h1>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <h6 className="card-title">{props.title}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
  </div>
      

 

  )
}

export default CardSemImg
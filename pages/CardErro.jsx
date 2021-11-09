import React from 'react'
import './CardErro.css'
 


const CardErro = (props) => {
  return (
  
    

  <div className="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
                            <div className="card card-stats">
                                <div className="card-header card-header-danger card-header-icon">

                                    <div className="card-icon style_prevu_kit_vermelho ajuste_card ">
                                        <img className="tamImg" src="https://cdn-icons-png.flaticon.com/512/545/545676.png" alt="" />
                                    </div>
                                    <h1 className="card-title">356.900<p className="card-category">
                                            00/00/00</p>
                                    </h1>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <h6 className="card-title">{props.descricao}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
  </div>
      

 

  )
}

export default CardErro
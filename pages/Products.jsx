import React from "react";
import TituloPrincipal from "./TituloPrincipal";
import "./Products.css";
import CardResponsivo from "./CardResponsivo";

const Products = () => {
  return (
    <>
    
    
      <div className="row text-center">
        <TituloPrincipal name="DigX Analyctics Experience - Home" />
      </div>

      <div className="container ">
        <div className="row">
          <h1 className="mt-5 ">Dashboard</h1>
         </div>
          <div className="row d-flex text-center">

            <div className="col-lg-3 col-md-3  col-sm-3">
              <div className="tam"> 
                <p>CPF</p>
                <div className="">
                  <img
                    className="tamImg"
                    src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3  col-sm-3">
              <div className="tam">
                <p>CNPJ</p>
                <div className="">
                  <img
                    className="tamImg"
                    src="https://cdn-icons-png.flaticon.com/512/1465/1465439.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6" >
              <CardResponsivo/>
            </div>
          </div>
          


          

        
      </div>
    </>
  );
};

export default Products;

import React from "react";
import CardCpf from "./CardCpf";
import CardInternet from "./CardInternet";
import CardMobile from "./CardMobile";
import TituloPrincipal from "./TituloPrincipal";
import GraficoTime from "./GraficoTime";

const Reports = () => {
  return (
    <div className="row ">
      <div className="col-12 ">
        <div className="container">
          <div className="">
             <div className="row ">
                <div className="col-6 mt-5 mb-3"> 
                   <h1>Cliente</h1>
                </div>
                <div className="col-6 mt-5 mb-3"> 
                   <h1>Erros por plataforma</h1>
                </div>

                <div className="row">
                  <div className="col-6">
                    <CardCpf/>
                  </div>

                  <div className="col-3">
                    <CardMobile/>
                  </div>

                  <div className="col-3">
                    <CardInternet/>
                  </div>

                </div>



               <div className="div">
                 <h1>lista aqui</h1>
               </div>

               <div className="col-lg-12 col-md-12 col-sm-12 ">
                  <div className="dov mb-5">
                    <p>Jornada do cliente</p>
                    <hr />
                    <GraficoTime />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

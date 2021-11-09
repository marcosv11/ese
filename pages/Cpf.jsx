import React from "react";
import CardErro from "./CardErro";
import CardAcerto from "./CardAcerto";
import GraficoMaior from "./GraficoMaior";
import "./Home.css";
import TituloPrincipal from "./TituloPrincipal";
import CardSemImg from "./CardSemImg";
import GraficoLateral from "./GraficoLateral";

const Cpf = () => {
  return (
    <>
      <div className="row ">
        <div className="col-12 ">
          <div className="container">
            <div className="">
              <div className="row text-center">
                <TituloPrincipal name="DigX Analyctics Experience - Dashboard CPF" />
              </div>

              <div className="row ">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <CardAcerto descricao="Quantidade de CPF's com erro" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <CardErro descricao="Quantidade de CPF's sem erro" />
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12  mb-5">
                  <div className="dov">
                    <p>Distribuição de erros e sucessos CPF</p>
                    <hr />
                    <GraficoMaior />
                  </div>
                </div>
              </div>

              <div className="row mt-5 ">
                <h1>Erros por CPF</h1>

                <div className="container">
                  <div className="row  ">
                    <div className="col-lg-6 col-md-6  col-sm-6">
                      <img
                        src="https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <img
                        src="https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row  mt-5">
                <div className="col-lg-3 col-md-3  col-sm-3">
                  <CardSemImg title="Quantidade de CPF's com erro"/>
                </div>
                <div className="col-lg-3 col-md-3  col-sm-3">
                  <CardSemImg title="Quantidade de CPF's com erro"/>
                </div>
                <div className="col-lg-3 col-md-3  col-sm-3">
                  <CardSemImg title="Quantidade de CPF's com erro"/>
                </div>
                <div className="col-lg-3 col-md-3  col-sm-3">
                  <CardSemImg title="Quantidade de CPF's com erro"/>
                </div>
              </div>

              <div className="row">
                <div className="row mb-2 mt-5">
                  <h1>Erros por CPF</h1>
                </div>
                <div className="dov col-lg-6 col-md-6  col-sm-6  ">
                  <p>Distribuição de erros e sucessos CPF - mobile</p>

                  <hr />
                  <GraficoLateral />
                </div>
                <div className="dov col-lg-6 col-md-6  col-sm-6">
                  <p>Distribuição de erros e sucessos CPF - internet</p>
                  <hr />
                  <GraficoLateral />
                </div>
              </div>

              <div className="row"></div>

              <div className="row mt-5">
                <h1 className="mt-5">Mapeamento das jornadas</h1>
                <div className=" col-lg-6 col-md-6  col-sm-6">
                  <CardErro descricao="Quantidade de tipos de erros com jornada - mobile" />
                </div>
                <div className=" col-lg-6 col-md-6  col-sm-6">
                  <CardErro descricao="Quantidade de tipos de erros com jornada - internet" />
                </div>
              </div>

              <div className="row ">
                <div className="dov col-lg-6 col-md-6  col-sm-6">
                  <GraficoLateral />
                </div>
                <div className="dov col-lg-6 col-md-6  col-sm-6">
                  <GraficoLateral />
                </div>
              </div>

              <div className="row">
                <h1 className="mt-5">Lista de CPF's mais atritados - Geral</h1>            
              </div>

              
            </div>
            <div className="row">
                <div className="col-12">
                  <img src="https://images.sftcdn.net/images/t_app-cover-m,f_auto/p/befbcde0-9b36-11e6-95b9-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg" alt="" />
                </div>
              </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Cpf;

import React from "react";
import { Link } from "react-router-dom";
import Voltar from '../../assets/voltar.png'

const Criar = () => {
  return (
    <div className=" flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      
      <div>
        <Link to={'/usuario/home'}><img src={Voltar} alt="voltar" className="w-16 absolute top-20 left-10"/></Link>
      </div>
      <div className=" h-1/5 flex items-center justify-center align-middl">
        <h1 className=" font-extrabold text-center text-2xl mb-2 text-green-400 ">
          ADICIONE EXERCICIOS <br /> OU TREINOS COMPLETOS
        </h1>
      </div>

      <div className=" grid grid-cols-1 gap-8 text-xl font-extrabold tex">
        <div className="card flex">
          <Link to={"/exercicio"} className="btn card flex gap-8 text-2xl">
            <p>SEUS EXERCÍCIOS</p>{" "}
          </Link>
        </div>
        <div className="card">
          <Link to={"/treino"} className="btn card flex gap-8 text-2xl">
            <p>SEUS TREINOS</p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Criar;

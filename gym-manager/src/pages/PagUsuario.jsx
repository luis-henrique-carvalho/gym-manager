import React from "react";
import Treino from "../assets/treino.svg";
import Alunos from "../assets/alunos.svg";
import Feedback from "../assets/feedback.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { api } from "../services/api";
import { useEffect } from "react";
import { useState } from "react";

const PagUsuário = () => {
  const user = useAuth();
  const [type, setType] = useState(true);

  useEffect(() => {
    if (user)
      api
        .get(`users/${user.id}`)
        .then((res) => {
          const tipo = res.data.type;
          if (tipo === "Atleta") {
            setType(false);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [type]);

  console.log(type);

  return (
    <>
      <div className=" flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
        {type ? (
          <>
            <div className=" h-1/5 flex items-center justify-center align-middl">
              <h1 className=" font-extrabold text-center text-4xl mb-2 text-green-400 ">
                PAGINA <br /> DO TREINADOR
              </h1>
            </div>

            <div className=" grid grid-cols-1 gap-10 text-xl font-extrabold tex">
              <div className="card flex">
                <Link
                  to={"/usuario/criar"}
                  className="btn card flex gap-8 text-2xl"
                >
                  <p>Passar Treino</p>{" "}
                  <img src={Treino} alt="" className=" w-2/12 text-white" />
                </Link>
              </div>
              <div className="card">
                <Link
                  to={"/usuario/alunos"}
                  className="btn card flex gap-8 text-2xl"
                >
                  <p>Seus Alunos</p>{" "}
                  <img src={Alunos} alt="" className=" w-2/12 text-white" />
                </Link>
              </div>
              <div className="card">
                <Link className="btn card flex gap-8 text-2xl">
                  <p>Feedback</p>{" "}
                  <img src={Feedback} alt="" className=" w-2/12 text-white" />
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className=" h-1/5 flex items-center justify-center align-middl">
              <h1 className=" font-extrabold text-center text-4xl mb-2 text-green-400 ">
                PAGINA <br /> DO ATLETA
              </h1>
            </div>

            <div className=" grid grid-cols-1 gap-10 text-xl font-extrabold tex">
              <div className="card flex">
                <Link
                  to={"/aluno/treino"}
                  className="btn card flex gap-8 text-2xl"
                >
                  <p>Ver Treino</p>{" "}
                  <img src={Treino} alt="" className=" w-2/12 text-white" />
                </Link>
              </div>
             
              <div className="card">
                <Link className="btn card flex gap-8 text-2xl">
                  <p>Feedback</p>{" "}
                  <img src={Feedback} alt="" className=" w-2/12 text-white" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PagUsuário;

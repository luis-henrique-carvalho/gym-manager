import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Lupa from "../../assets/lupa.png";
import { useState } from "react";

import { useAuth } from "../../context/useAuth";
import { api } from "../../services/api";

import CardAluno from "./CardAluno";

const Alunos = () => {
  const {user} = useAuth();

  const [alunos, setAlunos] = useState([]);
  const [detalhes] = useState(false);


  useEffect(() => {
    if (user) {
      api
        .get(`/users/${user.id}`)
        .then((res) => {
          setAlunos(res.data.Users);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, [user]);
  console.log(alunos);



  return (
    <>
      {!detalhes && (
        <div className="flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
          <div className=" cont">
            <div className="">
              
              {/* pesquisa e adiciona */}
              <h2 className=" font-extrabold text-center text-3xl mb-5  text-green-400">
                SEUS ALUNOS
              </h2>
            </div>
            <div className="flex flex-row justify-between align-middle space-x-12 mb-10 rounded-md">
              <div className=" flex flex-row bg-white items-center justify-center align-middle rounded-md">
                <form
                  action=""
                  className=" flex flex-row gap-2 bg-green-500  items-center justify-center align-middle rounded-md px-4 py-2"
                >
                  <input
                    type="text"
                    placeholder="Pesquisar Aluno"
                    className=" h-12 text-center rounded-md"
                  />
                  <button>
                    <img src={Lupa} alt="" className="w-10 " />
                  </button>
                </form>
              </div>

            </div>{" "}
            {/* fim pesquisa e adiciona */}
            <div className=" grid grid-cols-1 gap-8 mb-10 text-xl font-extrabold tex">
              {alunos.map(({ id, name, email }) => {
                return (
                  <div
                    className="card px-5 flex gap-5 flex-row align-middle"
                    key={id}
                  >
                    <div>
                      <p className=" text-white truncate ">{name}</p>
                    </div>
                    <Link to={`/alunos/details/${id}`} className=" btn__sec">Detalhes</Link>
                  </div>
                );
              })}

              <Link to={"/usuario/home"} className=" btn__sec">
                VOLTAR
              </Link>
            </div>
          </div>
        </div>
      )}

      {detalhes && <CardAluno />}
    </>
  );
};

export default Alunos;

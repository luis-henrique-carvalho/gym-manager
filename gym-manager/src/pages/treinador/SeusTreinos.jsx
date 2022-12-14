import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Adicionar from "../../assets/adicionar.png";
import Lupa from "../../assets/lupa.png";
import { api } from "../../services/api";
import Delete from "../../assets/delete.png";

const SeusTreinos = () => {
  const [treino, setTreino] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    api
      .get("/treino")
      .then((res) => {
        setTreino(res.data);
      })
      .catch();
  }, [success]);
  console.log(treino);

  const handleDelete = (id) => {
    console.log(id);
    api
      .delete(`/treino/${id}`)
      .then(() => setSuccess(!success))
      .catch();
  };

  return (
    <div className=" flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className="cont mt-5">
        <div className="">
          <h2 className=" font-extrabold text-center text-3xl mb-5  text-green-400">
            SEUS TREINOS
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
                placeholder="Pesquisar Exercicio"
                className="  h-10 text-center rounded-md"
              />
              <button>
                <img src={Lupa} alt="" className="w-20" />
              </button>
            </form>
          </div>

          <Link to={"/criar/treino"}>
            <img src={Adicionar} alt="" className="w-16" />
          </Link>
        </div>

        <div className=" grid grid-cols-1 gap-8 mb-10 text-xl font-extrabold tex">
          {treino.map(({ id, name, exercicio }) => {
            return (
              <div
                className="card px-5 flex gap-5 flex-row p-1 align-middle"
                key={id}
              >
                <div className=" w-2/6">
                  <p className=" text-white truncate ">{name}</p>
                </div>
                <div className=" flex justify-end gap-2 w-4/6">
                  <Link to={`/treino/details/${id}`} className=" btn__sec">
                    Detalhes
                  </Link>

                  <button onClick={() => handleDelete(id)}>
                    <img src={Delete} alt="" className="w-10" />
                  </button>
                </div>
              </div>
            );
          })}
          <Link to={"/usuario/criar"} className=" btn__sec">
            VOLTAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeusTreinos;

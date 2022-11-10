import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Delete from "../../assets/delete.png";

const TreinoUser = () => {
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    api
      .get("/treino/")
      .then((resp) => {
        setTreinos(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont mt-5">
        <div className="flex flex-col mb-2 bg-green-400 rounded-2xl gap-3 text-green-900 align-middle text-center p-8 font-extrabold ">
          <div className=" px-4 bg-white shadow-xl rounded-2xl py-2 ">
            TREINOS
            <div className=" bg-green-500 text-white p-5 rounded-sm shadow-md">
              {treinos &&
                treinos.map((treino) => (
                  <div key={treinos.id} className="rounded-xl">
                    <h2>{treino.name}</h2>
                    {treino.Exercicios &&
                      treino.Exercicios.map((exercicio) => (
                        <div key={exercicio.id} className="rounded-xl flex flex-row gap-5 justify-between ">
                          <h2 className="text-left text-green-900 text-base">
                            {exercicio.name}
                          </h2>
                          <p>id:{exercicio.id}</p>
                        </div>
                      ))}
                  </div>
                ))}
              <h2>{treinos.name}</h2>
            </div>
          </div>
        </div>

        <Link to={"/usuario/home"} className=" btn__sec   w-full">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default TreinoUser;

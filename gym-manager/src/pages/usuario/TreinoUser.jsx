import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Delete from "../../assets/delete.png";

const TreinoUser = () => {
  const [treinos, setTreinos] = useState([]);
  const [exercicio, setExercicio] = useState([]);

  useEffect(() => {
    api
      .get("/treino/")
      .then((resp) => {
        setTreinos(resp.data);

        api
          .get("/exercicio/")
          .then((resp) => {
            console.log(resp.data);
            setExercicio(resp.data);
          })
          .catch();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(exercicio);
  console.log(treinos);

  return (
    <div className="flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont mt-5 w-full">
        <div className="flex flex-col mb-2 w-full bg-green-400 rounded-2xl gap-3 text-green-900 align-middle text-center font-extrabold ">
          <div className="  bg-white shadow-xl rounded-2xl p-2 w-full ">
            <h1 className=" text-3xl">TREINOS</h1>
            <div className=" bg-green-500 text-white flex flex-col gap-1 p-2 rounded-sm shadow-md">
              {treinos &&
                treinos.map((treino) => (
                  <div
                    key={treinos.id}
                    className="rounded-xl flex flex-col gap-2 p-1 W-full border-2 border-green-600"
                  >
                    {/* peito */}
                    <h2 className=" text-2xl">Treino de {treino.name}</h2>
                    {treino.Exercicios &&
                      treino.Exercicios.map((ex) => (
                        <div
                          key={ex.id}
                          className="rounded-xl flex flex-col px-1 gap-1 w-full justify-center"
                        >
                          <h2 className="text-left ml-1 text-green-800 text-xl">
                            - {ex.name}
                          </h2>
                          {exercicio.map((exer) => (
                            <div
                              key={exer.id}
                              className=" text-green-600 flex flex-row  justify-center"
                            >
                              {exer.Settreinos &&
                                exer.Settreinos &&
                                ex.id === exer.id && (
                                  <div className="  w-full flex overflow-x-auto gap-2">
                                    {exer.Settreinos.map((set) => (
                                      <div className=" flex flex-col justify-between w-auto  px-2 py-1 items-center align-middle rounded-md bg-gray-200 gap-1">
                                        <div className="flex  flex-col whitespace-nowrap">
                                          <p className="">
                                            Repetições: {set.repeticao}
                                          </p>
                                          <p>Carga: {set.carga}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
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

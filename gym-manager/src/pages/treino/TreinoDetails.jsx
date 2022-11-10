import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

const TreinoDetails = () => {
  const { id } = useParams();

  const [idTreino, setIdTreino] = useState();
  const [name, setName] = useState();
  const [exercicios, setExercicios] = useState([]);
  const [data, setData] = useState();
  const [idExercicio, setIdExercicio] = useState();

  useEffect(() => {
    api.get(`/treino/${id}`).then((resp) => {
      const data = resp.data;
      console.log(data);
      const nome = resp.data.name;
      const exercicios = resp.data.Exercicios;
      const id = resp.data.id;
      setData(data);
      setName(nome);
      setIdTreino(id);
      setExercicios(exercicios);
    });
  }, []);

  console.log(exercicios);

  return (
    <div className="flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont">
        <div className="flex flex-col mb-2 bg-green-400 rounded-2xl gap-3 text-green-900 align-middle text-center p-8 font-extrabold ">
          <div className=" px-4 bg-white shadow-xl rounded-2xl py-2 ">
            <h1 className=" text-3xl">{name}</h1>
            <div className="bg-green-500 shadow-md text-white p-4 mt-2 rounded-xl">
              
              <p className=" text-2xl">EXERCÍCIOS</p>
              {exercicios.map((exercicio) => (
                <div key={exercicio.id} className=" text-left">
                  <h1> - {exercicio.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to={"/treino"} className=" btn__sec   w-full">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default TreinoDetails;

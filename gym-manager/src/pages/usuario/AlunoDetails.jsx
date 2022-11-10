import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

const AlunoDetails = () => {
  const { id } = useParams();
  const [aluno, setAluno] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [type, setType] = useState();
  const [treino, setTreino] = useState()

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        console.log(res.data)
        const nome = res.data.name;
        const contato = res.data.email;
        const tipo = res.data.type;
        const treino = res.data.Treinos
        setName(nome);
        setEmail(contato);
        setType(tipo);
        setTreino(treino)
      })
      .catch((err) => {
        console.log(err.response);
      });

    
  }, [id]);

  console.log(treino)

  return (
    <div className="flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont">
        <div className="flex flex-col mb-2 bg-green-400 rounded-2xl gap-3 text-green-900 align-middle text-center p-8 font-extrabold ">
          
          <div className=" px-4 bg-white rounded-2xl py-2 ">
            <h1 className=" text-3xl">{name}</h1>
            <p className=" text-green-700">{email}</p>
            <h2>{type}</h2>
          </div>

        </div>
        <Link to={'/usuario/alunos'} className=" btn__sec w-full"> Voltar</Link>
      </div>
      
    </div>
  );
};

export default AlunoDetails;

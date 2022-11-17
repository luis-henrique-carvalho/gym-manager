import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Voltar from "../../assets/voltar.png";
// import { useAuth } from "../../context/useAuth";
// import { api } from "../../services/api";

const CardAluno = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rep, setRep] = useState(0);
  const [peso, setPeso] = useState(0);

  // const { user } = useAuth();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(email);
  };

  

  return (
    <div className=" flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont">
        <div>
          <Link to={"/usuario/alunos"}>
            <img
              src={Voltar}
              alt="voltar"
              className="w-16 absolute top-20 left-10"
            />
          </Link>
          <h2 className=" font-extrabold text-center text-2xl mb-2  text-green-400">
            ADICIONAR ALUNO
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label>
            <span className="span">Nome do Aluno</span>
            <input
              type="text"
              name="name"
              className=" input"
              placeholder="Digite digite o nome do Aluno"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className=" label">
            <span>Categoria</span>
            <select name="type" id="" className=" bg-green-500 input">
              <option value="peito">Peito</option>
              <option value="costa">Costa</option>
              <option value="perna">perna</option>
              <option value="ombro">ombro</option>
              <option value="biceps">biceps</option>
              <option value="triceps">triceps</option>
            </select>
          </label>

          <label>
            <span className="span">Quantidade de Repetições</span>
            <input
              type="email"
              name="rep"
              className="input"
              placeholder="Digite a Quantidade de Repetições"
              value={rep}
              onChange={(e) => setRep(e.target.value)}
            />
          </label>

          <label>
            <span className="span">Quantidade de Peso</span>
            <input
              type="number"
              name="name"
              className=" input"
              placeholder="Insira a Quantidade de Carga"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </label>

          <button type="submit" className="btn">
            Criar Exercício
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardAluno;

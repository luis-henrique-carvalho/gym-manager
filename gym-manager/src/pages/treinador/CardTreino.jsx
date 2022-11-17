import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Voltar from "../../assets/voltar.png";
import { useAuth } from "../../context/useAuth";
import { api } from "../../services/api";


const CardTreino = () => {
  
  const [name, setName] = useState("");
 
  const navigate = useNavigate();

  const {user} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      users_id: user.id,
    };

    console.log(e);
    api
      .post("http://35.199.96.3/treino", data)
      .then((resp) => {
        console.log(resp.data.msg);
        navigate('/treino')
      })
      .catch((err) => console.log(err.mensage));
  };

  return (
    <div className=" flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont">
        <div>
          <Link to={"/usuario/home"}>
            <img
              src={Voltar}
              alt="voltar"
              className="w-16 absolute top-20 left-10"
            />
          </Link>
          <h2 className=" font-extrabold text-center text-2xl mb-2  text-green-400">
            ADICIONAR Treino
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label>
            <span className="span">Nome do Treino</span>
            <input
              type="text"
              name="name"
              className=" input"
              placeholder="Digite digite sua nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button type="submit" className="btn">
            Criar Treino
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardTreino;

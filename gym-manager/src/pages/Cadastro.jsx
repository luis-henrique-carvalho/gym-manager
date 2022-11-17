import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../services/api";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("Aluno");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(type);

    if (type === "Treinador") {
      const user = {
        name: name,
        password: password,
        email: email,
        type: type,
      };

      api
        .post("/users/", user)
        .then((resp) => {
          console.log(resp.data);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      const user = {
        name: name,
        password: password,
        email: email,
        type: type,
        users_id: "4",
      };

      api
        .post("/users/", user)
        .then((resp) => {
          console.log(resp.data);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className=" container flex-col h-screen background  justify-center bg-green-700">
      <div className=" h-2/6 flex items-center  justify-center bg-">
        <h1 className=" text-green-500 p-3 rounded-lg bg-slate-200 text-3xl shadow-lg text-center font-black z-2">
          NINGUEM TA
          <span>
            <br />
          </span>
          PURO NÃO
        </h1>
      </div>
      <div className=" h-4/6 flex flex-col justify-center items-center bg-white radios">
        <h2 className="font-extrabold text-3xl mb-2 text-green-500">
          Cadastro
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label>
            <span className="span">Nome</span>
            <input
              type="text"
              name="name"
              className=" input"
              placeholder="Digite digite sua nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className=" flex flex-col">
            <span className="span">Email</span>
            <input
              type="text"
              name="email"
              className=" input"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span className="span">Senha</span>
            <input
              type="password"
              name="password"
              className=" input"
              placeholder="Digite digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className=" label">
            <span>Tipo de usuário</span>
            <select
              name="type"
              id=""
              onChange={(e) => setType(e.target.value)}
              className=" bg-green-500 input"
            >
              <option value="Aluno">Aluno</option>
              <option value="Instrutor">Instrutor</option>
            </select>
          </label>

          <button className="btn" type="submit">
            Cadastro
          </button>
          <p className=" text-center text-green-400 ">ou faça seu login</p>
          <Link to={'/login'} className="btn__sec">Clique aqui</Link>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;

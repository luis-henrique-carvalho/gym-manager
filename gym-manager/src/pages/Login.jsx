import React from "react";
import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Img from "../assets/foto_1.jpg";
import axios from "axios";

import { LoginRequest } from "../context/Util";

import { Profiler } from "react";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();

  async function handleSubmit(e) {
    console.log(e.data)
    const user = {
      email,
      password,
    };

    e.preventDefault();
    try {
      await auth.authentication(user);
      navigate('/usuario/home')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" container flex-col h-screen background  justify-center bg-green-700">
      <div className=" h-2/5 flex items-center  justify-center bg-">
        <h1 className=" text-green-500 p-3 rounded-lg bg-slate-200 text-3xl shadow-lg text-center font-black z-2">
          NINGUEM TA{" "}
          <span>
            <br />
          </span>{" "}
          PURO NÃO
        </h1>
      </div>
      <div className=" h-3/5 flex flex-col justify-center items-center bg-white radios">
        <h2 className=" font-extrabold text-3xl mb-2 text-green-500">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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

          <button className="btn">Login</button>
          <p className=" text-center text-green-400 ">ou faça seu cadastro</p>

          <NavLink to={"/cadastro"} className="btn__sec">
            Clique aqui
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;

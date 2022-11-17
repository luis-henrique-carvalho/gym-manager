import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { api } from "../services/api";

const Navbar = () => {
 
  const { user, logout } = useAuth();
  const [tipo, setTipo] = useState();
  const navigate = useNavigate();
  console.log(user);
  if (user) {
  }
  useEffect(() => {
    if (user) {
      api
        .get(`/users/${user.id}`)
        .then((resp) => {
          console.log(resp.data);
          setTipo(resp.data.type);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [tipo, user]);

 

  const sair = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className=" bg-green-500 text-white shadow-xl flex flex-row justify-between items-center px-4 py-2">
      <NavLink to={"/usuario/home"} className={" text-lg"}>
        Home
      </NavLink>
      <ul className=" flex flex-row gap-3 text-">
        {!user && (
          <>
            <li className="link_list">
              <NavLink to={"/login"}>Login</NavLink>
            </li>

            <li className="link_list">
              <NavLink onClick={console.log(user)} to={"/Cadastro"}>
                Cadastro
              </NavLink>
            </li>

            <li className="link_list">
              <NavLink to={"/Cadastro"}></NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            {tipo === "Treinador" ? (
              <>
                <li>
                  <NavLink to={"/exercicio"}>Treinos</NavLink>
                </li>
                <li>
                  <NavLink to={"/treino"}>Exercicios</NavLink>
                </li>
                <li>
                  <NavLink to={"/usuario/alunos"}>Alunos</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={"/aluno/treino"}>Treinos</NavLink>
                </li>
              </>
            )}

            <li>
              <button onClick={sair}>Sair</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

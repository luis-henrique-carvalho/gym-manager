import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user)
  

  return (
    <nav className=" bg-green-500 text-white shadow-xl flex flex-row justify-between items-center px-4 py-2">
      <NavLink to={"/usuario/home"} className={" text-lg"}>
        Home
      </NavLink>
      <ul className=" flex">
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
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

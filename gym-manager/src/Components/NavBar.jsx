import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-green-500 text-white shadow-xl flex flex-row justify-between items-center px-4 py-2">
      <NavLink to={"/usuario/home"} className={" text-lg"}>
        Home
      </NavLink>
      <ul className=" flex">
        <li className="link_list">
          <NavLink to={"/login"}>Login</NavLink>
        </li>

        <li className="link_list">
          <NavLink to={"/Cadastro"}>Cadastro</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

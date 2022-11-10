import { useState } from "react";
import { useEffect } from "react";
import { useContext, createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./Util";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
      api.defaults.headers.common["Authorization"] = "Bearer " + user.token;
    }
  }, []);

  async function authentication(usuario) {
    console.log("cheguei aqui");
    const response = await LoginRequest(usuario);
    console.log(response);
    api.defaults.headers.common["Authorization"] = "Bearer " + response.token;

    const payload = { token: response.token, id: response.user.id };

    console.log(payload);

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    
    console.log("saindo");
    setUser(null);
    setUserLocalStorage(null);
    
  }

  return (
    <AuthContext.Provider value={{ ...user, authentication, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

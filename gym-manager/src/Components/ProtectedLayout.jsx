import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUserLocalStorage } from "../context/Util";

export const ProtectedLayout = ({ children }) => {
  const user = getUserLocalStorage()
  const navigate = useNavigate();

  console.log("aqui");
  console.log(user);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  return user ? children : <h1> Voce não tem acesso</h1>;
};

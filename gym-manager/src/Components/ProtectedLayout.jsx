import React from "react";
import { useAuth } from "../context/useAuth";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();

  console.log(auth.usuario);

  if (!auth.usuario) {
    return <h1>vc não tem acess</h1>;
  }

  return children;
};




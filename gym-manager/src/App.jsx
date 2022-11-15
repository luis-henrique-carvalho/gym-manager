import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Navbar from "./Components/NavBar";
import PagUsuario from "./pages/PagUsuario";
import Criar from "./pages/treinador/Criar";

import CardExercicio from "./pages/treinador/CardExercicio";
import CardTreino from "./pages/treinador/CardTreino";
import Alunos from "./pages/treinador/Alunos";
import SeusTreinos from "./pages/treinador/SeusTreinos";
import SeusExercicios from "./pages/treinador/SeusExercicios";
import CardAluno from "./pages/treinador/CardAluno";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedLayout } from "./Components/ProtectedLayout";
import AlunoDetails from "./pages/usuario/AlunoDetails";
import TreinoDetails from "./pages/treino/TreinoDetails";
import ExerciciosDetails from "./pages/treinador/ExerciciosDetails";
import { useAuth } from "./context/useAuth";
import TreinoUser from "./pages/usuario/TreinoUser";
import { useState } from "react";

function App() {
  return (
    <div className=" h-full min-h-full">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route
              path="/usuario/home"
              element={
                <ProtectedLayout>
                  <PagUsuario />
                </ProtectedLayout>
              }
            />
            <Route
              path="/treino"
              element={
                <ProtectedLayout>
                  <SeusTreinos />
                </ProtectedLayout>
              }
            />
            <Route
              path="/exercicio"
              element={
                <ProtectedLayout>
                  <SeusExercicios />
                </ProtectedLayout>
              }
            />
            <Route
              path="/usuario/criar"
              element={
                <ProtectedLayout>
                  <Criar />
                </ProtectedLayout>
              }
            />
            <Route
              path="/criar/exercicio"
              element={
                <ProtectedLayout>
                  <CardExercicio />
                </ProtectedLayout>
              }
            />
            <Route
              path="/criar/treino"
              element={
                <ProtectedLayout>
                  <CardTreino />
                </ProtectedLayout>
              }
            />
            <Route
              path="/criar/aluno"
              element={
                <ProtectedLayout>
                  <CardAluno />
                </ProtectedLayout>
              }
            />
            <Route
              path="/usuario/alunos"
              element={
                <ProtectedLayout>
                  <Alunos />
                </ProtectedLayout>
              }
            />
            <Route
              path="/aluno/treino"
              element={
                <ProtectedLayout>
                  <TreinoUser />
                </ProtectedLayout>
              }
            />
            <Route
              path="/alunos/details/:id"
              element={
                <ProtectedLayout>
                  <AlunoDetails />
                </ProtectedLayout>
              }
            />
            <Route
              path="/treino/details/:id"
              element={
                <ProtectedLayout>
                  <TreinoDetails />
                </ProtectedLayout>
              }
            />
            <Route
              path="/exercicios/details/:id"
              element={
                <ProtectedLayout>
                  <ExerciciosDetails />
                </ProtectedLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import ProtectedLayout from "./Components/ProtectedLayout";
import AlunoDetails from "./pages/usuario/AlunoDetails";
import TreinoDetails from "./pages/treino/TreinoDetails";
import ExerciciosDetails from "./pages/treinador/ExerciciosDetails";
import { useAuth } from "./context/useAuth";
import TreinoUser from "./pages/usuario/TreinoUser";


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

            <Route path="/usuario/home" element={<PagUsuario />} />
            <Route path="/treino" element={<SeusTreinos />} />
            <Route path="/exercicio" element={<SeusExercicios />} />
            <Route path="/usuario/criar" element={<Criar />} />
            <Route path="/criar/exercicio" element={<CardExercicio />} />
            <Route path="/criar/treino" element={<CardTreino />} />
            <Route path="/criar/aluno" element={<CardAluno />} />
            <Route path="/usuario/alunos" element={<Alunos />} />
            <Route path="/aluno/treino" element={<TreinoUser />} />
            <Route path="/alunos/details/:id" element={<AlunoDetails />} />
            <Route path="/treino/details/:id" element={<TreinoDetails />} />
            <Route
              path="/exercicios/details/:id"
              element={<ExerciciosDetails />}
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

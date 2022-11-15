import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Delete from "../../assets/delete.png";

const TreinoDetails = () => {
  const { id } = useParams();
  const [exercicio, setExercicio] = useState([]);
  const [name, setName] = useState();
  const [tid, setTid] = useState();
  const [details, setDetails] = useState();
  const [active, setActive] = useState(false);
  const [carga, setCarga] = useState();
  const [rep, setRep] = useState();
  const [success, setSuccess] = useState(false);
  const [dataExer, setDataExer] = useState([]);
  const [dataTreino, setDataTreino] = useState([]);
  const [select, setSelect] = useState();
  const [selectName, setSelectName] = useState();
  const [exercicioId, setExercicioId] = useState();

  useEffect(() => {
    api
      .get(`treino/${id}`)
      .then((res) => {
        setDataTreino(res.data);
      })
      .catch((err) => console.log(err.message));

    api
      .get("/exercicio/")
      .then((res) => {
        setDataExer(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [success, active]);

  console.log(dataExer);
  console.log(dataTreino);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      treino_id: dataTreino.id,
      name: selectName,
    };

    console.log(data);

    api
      .post("/exercicio", data)
      .then((res) => {
        console.log(res.data);
        setExercicioId(res.data.id);
      })
      .catch((err) => console.log(err.message));

    const series = {
      exercicio_id: exercicioId,
      repeticao: rep,
      carga,
    };

    api
      .post("/settreino/", series)
      .then((res) => {
        console.log(res.data);
        setSuccess(!success);
      })
      .catch();
  };

  const handleDelete = (e) => {
    api
      .delete(`/settreino/${id}`)
      .then(() => setSuccess(!success))
      .catch();
  };
  return (
    <div className="flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont mt-5">
        <div className="flex flex-col mb-2 bg-green-400 rounded-2xl gap-3 text-green-900 align-middle text-center p-8 font-extrabold ">
          <div className=" px-4 bg-white shadow-xl rounded-2xl py-2 ">
            <h1 className=" text-3xl">{exercicio.name}</h1>
            <div className="bg-green-600 shadow-md text-white p-4 mt-2 rounded-xl">
              <p className=" text-2xl">TREINO</p>
              <div className=" text-left">
                <h1 className=" text-xl btn__sec mt-1 text-center">
                  {dataTreino.name}
                </h1>

                <div className="flex flex-col gap-2 mt-2 text-sm"></div>

                <div className="p-4 flex flex-col gap-2">
                  <p className=" text-green-200">Exercicios Adicionados</p>
                  {dataTreino.Exercicios &&
                    dataTreino.Exercicios.map((ex) => (
                      <ul key={ex.id}>
                        <li>
                          <p> - {ex.name}</p>
                        </li>
                      </ul>
                    ))}
                  {active && (
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col btn__sec rounded-md"
                    >
                      <label>
                        <span className="span">Nome do Exercicio</span>
                        <input
                          type="text"
                          name="name"
                          className=" input"
                          placeholder="Digite o nome do exercicio"
                          value={name}
                          onChange={(e) => setSelectName(e.target.value)}
                        />
                      </label>

                      <label className="label">
                        <span className="span">Repetições</span>
                        <input
                          type="number"
                          name="rep"
                          className=" input__sec"
                          placeholder="Digite as Repetições"
                          value={rep}
                          onChange={(e) => setRep(e.target.value)}
                        />
                      </label>

                      <label className="label">
                        <span className="span">Carga</span>
                        <input
                          type="number"
                          name="rep"
                          className=" input__sec"
                          placeholder="Digite a Carga"
                          value={carga}
                          onChange={(e) => setCarga(e.target.value)}
                        />
                      </label>

                      <button type="submit" className="btn mt-1">
                        Criar Exercicio
                      </button>
                    </form>
                  )}

                  <button
                    onClick={() => setActive(!active)}
                    className=" btn__sec mt-2 self-center "
                    type="submit"
                  >
                    {!active ? (
                      <span>Adicionar Exercicio</span>
                    ) : (
                      <span className=" self-center">Fechar</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/treino"} className=" btn__sec   w-full">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default TreinoDetails;

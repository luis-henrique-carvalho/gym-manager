import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Delete from "../../assets/delete.png";

const ExerciciosDetails = () => {
  const { id } = useParams();
  const [exercicio, setExercicio] = useState([]);
  const [name, setName] = useState();
  const [eid, setEid] = useState();
  const [details, setDetails] = useState();
  const [active, setActive] = useState(false);
  const [carga, setCarga] = useState();
  const [rep, setRep] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    api
      .get("/exercicio/")
      .then((res) => {
        const dados = res.data;

        const exer = dados.filter((dado) => dado.id == id);
        setExercicio(exer);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id, success]);

  console.log(exercicio);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      exercicio_id: id,
      repeticao: rep,
      carga,
    };

    api
      .post("/settreino/", data)
      .then((res) => {
        console.log(res.data);
        setSuccess(!success);
      })
      .catch((err) => console.log(err.message));
  };

  const handleDelete = (id) => {
    console.log(id);
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
            <div className="bg-green-500 shadow-md text-white p-4 mt-2 rounded-xl">
              <p className=" text-2xl">EXERCÍCIOS</p>
              {exercicio.map((exercicio) => (
                <div key={exercicio.id} className=" text-left">
                  <h1 className=" text-xl"> - {exercicio.name}</h1>
                  <div className=" flex flex-col gap-2 mt-2 text-sm">
                    {exercicio.Settreinos &&
                      exercicio.Settreinos.map((serie) => (
                        <div
                          key={serie.id}
                          className=" bg-white flex flex-row  justify-between align-middle text-lefht items-center py-1 px-2 rounded-md text-green-800 "
                        >
                          <div>
                            <p> Rep: {serie.repeticao} </p>
                            <p> Carga: {serie.carga} kg</p>
                          </div>
                          <div className=" align-middle justify-center items-center">
                            <button onClick={() => handleDelete(serie.id)}>
                              <img src={Delete} alt="" className="w-10 " />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="p-4 align-middle">
                    {active ? (
                      <form className=" form mb-2" onSubmit={handleSubmit}>
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

                        <button className=" btn__sec " type="submit">
                          Confirma
                        </button>
                      </form>
                    ) : (
                      <>
                        {exercicio.Settreinos.map((series) => {
                          <p>series</p>;
                        })}
                      </>
                    )}
                    <button
                      onClick={() => setActive(!active)}
                      className=" btn__sec self-center "
                      type="submit"
                    >
                      {!active ? (
                        <span>Adicionar Serie</span>
                      ) : (
                        <span className=" self-center">Fechar</span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to={"/exercicio"} className=" btn__sec   w-full">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default ExerciciosDetails;

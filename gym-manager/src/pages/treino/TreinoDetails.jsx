import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Delete from "../../assets/delete.png";
import FormComponent from "../../Components/FormComponent";

const TreinoDetails = () => {
  const { id } = useParams();
 
  const [active, setActive] = useState(false);
  const [activeExer, setActiveExer] = useState(false);
  const [carga, setCarga] = useState("");
  const [rep, setRep] = useState("");
  const [success, setSuccess] = useState(false);
  const [dataExer, setDataExer] = useState([]);
  const [dataTreino, setDataTreino] = useState([]);
  const [selectName, setSelectName] = useState();
  const [serieID, setSerieID] = useState();

  useEffect(() => {
    api
      .get(`treino/${id}`)
      .then((res) => {
        setDataTreino(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));

    api
      .get("/exercicio/")
      .then((res) => {
        setDataExer(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  },[success, active,id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      treino_id: dataTreino.id,
      name: selectName,
    };

    api
      .post("/exercicio", data)
      .then((res) => {
        const data = res.data;
        setActive(!active);
        console.log(data.id);

        const series = {
          exercicio_id: data.id,
          repeticao: rep,
          carga: carga,
        };

        api
          .post("/settreino/", series)
          .then((res) => {
            console.log(res.data);
            setSuccess(!success);
          })
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  };

  const handleDelete = (id) => {
    api
      .delete(`/exercicio/${id}`)
      .then(() => setSuccess(!success))
      .catch();
  };

  const addSerie = (e) => {
    e.preventDefault();
    console.log(id);
    const serie = {
      exercicio_id: serieID,
      repeticao: rep,
      carga: carga,
    };
    api
      .post("/settreino/", serie)
      .then((res) => {
        console.log(res.data);
        setSuccess(!success);
        setActiveExer(!activeExer);
      })
      .catch((err) => console.log(err.message));
  };

  const serieDelete = (id) => {
    api
      .delete(`/settreino/${id}`)
      .then(() => setSuccess(!success))
      .catch();
  };

  return (
    <div className="flex flex-col items-center justify-evenly background background2 min-h-screen align-middle bg-gray-700 ">
      <div className=" cont mt-5">
        <div className=" px-4 bg-white shadow-xl rounded-2xl w-full py-2  flex flex-col mb-2  gap-3 text-green-900 align-middle text-center p-8 font-extrabold">
          <div className="bg-green-600 shadow-md text-white p-4 mt-2 rounded-xl">
            <p className=" text-2xl">SEU TREINO</p>
            <div className=" text-left">
              <h1 className=" text-xl btn__sec mt-1 text-center">
                {dataTreino.name}
              </h1>

              <div className="flex flex-col gap-3">
                <p className=" text-green-200 mt-2 text-center">
                  Exercicios Adicionados
                </p>
                {dataTreino.Exercicios &&
                  dataTreino.Exercicios.map((ex) => (
                    <div key={ex.id}>
                      <div className=" p-1 bg-white rounded-lg px-2  py-2 ">
                        <p className=" text-green-800 text-2xl p-2 text-center">
                          {ex.name}
                        </p>
                        {dataExer.map((exer) => (
                          <div
                            key={exer.id}
                            className=" text-green-600 flex  flex-row justify-center"
                          >
                            {exer.Settreinos &&
                              exer.Settreinos &&
                              ex.id === exer.id && (
                                // COMEÇO DA PUTARI
                                <div className="flex flex-col w-full gap-2 p-2">
                                  <h2 className="text-green-00">Series</h2>

                                  {exer.Settreinos.map((set) => (
                                    <div className=" flex flex-rol justify-between px-4 py-1 items-center align-middle rounded-md bg-gray-200 gap-3">
                                      <div>
                                        <p>Repetições: {set.repeticao}</p>
                                        <p>Carga: {set.carga}</p>
                                      </div>

                                      <button
                                        onClick={(e) => {
                                          serieDelete(set.id);
                                        }}
                                      >
                                        <img
                                          src={Delete}
                                          alt=""
                                          className=" w-10"
                                        />
                                      </button>
                                    </div>
                                  ))}

                                  <div className=" flex flex-col text-center  gap-1  p-1">
                                    {activeExer && (
                                      <FormComponent
                                        type={"serie"}
                                        handleSubmit={addSerie}
                                        setSelectName={setSelectName}
                                        setCarga={setCarga}
                                        setRep={setRep}
                                        clas={
                                          "justify-center align-middle items-center  text-center"
                                        }
                                        setSerieID={setSerieID}
                                        text={"Adicionar Serie"}
                                        exer={exer}
                                      />
                                    )}
                                    <button
                                      className=" btn__sec"
                                      onClick={(e) => {
                                        setActiveExer(!activeExer);
                                      }}
                                    >
                                      {!activeExer ? (
                                        <span>Adicionar Serie</span>
                                      ) : (
                                        <span>Fechar</span>
                                      )}
                                    </button>
                                    <button
                                      className="  btn__sec"
                                      onClick={(e) => {
                                        handleDelete(exer.id);
                                      }}
                                    >
                                      <span className=" text-red-700">
                                        Deletar Exercicio
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                {active && (
                  <FormComponent
                    type={"nome"}
                    handleSubmit={handleSubmit}
                    setSelectName={setSelectName}
                    setCarga={setCarga}
                    setRep={setRep}
                    clas={"flex flex-col btn__sec rounded-md"}
                    text={"Criar Exercicio"}
                  />
                )}

                <button
                  onClick={() => setActive(!active)}
                  className=" btn__sec mt-2 w-full self-center "
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

        <Link to={"/treino"} className=" btn__sec   w-full">
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default TreinoDetails;

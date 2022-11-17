import React from "react";

const FormComponent = ({
  type,
  handleSubmit,
  setSelectName,
  setRep,
  setCarga,
  clas,
  setSerieID,
  exer,
}) => {
  return (
    <form onSubmit={handleSubmit} className={clas}>
      {(type && type === "nome" && (
        <>
          <label>
            <span className="span">Nome do Exercicio</span>
            <input
              type="text"
              name="name"
              className=" input"
              placeholder="Digite o nome do exercicio"
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
              onChange={(e) => setCarga(e.target.value)}
            />
          </label>

          <button type="submit" className="btn mt-1">
            Criar Exercicio
          </button>
        </>
      )) ||
        (type === "serie" && (
          <>
            <label className="label">
              <span className="span">Repetições</span>
              <input
                type="number"
                name="rep"
                className=" input__sec"
                placeholder="Digite as Repetições"
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
                onChange={(e) => setCarga(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="btn mt-1"
              onClick={(e) => setSerieID(exer.id)}
            >
              Adicionar Serie
            </button>
          </>
        ))}

    </form>
  );
};

export default FormComponent;

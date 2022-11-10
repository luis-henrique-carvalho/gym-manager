import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [deleteUrl, setDeleteUrl] = useState(null)

  //6 - loading
  const [loading, setLoading] = useState(false);

  //7 - tratando erros
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if(method === 'DELETE'){
      setConfig({
        method,
      })
      setDeleteUrl(data)
      setMethod(method)
    }
  };

  useEffect(() => {
    const fatchData = async () => {
      // 6- loadin
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();
      

        setData(json);
        console.log("cheguei aqui")
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados");
      }

      setLoading(false);
    };

    fatchData();
  }, [url, callFetch]);

  // 5 - refatoranto post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);

      } else if (method === 'DELETE') {

        setLoading(true)
        let fechOptions = [deleteUrl, config]
        const deleted = await fetch(...fechOptions)
        setLoading(false)
        setCallFetch(deleted)
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};

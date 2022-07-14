import React, { useState, useEffect } from "react";

//TO DO: USE THIS IN THE APP.

function useApi(url) {
  const API_KEY = process.env.REACT_APP_TOKEN_KEY;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/${API_KEY}`);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useApi;

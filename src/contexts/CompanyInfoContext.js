import { createContext, useEffect, useState } from "react";

export const CompanyInfoContext = createContext();

export function CompanyInfoContextProvider({ children }) {
  const API_KEY = process.env.REACT_APP_TOKEN_KEY;

  const [companyInfo, setCompanyInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [dest, setDest] = useState([]);
  const [destIsLoading, setDestIsLoading] = useState(true);
  const [destHasError, setDestHasError] = useState(false);
  const [espec, setEspec] = useState([]);
  const [especIsLoading, setEspecIsLoading] = useState(true);
  const [especHasError, setEspecHasError] = useState(false);

  const getCompanyInfo = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/company/${API_KEY}`
      );
      const data = await response.json();
      setCompanyInfo(data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const getDest = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/4/1`
      );
      const data = await response.json();
      setDest(data);
      setDestIsLoading(false);
    } catch (error) {
      setDestHasError(true);
      setDestIsLoading(false);
    }
  };

  const getEspec = async () => {
    try {
      const response = await fetch(
        `https://www.critecnow.com/promed/api/articlebycat/${API_KEY}/3/1`
      );
      const data = await response.json();
      setEspec(data);
      setEspecIsLoading(false);
    } catch (error) {
      setEspecHasError(true);
      setEspecIsLoading(false);
    }
  };


  useEffect(() => {
    getCompanyInfo();
    getDest();
    getEspec();
  }, [isLoading, destIsLoading, especIsLoading]);

  return (
    <CompanyInfoContext.Provider value={{ companyInfo, isLoading, hasError, dest, destHasError, destIsLoading, espec, especHasError, especIsLoading }}>
      {children}
    </CompanyInfoContext.Provider>
  );
}

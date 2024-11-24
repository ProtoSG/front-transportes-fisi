import { useEffect, useState } from "react";
import { loadFromLocalStorage } from "../services/localStorageActions";

const api = import.meta.env.VITE_BACKEND_URL;

interface Chofer {
  id_chofer: number;
  nombre: string;
  apellido_pat: string;
  apellido_mat: string;
  dni: string;
  sexo: string;
  estado: string;
}

interface DataBackProps {
  url: string;
  jsonAdapter: (json: any) => Chofer;
}

export const useChoferHired = ({ url, jsonAdapter }: DataBackProps) => {
  const [data, setData] = useState<Chofer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = loadFromLocalStorage("jwt_token", "");
      const response = await fetch(`${api}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const json = await response.json();
      const dataAdap = Array.isArray(json)
        ? json.map(jsonAdapter)
        : [jsonAdapter(json)];

      setData(dataAdap);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
};

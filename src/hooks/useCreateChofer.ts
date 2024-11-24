import { useState } from "react";
import { loadFromLocalStorage } from "../services/localStorageActions";

const api = import.meta.env.VITE_BACKEND_URL;

interface CreateChoferBody {
  apellido_mat: string;
  apellido_pat: string;
  dni: string;
  nombre: string;
  sexo: string;
}

interface UseCreateChoferResponse {
  createChofer: (body: CreateChoferBody) => Promise<void>;
  loading: boolean;
  error: Error | null;
  success: boolean;
}

export const useCreateChofer = (): UseCreateChoferResponse => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const createChofer = async (body: CreateChoferBody) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = loadFromLocalStorage("jwt_token", "");
      const response = await fetch(`${api}/chofer/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Error: ${response.status} - ${response.statusText}: ${errorText}`
        );
      }

      setSuccess(true);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return { createChofer, loading, error, success };
};

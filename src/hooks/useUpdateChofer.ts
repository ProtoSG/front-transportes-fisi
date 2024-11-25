import { useState } from "react";

export const usePatchChoferStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const patchChoferStatus = async (id_chofer: number) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/chofer/status", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_chofer }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Error desconocido");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Error al actualizar el estado del chofer");
    } finally {
      setLoading(false);
    }
  };

  return { patchChoferStatus, loading, error, success };
};

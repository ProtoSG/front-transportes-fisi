import { Login } from "../model/login.model";
const api = import.meta.env.VITE_BACKEND_URL

interface Props {
  body: Login,
  url?: string
}

export const login = async ({ body, url }: Props) => {
  try {
    const response = await fetch(`${api}/login/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json()
    console.log({ data })

    if (data.error) {
      return { success: false, message: data.error, jwt_token: null }
    }

    return { success: true, message: data.message, jwt_token: data.jwt_token }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error al ingresar" };
  }
};

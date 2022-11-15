import { api } from "../services/api";


export function setUserLocalStorage(user) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u");
  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(usuario) {
  try {
    const request = await api.post("/token", usuario);
    return request.data;
  } catch (error) {
    return error;
  }
}

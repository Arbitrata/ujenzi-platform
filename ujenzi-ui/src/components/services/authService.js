import http from "./httpServices";
import jwtDecode from "jwt-decode";

const apiEndPonit = "http://localhost:5005/api/v1/signin";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPonit, { email, password });
  localStorage.setItem("token", jwt);
}

export function setJwt(jwt) {
  http.defaults.headers.common["x-auth-token"] = jwt;
}

export async function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export async function logout() {
  localStorage.removeItem("token");
}

export  function getJwt() {
   return localStorage.getItem("token");
 }

export function getCurrentUser() {
  try {
     const jwt = localStorage.getItem("token");
  return jwtDecode(jwt);
  } catch (ex) { 
     return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt
};
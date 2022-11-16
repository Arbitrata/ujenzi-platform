import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5005/api/v1/";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (!expectedError) {
    toast.error("unexpected error occuered");
  }

  return Promise.reject(error);
});
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};

import axios from "axios";

const apiEndPonit = "http://localhost:5005/api/v1/signup";

export function register(user) {
  return axios.post(apiEndPonit, {
    email: user.email,
    fullname: user.fullname,
    phonenumber: user.phonenumber,
    password: user.password,
  });
}


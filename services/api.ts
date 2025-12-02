import axios from "axios";

const api = axios.create({
  baseURL: "http://10.109.3.234:8080/api", 
});

export default api;

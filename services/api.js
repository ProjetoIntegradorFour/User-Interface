import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // Android emulador usa 10.0.2.2 em vez de localhost
  // se testar no celular real -> coloca o IP da sua máquina na rede, ex: http://192.168.1.5:8080/api
});

export default api;

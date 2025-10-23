import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // depois muda pro IP da tua API real
});

export default api;

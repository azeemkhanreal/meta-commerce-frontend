import axios from "axios";
export const BASE_URL = "http://localhost:5000/api";

export const TOKEN = localStorage.getItem("token");
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});

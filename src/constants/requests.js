import axios from "axios";
export const BASE_URL = "https://meta-commerce-backend.herokuapp.com/api";

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

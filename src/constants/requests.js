import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";

export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTMzNjE3NjYwMjk4YzI5Y2YzOTZiNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDk2MjA1MTIsImV4cCI6MTY0OTg3OTcxMn0.4P2xcUhjdQj7zhkWFYfaEC_nRveLdmldDa9N__En8iE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});

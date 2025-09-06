import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URL = import.meta.env.VITE_APP_BASE_URL + "/api";
const API_URL = "https://taskcloud1fullstack.onrender.com/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",   // 👈 Yaha hona chahiye
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
import axios from "axios";
import { error } from "console";

//API client instance
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// request interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => error
);

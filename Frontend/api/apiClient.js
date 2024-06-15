import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific status codes here
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized
      window.location;
    }
    return Promise.reject(error);
  }
);

export default apiClient;

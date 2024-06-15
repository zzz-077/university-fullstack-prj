import axios from "axios";
import apiClient from "../../api/apiClient";

export default async function login(username, password) {
  try {
    console.log(import.meta.env.VITE_API_URL);
    const response = await apiClient.post("/signin/", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

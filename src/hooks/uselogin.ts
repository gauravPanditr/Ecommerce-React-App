// src/hooks/useAuth.ts
import { useState } from "react";
import axios from "axios";
import { FetchState } from "../types/fetchState"; 
import { Credentials } from "../types/logincredentials";

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);
  const [fetchState, setFetchState] = useState<FetchState<string>>({
    data: null,
    loading: false,
    error: null,
  });

  const loginUser = async (credentials: Credentials) => {
    setFetchState({ data: null, loading: true, error: null });

    try {
      const response = await axios.post("/login", credentials); // Adjust the endpoint as needed
      setUser(response.data.username); // Adjust according to your response structure
      localStorage.setItem("userToken", response.data.token); // Store token if needed
      setFetchState({ data: response.data.username, loading: false, error: null });
    } catch (error) {
      setFetchState({ data: null, loading: false, error: err.response?.data?.message || "Login failed" });
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("userToken");
  };

  return { user, fetchState, loginUser, logoutUser };
};

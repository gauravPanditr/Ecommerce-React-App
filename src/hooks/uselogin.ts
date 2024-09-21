import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // Import useAuth from AuthProvider
import { Credentials } from '../types/logincredentials';

export const useAuthLogin = () => {
  const { login, logout } = useAuth(); // Use login and logout from context
  const [fetchState, setFetchState] = useState<{ data: string | null; loading: boolean; error: string | null }>({
    data: null,
    loading: false,
    error: null,
  });
  const navigate = useNavigate();

  const loginUser = async (credentials: Credentials) => {
    setFetchState({ data: null, loading: true, error: null });
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', credentials);
      localStorage.setItem('userToken', response.data.token);
      login(); // Update AuthContext with the login status
      navigate('/home'); // Redirect to home page after successful login
    } catch (error: any) {
      setFetchState({
        data: null,
        loading: false,
        error: error.response?.data?.message || 'Login failed. Please try again.',
      });
    }
  };

  const logoutUser = () => {
    logout(); // Update AuthContext when logging out
    navigate('/login');
  };

  return { loginUser, logoutUser, fetchState };
};

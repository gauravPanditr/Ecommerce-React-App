import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; 
import { Credentials } from '../types/logincredentials';

export const useAuthLogin = () => {
  const { login, logout } = useAuth(); 
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
      login(); 
      navigate('/home'); 
    } catch (error) {
      setFetchState({
       
        
      });
    }
  };

  const logoutUser = () => {
    logout(); 
    navigate('/login');
  };

  return { loginUser, logoutUser, fetchState };
};

'use client';

import { useState, useEffect } from 'react';
import { apiClient } from '../services/api/client';

interface User {
  id: string;
  email: string;
  name: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('auth-token');

        if (!token) {
          setUser(null);
          return;
        }

        const response = await apiClient.get('/auth/me');
        setUser(response.data.user);
      } catch (err) {
        setUser(null);
        localStorage.removeItem('auth-token');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post('/auth/login', credentials);

      const { token, user } = response.data;
      localStorage.setItem('auth-token', token);
      setUser(user);

      return user;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post('/auth/register', credentials);

      const { token, user } = response.data;
      localStorage.setItem('auth-token', token);
      setUser(user);

      return user;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to register');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth-token');
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};

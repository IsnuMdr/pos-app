import axios from 'axios';

// Create a base instance of axios with common configuration
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth
apiClient.interceptors.request.use(
  (config) => {
    // Get the token from local storage or any other source
    const token = localStorage.getItem('auth-token');

    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle token refresh if needed
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Implement token refresh logic here
        // const refreshToken = localStorage.getItem('refresh-token');
        // const res = await refreshAccessToken(refreshToken);
        // localStorage.setItem('auth-token', res.data.accessToken);

        // Retry the original request with the new token
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure (logout, etc.)
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

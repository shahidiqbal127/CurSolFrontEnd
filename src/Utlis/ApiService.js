// src/services/api.js
import axios from "axios";
import { Global_Ip } from "./Urls";

// Create an instance of axios with default configuration
const api = axios.create({
  baseURL: Global_Ip, // Replace with your API base URL
  timeout: 10000, // Request timeout
});

// Request interceptor to add authorization headers
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage or other storage
    const token = localStorage.getItem("token");
    if (token) {
      // Set the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses globally
api.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Redirect to login if unauthorized
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Generalized API request function
const request = async (method, url, data = null, config = {}) => {
  try {
    const response = await api({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

// Exporting specific request methods for convenience
export const get = (url, config) => request("get", url, null, config);
export const post = (url, data, config) => request("post", url, data, config);
export const put = (url, data, config) => request("put", url, data, config);
export const del = (url, config) => request("delete", url, null, config);

export default api;

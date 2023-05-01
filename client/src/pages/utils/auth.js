import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

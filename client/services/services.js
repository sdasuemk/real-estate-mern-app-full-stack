import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const createHeaders = () => ({
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });

  const apiRequest = async ({ endpoint, method, authToken, data }) => {
    try {
      const headers = createHeaders(authToken);
  
      const response = await axiosInstance({
        method,
        url: endpoint,
        data,
        ...headers,
      });
  
      if (response.status >= 400) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      return response;
    } catch (error) {
      console.error("Error making API request:", error);
      throw error;
    }
  };

  export const postSignupForm = async (data) =>
  apiRequest({
    endpoint: "auth/signup",
    method: "POST",
    // authToken,
    data,
  });
  export const doSignOut = async (data) =>
  apiRequest({
    endpoint: "auth/signout",
    method: "GET",
    // authToken,
    data,
  });
  export const postSignInForm = async (data) =>
  apiRequest({
    endpoint: "auth/signin",
    method: "POST",
    // authToken,
    data,
  });
  export const postSignInByGoogle = async (data) =>
  apiRequest({
    endpoint: "auth/google",
    method: "POST",
    // authToken,
    data,
  });
  export const postUpdateUserProfile = async (id, data) =>
  apiRequest({
    endpoint: `user/update/${id}`,
    method: "POST",
    // authToken,
    data,
  });
  export const deleteUserProfile = async (id, data) =>
  apiRequest({
    endpoint: `user/delete/${id}`,
    method: "DELETE",
    // authToken,
    data,
  });

  
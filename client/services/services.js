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
  export const showListings = async (id) =>
  apiRequest({
    endpoint: `user/listings/${id}`,
    method: "GET",
    // authToken,
    // data,
  });
  export const getUser = async (id) =>
  apiRequest({
    endpoint: `user/${id}`,
    method: "GET",
    // authToken,
    // data,
  });
  export const createListing = async (data) =>
  apiRequest({
    endpoint: `listing/create-listing`,
    method: "POST",
    // authToken,
    data,
  });
  export const deleteListing = async (id) =>
  apiRequest({
    endpoint: `listing/delete-listing/${id}`,
    method: "DELETE",
    // authToken,
  });
  export const getListing = async (id) =>
  apiRequest({
    endpoint: `listing/get-a-listing/${id}`,
    method: "GET",
    // authToken,
  });
  export const updateListing = async (id, data) =>
  apiRequest({
    endpoint: `listing/update-listing/${id}`,
    method: "POST",
    data,
    // authToken,
  });

  
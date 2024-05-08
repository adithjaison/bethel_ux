import axios from "axios";

import { AppApiUrl } from "../constant/envConstant";

export const Api = axios.create({
  baseURL: AppApiUrl,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: "Bearer " + AppApiAuthToken,
  },
});

export const fetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { ProfileType } from "../../utils/types";

export const getProfile = createAsyncThunk<ProfileType, void>(
  "profile/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/users/profile");

      if (!data) {
        return rejectWithValue("Failed to fetch profile");
      }

      return data;
    } catch (error) {
      console.error("Error fetching folders:", error);
      return rejectWithValue("Failed to fetch folders");
    }
  }
);

export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<string | null> => {
  try {
    const { data }: { data: { token: string } } = await api.post(
      "/users/login",
      credentials 
    );

    if (data.token) {
      localStorage.setItem("token", data.token); // Ensure token is saved
      return data.token;
    }
    return null;
  } catch (error) {
    console.error("Login failed", error);
    return null;
  }
};

export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) => {
  try {
    const { data } = await api.post("/users", userData);

    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

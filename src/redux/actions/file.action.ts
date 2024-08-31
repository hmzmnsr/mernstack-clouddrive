import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../services/api";

// Create a new attachment
export const createAttachment = async (attachmentData: {
  name: string;
  type: string;
  size: number;
}) => {
  try {
    const { data } = await api.post("/attachments", attachmentData);
    return data;
  } catch (error) {
    console.error("Error creating attachment:", error);
    return null;
  }
};

// Create a new file
export const createFile = async (fileData: {
  attachmentRef: string;
  folderRef: string;
  name: string;
}) => {
  try {
    const { data } = await api.post("/files", fileData);
    return data;
  } catch (error) {
    console.error("Error creating file", error);
    return null;
  }
};

export const uploadFile = async (url: string, fileData: File) => {
  await axios.put(url, fileData);
};

// Delete a file by its ID
export const deleteFile = async (fileId: string) => {
  try {
    const { data } = await api.delete(`/files/${fileId}`);
    return data;
  } catch (error) {
    console.error("Error deleting file:", error);
    return null;
  }
};

export const getFiles = createAsyncThunk(
  "files/getFiles",
  async (folderRef: string | undefined, { rejectWithValue }) => {
    try {
      const url = `/files?folderRef=${folderRef ?? ""}`;
      const { data } = await api.get(url);
      return data;
    } catch (error) {
      console.error("Error fetching files:", error);
      return rejectWithValue("Failed to fetch files");
    }
  }
);

export const getRecentFiles = createAsyncThunk(
  "files/getRecentFiles",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/files/recent");
      return data;
    } catch (error) {
      console.error("Error fetching files:", error);
      return rejectWithValue("Failed to fetch files");
    }
  }
);

// Fetch favorite files
export const getFavoriteFiles = createAsyncThunk(
  "files/getFavoriteFiles",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/files/favorite");
      return data;
    } catch (error) {
      console.error("Error fetching favorite files:", error);
      return rejectWithValue("Failed to fetch favorite files");
    }
  }
);

// Set a file as favorite or unfavorite
export const setFavorite = createAsyncThunk(
  "files/setFavorite",
  async (params: { id: string; isFavorite: boolean }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(`/files/favorite/${params.id}`, {
        isFavorite: params.isFavorite,
      });
      return data;
    } catch (error) {
      console.error("Error setting favorite:", error);
      return rejectWithValue("Failed to set favorite status");
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/files");
      return data;
    } catch (error) {
      console.error("Error fetching folders:", error);
      return rejectWithValue("Failed to fetch folders");
    }
  }
);

export const setFavorite = async (id: string, isFavorite: boolean) => {
  try {
    const { data } = await api.patch(`/files/favorite/${id}`, { isFavorite });
    return data;
  } catch (error) {
    console.error("Error setting favorite:", error);
    return [];
  }
};

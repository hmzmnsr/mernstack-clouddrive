import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const createFile = async (fileData: {
  attachmentRef: string;
  folderPath: string;
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
      return data.map((file: any) => {
        const attachmentRef = file.attachmentRef || {}; // Default to an empty object if null
        return {
          attachmentName: attachmentRef.attachmentName || "Unknown File",
          attachmentType: attachmentRef.attachmentType || "unknown",
          size: attachmentRef.size || 0,
          dateTime: attachmentRef.dateTime || new Date().toISOString(),
          folderName: file.folderRef?.name || "Unknown Folder",
          isFavorite: file.isFavorite || false,
        };
      });
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

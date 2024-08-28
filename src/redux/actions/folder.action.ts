import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { FolderType } from "../../utils/types";

export const createFolder = async (folderData: {
  path: string;
  name: string;
}) => {
  try {
    const { data } = await api.post("/folders", folderData);

    return data;
  } catch (error) {
    console.error("Error creating folder:", error);
    return null;
  }
};

export const deleteFolder = async (folderId: string) => {
  try {
    const { data } = await api.delete(`/folders/${folderId}`);
    return data;
  } catch (error) {
    console.error("Error deleting folder:", error);
    return null;
  }
};

export const getFolders = createAsyncThunk<FolderType[], void>(
  "folders/getFolders",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/folders");
      return data ?? [];
    } catch (error) {
      console.error("Error fetching folders:", error);
      return rejectWithValue("Failed to fetch folders");
    }
  }
);

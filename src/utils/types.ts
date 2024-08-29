export type ProfileType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
};

export type FolderType = {
  _id: string;
  name: string;
  path: string;
};

export type FileType = {
  _id: string;
  name: string;
  path: string;
};

export type ContextMenuType = {
  visible: boolean;
  x: number;
  y: number;
  folderId: string | null;
};

// src/types/Attachment.ts
export interface Attachment {
  attachmentName: string;
  attachmentType: string;
  size: number;
  dateTime: string;
  isFavorite: boolean;
  folder: string; // Add this if it’s part of your data
}

export interface FileData {
  _id: string;
  name: string;
  attachmentRef: any;
  userRef: any;
  folderRef: any;
  createdAt: string;
  isFavorite: boolean;
}

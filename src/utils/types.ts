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

export type ContextMenuType = {
  visible: boolean;
  x: number;
  y: number;
  folderId: string | null;
};

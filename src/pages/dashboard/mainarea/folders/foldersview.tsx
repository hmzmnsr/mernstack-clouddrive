import React, { useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getFolders } from "../../../../redux/actions/folder.action";
import {
  setFolderLoading,
  setFolders,
} from "../../../../redux/reducers/folder.reducer";
import { deleteFolder } from "../../../../services/api";
import { FolderType } from "../../../../utils/types";

const FolderView: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    folderId: string | null;
  }>({
    visible: false,
    x: 0,
    y: 0,
    folderId: null,
  });

  const folderState = useSelector((state: any) => state.Folder);

  const { list: folders, isLoading: loading } = folderState;

  useEffect(() => {
    const fetchFolders = async () => {
      dispatch(setFolderLoading(true));
      const list = await getFolders();
      dispatch(setFolders({ list, count: list.length }));
      dispatch(setFolderLoading(false));
    };

    fetchFolders();
  }, [dispatch]);

  const handleRightClick = (event: React.MouseEvent, folderId: string) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.pageX,
      y: event.pageY,
      folderId,
    });
  };

  const handleDelete = async () => {
    if (contextMenu.folderId) {
      try {
        await deleteFolder(contextMenu.folderId);
        setFolders(
          folders.filter(
            (folder: FolderType) => folder._id !== contextMenu.folderId
          )
        );
      } catch (err: any) {
        console.error("Error deleting folder:", err);
        setError("Failed to delete folder");
      }
    }
    setContextMenu({ visible: false, x: 0, y: 0, folderId: null });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ visible: false, x: 0, y: 0, folderId: null });
  };

  if (loading) {
    return <p>Loading folders...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4" onClick={handleCloseContextMenu}>
      {folders.length === 0 ? (
        <p>No folders found.</p>
      ) : (
        <div
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          style={{ maxWidth: "100%" }}
        >
          <div className="flex gap-4">
            {folders.map((folder: FolderType) => (
              <div
                key={folder._id}
                className="flex-none w-48 flex flex-col items-center justify-center cursor-pointer p-2"
                onContextMenu={(e) => handleRightClick(e, folder._id)}
              >
                <div className="bg-white h-full w-full py-10 mb-2 flex justify-center items-center flex-col shadow-lg rounded-xl">
                  <div className="text-customBlueTwo rounded-m">
                    <FaFolder className="text-7xl" />
                  </div>
                  <p className="text-center font-semibold">{folder.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {contextMenu.visible && (
        <ul
          className="fixed bg-gray-200 shadow-lg rounded-md"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <li
            className="cursor-pointer py-3 px-10 hover:bg-gray-200"
            onClick={handleDelete}
          >
            Delete
          </li>
        </ul>
      )}
    </div>
  );
};

export default FolderView;

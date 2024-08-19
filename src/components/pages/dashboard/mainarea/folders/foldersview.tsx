import React, { useEffect, useState } from 'react';
import { getFolders, deleteFolder } from '../../../../../services/api'; 
import { FaFolder } from 'react-icons/fa';

interface Folder {
  _id: string;
  name: string;
}

const FolderView: React.FC = () => {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [contextMenu, setContextMenu] = useState<{ visible: boolean; x: number; y: number; folderId: string | null }>({
    visible: false,
    x: 0,
    y: 0,
    folderId: null,
  });

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const response = await getFolders();
        setFolders(response.data);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching folders:', err);
        setError('Failed to load folders');
        setLoading(false);
      }
    };

    fetchFolders();
  }, []);

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
        setFolders(folders.filter((folder) => folder._id !== contextMenu.folderId));
      } catch (err: any) {
        console.error('Error deleting folder:', err);
        setError('Failed to delete folder');
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
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style={{ maxWidth: '100%' }}>
          <div className="flex gap-4">
            {folders.map((folder) => (
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
          <li className="cursor-pointer py-3 px-10 hover:bg-gray-200" onClick={handleDelete}>
            Delete
          </li>
        </ul>
      )}
    </div>
  );
};

export default FolderView;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFolder, getFolders } from "../../redux/actions/folder.action";
import { AppDispatch } from "../../redux/reducers/store";

interface CreateFolderPopupProps {
  onClose: () => void;
}

const CreateFolderPopup: React.FC<CreateFolderPopupProps> = ({ onClose }) => {
  const [folderName, setFolderName] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  };

  const updateFolderList = async () => {
    dispatch(getFolders());
  };

  const handleCreateFolder = async () => {
    if (!folderName.trim()) {
      setMessage("Please enter a folder name.");
      return;
    }

    const folderPath = `/${folderName.trim()}`; // Trim the folder name
    try {
      const response = await createFolder({
        path: folderPath,
        name: folderName.trim(),
      });

      if (response.error) {
        // Check if the error is related to folder existence
        if (response.error === "Folder already exists") {
          setMessage("Folder already exists.");
        } else {
          setMessage(response.error);
        }
      } else {
        setMessage("Folder created successfully.");
        setTimeout(() => {
          updateFolderList();
          setFolderName("");
          onClose();
        }, 1000);
      }
    } catch (error) {
      setMessage("Error creating folder. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white h-2/6 w-2/4 py-10 px-20 rounded-lg shadow-lg">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-2xl mb-4">Create Folder</h2>
          <input
            type="text"
            className="border border-black p-2 w-full mb-4 mt-1"
            placeholder="Folder Name"
            value={folderName}
            onChange={handleInputChange}
          />
          <div className="pt-1">
            <button
              className="bg-gray-500 text-white py-2 px-8 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-customBlueTwo text-white py-2 px-8 rounded"
              onClick={handleCreateFolder}
            >
              Create
            </button>
          </div>
          {message && (
            <p
              className={`mt-3 text-base ${
                message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateFolderPopup;

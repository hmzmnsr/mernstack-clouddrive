import React, { useState } from "react";
import { createFolder } from "../../services/api";

interface CreateFolderPopupProps {
  onClose: () => void;
}

const CreateFolderPopup: React.FC<CreateFolderPopupProps> = ({ onClose }) => {
  const [folderName, setFolderName] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  };

  const handleCreateFolder = async () => {
    try {
      const folderPath = `/${folderName}`;
      await createFolder({
        path: folderPath,
        name: folderName,
      });
      setMessage("Folder created successfully");
      setFolderName(""); // Clear the input field after successful creation

      // Delay before closing the popup
      setTimeout(() => {
        onClose();
      }, 1000); // Delay in milliseconds (1 second in this case)
    } catch (error: any) {
      console.error("Error creating folder:", error);

      if (error.response) {
        if (error.response.status === 409) {
          // Assuming 409 is the status code for "Conflict" (folder already exists)
          setMessage("Folder already exists");
        } else {
          setMessage(`Error: ${error.response.data}`);
        }
      } else {
        setMessage("Unexpected error occurred");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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

import React, { useState } from "react";

interface CreateFilePopupProps {
  onClose: () => void;
  onCreate: (fileName: string, ownership: string) => void;
}

const CreateFilePopup: React.FC<CreateFilePopupProps> = ({ onClose, onCreate }) => {
  const [fileName, setFileName] = useState<string>("");
  const [ownership, setOwnership] = useState<string>("Public");

  const handleCreate = () => {
    onCreate(fileName, ownership);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-2/6 w-2/4 py-10 px-20 rounded-lg shadow-lgg">
        <h2 className="text-xl font-bold mb-4">Create New File</h2>
        <div className="mb-4">
          <label className="block text-gray-700">File Name</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ownership</label>
          <select
            value={ownership}
            onChange={(e) => setOwnership(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 text-white bg-blue-600 rounded-md"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFilePopup;

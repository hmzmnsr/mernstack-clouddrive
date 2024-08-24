import React, { useState } from "react";

interface CreateFilePopupProps {
  onClose: () => void;
  onCreate: (fileName: string, file: File | null) => void;
}

const CreateFilePopup: React.FC<CreateFilePopupProps> = ({ onClose, onCreate }) => {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleCreate = () => {
    onCreate(fileName, file);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white h-7/12 w-2/4 py-10 px-20 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create New File</h2>
        <div className="mb-4">
          <label className="block text-gray-700">File Name</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-5 mt-2">
          <label className="block text-gray-700">Upload Attachment</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full py-1 border-none mt-1"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 py-2 px-8 text-gray-700 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="bg-customBlueTwo text-white py-2 px-8 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFilePopup;

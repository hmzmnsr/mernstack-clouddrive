import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SidebarButton from "../../components/buttons/sidebar.button";
import FileItem from "../../components/lists/file.item";
import Spinner from "../../components/loaders/spinner.loader";
import CreateFilePopup from "../../components/popups/create-file-popup";
import {
  createAttachment,
  createFile,
  getFiles,
  uploadFile,
} from "../../redux/actions/file.action";
import { getAllFolders } from "../../redux/actions/folder.action";
import { AppDispatch } from "../../redux/reducers/store";
import { FileData } from "../../utils/types";

const FilesPage = () => {
  const { id: folderRef } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [folder, setFolder] = useState<string>("");

  const [files, setFiles] = useState<FileData[]>([]);

  const fileState = useSelector((state: any) => state.File);
  const folderState = useSelector((state: any) => state.Folder);

  const { allFolders: folders } = folderState;
  const { list, loading } = fileState;

  useEffect(() => {
    dispatch(getFiles(folderRef));
    dispatch(getAllFolders());
  }, [dispatch, folderRef]);

  useEffect(() => {
    if (folderRef) {
      const folderName = folders.find(
        (folder: any) => folder._id === folderRef
      )?.name;
      setFolder(`${folderName ?? "All"} Files`);
    } else {
      setFolder("All Files");
    }
  }, [folderRef, folders]);

  useEffect(() => {
    setFiles(list ?? []);
  }, [dispatch, list]);

  const handleCreateFile = async (
    fileName: string,
    file: File | null,
    selectedFolder: string
  ) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const attachmentData = await createAttachment({
      name: file.name,
      type: file.type,
      size: file.size,
    });

    if (attachmentData?._id) {
      await uploadFile(attachmentData.url, file);

      await createFile({
        attachmentRef: attachmentData._id,
        folderRef: selectedFolder,
        name: fileName,
      });

      dispatch(getFiles(folderRef));
    }
  };

  return (
    <div className="px-7 w-full z-10">
      <div className="grid grid-cols-12 pt-4">
        <div className="text-lg font-bold tracking-wide font-sans leading-loose col-span-10">
          {folder}
        </div>
        <SidebarButton
          className="px-7 py-3 font-light text-base col-span-2"
          onClick={() => setShowPopup(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="pr-2" />
          Create File
        </SidebarButton>
      </div>
      {loading ? (
        <Spinner />
      ) : files.length === 0 ? (
        <div>No files found.</div>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {files.map((file, index) => {
            return <FileItem key={index} file={file} folderRef={folderRef} />;
          })}
        </div>
      )}

      {showPopup && (
        <CreateFilePopup
          onClose={() => setShowPopup(false)}
          onCreate={handleCreateFile}
        />
      )}
    </div>
  );
};

export default FilesPage;

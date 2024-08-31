import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileItem from "../../components/lists/file.item";
import Spinner from "../../components/loaders/spinner.loader";
import { getFavoriteFiles } from "../../redux/actions/file.action";
import { AppDispatch } from "../../redux/reducers/store";
import { FileData } from "../../utils/types";

const FavoriteFilesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [files, setFiles] = useState<FileData[]>([]);

  const fileState = useSelector((state: any) => state.File);

  const { favoriteList: list, loading } = fileState;

  useEffect(() => {
    dispatch(getFavoriteFiles());
  }, [dispatch]);

  useEffect(() => {
    setFiles(list ?? []);
  }, [dispatch, list]);

  return (
    <div className="px-7 w-full z-10">
      <div className="grid grid-cols-12 pt-4">
        <div className="text-lg font-bold tracking-wide font-sans leading-loose col-span-10">
          Favorites
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : files.length === 0 ? (
        <div>No favorites found.</div>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {files.map((file, index) => {
            return <FileItem key={index} file={file} />;
          })}
        </div>
      )}
    </div>
  );
};

export default FavoriteFilesPage;

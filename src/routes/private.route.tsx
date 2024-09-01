import { Navigate, Route, Routes } from "react-router-dom";
import FlexContainer from "../components/containers/flex.container";
import SideBar from "../components/sidebar/sidebar";
import TopNavigation from "../components/top-nav/top.navigation";
import DashboardPage from "../pages/home/home.page";
import FavoriteFilesPage from "../pages/fav-files/favorites.page";
import FilesPage from "../pages/files/files.page";
import FoldersPage from "../pages/folders/folders.page";

const PrivateRoutes = () => {
  return (
    <FlexContainer className="w-full flex-row">
      <FlexContainer className="w-2/12">
        <SideBar />
      </FlexContainer>
      <FlexContainer className="w-10/12 flex flex-col">
        <TopNavigation />
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/files" element={<FilesPage />} />
          <Route path="/folders/:id" element={<FilesPage />} />
          <Route path="/folders" element={<FoldersPage />} />
          <Route path="/favorites" element={<FavoriteFilesPage />} />
          <Route path="/settings" element={<></>} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </FlexContainer>
    </FlexContainer>
  );
};

export default PrivateRoutes;

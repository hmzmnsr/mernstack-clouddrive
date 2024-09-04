import { Navigate, Route, Routes } from "react-router-dom";
import FlexContainer from "../components/containers/flex.container";
import SideBar from "../components/sidebar/sidebar";
import TopNavigation from "../components/top-nav/top.navigation";
import DashboardPage from "../pages/home/home.page";
import FavoriteFilesPage from "../pages/fav-files/favorites.page";
import FilesPage from "../pages/files/files.page";
import FoldersPage from "../pages/folders/folders.page";
import SettingsPage from "../pages/settings/settings.page";

const PrivateRoutes = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar remains fixed */}
      <div className="w-2/12 h-full">
        <SideBar />
      </div>
      
      {/* Main content area with independent scrolling */}
      <div className="w-10/12 flex flex-col overflow-y-auto">
        <TopNavigation />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/files" element={<FilesPage />} />
            <Route path="/folders/:id" element={<FilesPage />} />
            <Route path="/folders" element={<FoldersPage />} />
            <Route path="/favorites" element={<FavoriteFilesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoutes;

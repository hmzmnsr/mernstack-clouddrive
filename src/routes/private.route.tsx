import { Navigate, Route, Routes } from "react-router-dom";
import FlexContainer from "../components/containers/flex.container";
import SideBar from "../components/sidebar/sidebar";
import TopNavigation from "../components/top-nav/top.navigation";
import DashboardPage from "../pages/dashboard/dashboard.page";
import FavFiles from "../pages/favorites/fav.files";
import FilesPage from "../pages/files/all.files";
import AllFolders from "../pages/folders/all.folders";

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
          <Route path="/folders" element={<AllFolders />} />
          <Route path="/favorites" element={<FavFiles />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </FlexContainer>
    </FlexContainer>
  );
};

export default PrivateRoutes;

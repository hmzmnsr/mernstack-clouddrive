import React, { Fragment } from "react";
import RecentFiles from "../../components/recents/files.recent";
import RecentFolders from "../../components/recents/folders.recent";

const DashboardPage: React.FC = () => {
  return (
    <Fragment>
      <RecentFolders />
      <RecentFiles />
    </Fragment>
  );
};

export default DashboardPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getProfile } from "./redux/actions/user.action";
import { ProfileState } from "./redux/reducers/profile.reducer";
import { AppDispatch } from "./redux/reducers/store";
import PrivateRoutes from "./routes/private.route";
import PublicRoutes from "./routes/public.route";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const Profile: ProfileState = useSelector((state: any) => state.Profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  if (Profile.loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {Profile.isAuthenticated ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/*" element={<PublicRoutes />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

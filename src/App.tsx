import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { getUserProfile } from "./redux/actions/user.action";
import {
  ProfileState,
  logOut,
  setProfile,
  setProfileLoading,
} from "./redux/reducers/profile.reducer";
import PrivateRoutes from "./routes/private.route";
import PublicRoutes from "./routes/public.route";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const Profile: ProfileState = useSelector((state: any) => state.Profile);

  useEffect(() => {
    const fetchProfile = async () => {
      dispatch(setProfileLoading(true));
      const data = await getUserProfile();

      if (data) {
        dispatch(setProfile(data));
      } else {
        dispatch(logOut());
      }

      dispatch(setProfileLoading(false));
    };

    if (localStorage.getItem("token")) {
      fetchProfile();
    }
  }, [dispatch]);

  if (Profile.loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      {Profile.isAuthenticated ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </BrowserRouter>
  );
};

export default App;

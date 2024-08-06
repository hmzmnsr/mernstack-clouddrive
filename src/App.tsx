import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
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

  const Profile: ProfileState = useSelector((state: any) => state.Profile);

  return (
    <BrowserRouter>
      {!Profile.isAuthenticated && <PublicRoutes />}
      {Profile.isAuthenticated && <PrivateRoutes />}
      {Profile.loading && <div>Loading...</div>}
    </BrowserRouter>
  );
};

export default App;

import api from "../../services/api";
import { ProfileType } from "../../utils/types";

export const getUserProfile = async (): Promise<ProfileType | null> => {
  try {
    const { data }: { data: ProfileType } = await api.get("/users/profile");
    return data;
  } catch (error) {
    console.error("Error fetching profile", error);
    return null;
  }
};

export const loginUser = async (credentials: {
  email: string;
  password: string;
}): Promise<string | null> => {
  try {
    const { data }: { data: { token: string } } = await api.post(
      "/users/login",
      credentials
    );

    if (data.token) {
      localStorage.setItem("token", data.token); // Ensure token is saved
      return data.token;
    }
    return null;
  } catch (error) {
    console.error("Login failed", error);
    return null;
  }
};

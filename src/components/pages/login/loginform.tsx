import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserProfile, loginUser } from "../../../redux/actions/user.action";
import { setProfile } from "../../../redux/reducers/profile.reducer";
import LoginButton from "./button";
import InputField from "./inputfields";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await loginUser({ email, password });

      if (token) {
        if (rememberMe) {
          localStorage.setItem("token", token);
        }

        const profileData = await getUserProfile();
        if (profileData) {
          dispatch(setProfile(profileData));
          navigate("/dashboard");
        } else {
          setError("Failed to load user profile");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='flex flex-col items-center'>
        <InputField type="email" name="email" id="email" label="Email address" required onChange={(e) => setEmail(e.target.value)} />
        <InputField type="password" name="password" id="password" label="Password" required onChange={(e) => setPassword(e.target.value)} />
        <div className="flex items-center w-full justify-start ml-2 mb-4">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe" className="text-sm text-customBlue">
            Remember me
          </label>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <LoginButton text="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;

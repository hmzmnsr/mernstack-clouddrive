import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile, loginUser } from "../../redux/actions/user.action";
import { setProfile } from "../../redux/reducers/profile.reducer";
import SubmitButton from "../buttons/submit.button";
import FlexContainer from "../containers/flex.container";
import CheckBox from "../inputs/checkbox.input";
import InputField from "../inputs/field.input";

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
    <form onSubmit={handleLogin} className="w-5/6 flex flex-col items-center">
      <InputField
        type="email"
        name="email"
        id="email"
        label="Email address"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <InputField
        type="password"
        name="password"
        id="password"
        label="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <FlexContainer className="items-center justify-start ml-2 mb-4">
        <CheckBox
          name="rememberMe"
          id="rememberMe"
          label="Remember me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </FlexContainer>
      {error && <p className="text-red-500">{error}</p>}
      <SubmitButton className="bg-customBlue hover:bg-red-600 mt-3">
        Submit
      </SubmitButton>
    </form>
  );
};

export default LoginForm;

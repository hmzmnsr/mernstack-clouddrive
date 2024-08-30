import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile, loginUser } from "../../redux/actions/user.action";
import { AppDispatch } from "../../redux/reducers/store";
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
  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = await loginUser({ email, password });

    if (token) {
      dispatch(getProfile());
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-5/12 flex flex-col items-start justify-center"
    >
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
      <FlexContainer className="items-start justify-start mt-1 ml-1 mb-4">
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
        Sign In
      </SubmitButton>
    </form>
  );
};

export default LoginForm;

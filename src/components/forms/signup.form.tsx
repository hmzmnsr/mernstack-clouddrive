import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/actions/user.action";
import SubmitButton from "../buttons/submit.button";
import InputField from "../inputs/field.input";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeat_password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.repeat_password) {
      setError("Passwords do not match");
      return;
    }
    const data = await createUser({
      name: `${formData.first_name} ${formData.last_name}`,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
    });

    if (data) {
      setError("");
      setSuccess("User created successfully");
      setFormData({
        email: "",
        password: "",
        repeat_password: "",
        first_name: "",
        last_name: "",
        phone: "",
      });
      navigate("/login");
    } else {
      setError("Something went wrong in user creation");
    }
  };

  return (
    <form
      className="w-5/12 flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div style={{ width: "100%" }}>
        <InputField
          type="email"
          name="email"
          id="floating_email"
          label="Email address"
          required
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div className="relative" style={{ width: "100%" }}>
        <InputField
          type={showPassword ? "text" : "password"}
          name="password"
          id="floating_password"
          label="Password"
          required
          onChange={handleChange}
          value={formData.password}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-1 top-4 flex items-center px-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <div className="relative mt-4" style={{ width: "100%" }}>
        <InputField
          type={showConfirmPassword ? "text" : "password"}
          name="repeat_password"
          id="floating_repeat_password"
          label="Confirm password"
          required
          onChange={handleChange}
          value={formData.repeat_password}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-1 top-4 flex items-center px-3"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <div
        className="grid md:grid-cols-2 md:gap-6 mt-4"
        style={{ width: "100%" }}
      >
        <div style={{ width: "100%" }}>
          <InputField
            type="text"
            name="first_name"
            id="floating_first_name"
            label="First name"
            required
            onChange={handleChange}
            value={formData.first_name}
          />
        </div>
        <div style={{ width: "100%" }}>
          <InputField
            type="text"
            name="last_name"
            id="floating_last_name"
            label="Last name"
            required
            onChange={handleChange}
            value={formData.last_name}
          />
        </div>
      </div>

      <div style={{ width: "100%" }} className="mt-4">
        <InputField
          type="tel"
          name="phone"
          id="floating_phone"
          label="Phone number (123-456-7890)"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          onChange={handleChange}
          value={formData.phone}
        />
      </div>

      {error && <div className="text-red-500 mb-1 text-sm">{error}</div>}
      {success && <div className="text-green-500 mb-1 text-sm">{success}</div>}

      <SubmitButton className="bg-customBlue hover:bg-red-600 mt-3">
        Sign Up
      </SubmitButton>
    </form>
  );
};

export default SignUpForm;

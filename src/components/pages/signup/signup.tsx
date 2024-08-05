import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import signupimg from '../../../assets/images/signup-image.jpg';
import signuplogo from '../../../assets/images/signuplogo.png';
import InputField from '../../inputs/signupforminput.tsx/signupforminput';
import Container from '../../containers/fluid';
import MyButton from '../../buttons/button';
import { createUser } from '../../../services/api';
import { Eye, EyeOff } from 'react-feather'; // Importing icons for eye and eye-off

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeat_password: '',
    first_name: '',
    last_name: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
    try {
      await createUser({
        name: `${formData.first_name} ${formData.last_name}`,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });
      setError('');
      setSuccess("User created successfully");
      setFormData({
        email: '',
        password: '',
        repeat_password: '',
        first_name: '',
        last_name: '',
        phone: '',
      });
      setTimeout(() => navigate('/login'), 2000); // Redirect to login page after 2 seconds
    } catch (error: any) {
      if (error.response && error.response.status === 409) { // Assuming 409 is the status code for conflict (user already exists)
        setError("Email already exists");
      } else {
        setError("Something went wrong in user creation");
      }
      setSuccess('');
    }
  };

  return (
    <>
      <div className='flex flex-row'>
        {/* Image div */}
        <div className='w-2/4 h-screen'>
          <img src={signupimg} alt='signup' className='h-full w-full object-cover'/>
        </div>

        {/* Registration form div */}
        <Container className='h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 shadow-black-500/50 flex-1'>
          <div className='h-5/6 bg-white w-5/6 flex items-center flex-col'>
            <div className='h-custom w-custom'>
              <img src={signuplogo} alt='logo'/>
            </div>
            <div className=''>
              <h1 className='text-3xl bg-gradient-text font-mono font-bold'>Sign Up</h1>
            </div>
            <div className='text-lg bg-gradient-text font-mono font-bold pb-3 pt-2'>
              <h3>Get Started with Us—Create Your Account in Minutes!</h3>
            </div>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <InputField type="email" name="email" id="floating_email" label="Email address" required onChange={handleChange} value={formData.email} />
              
              <div className="relative">
                <InputField
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="floating_password"
                  label="Password"
                  required
                  onChange={handleChange}
                  value={formData.password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={12} /> : <Eye size={12} />}
                </button>
              </div>

              <div className="relative mt-4">
                <InputField
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="repeat_password"
                  id="floating_repeat_password"
                  label="Confirm password"
                  required
                  onChange={handleChange}
                  value={formData.repeat_password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={12} /> : <Eye size={12} />}
                </button>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6 mt-4">
                <InputField type="text" name="first_name" id="floating_first_name" label="First name" required onChange={handleChange} value={formData.first_name}/>
                <InputField type="text" name="last_name" id="floating_last_name" label="Last name" required onChange={handleChange} value={formData.last_name}/>
              </div>

              <InputField type="tel" name="phone" id="floating_phone" label="Phone number (123-456-7890)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={handleChange} value={formData.phone}/>
              
              {error && <div className="text-red-500 mb-1 text-sm">{error}</div>}
              {success && <div className="text-green-500 mb-1 text-sm">{success}</div>}
              
              <MyButton text="Submit" />
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignUpPage;

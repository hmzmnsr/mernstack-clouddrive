import React from 'react';

interface InputFieldProps {
  type: string;
  name: string;
  id: string;
  label: string;
  pattern?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ type, name, id, label, pattern, required }) => {
  return (
    <div className="relative z-0 w-full mb-4 group">
      <input
        type={type}
        name={name}
        id={id}
        className="block w-72 h-8 py-6 mt-5 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer autofill:bg-transparent"
        placeholder=" "
        pattern={pattern}
        required={required}
      />
      <label htmlFor={id} className="peer-focus:font-normal absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 items-start">
        {label}
      </label>
    </div>
  );
};

export default InputField;

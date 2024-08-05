import React from 'react';

interface InputFieldProps {
  type: string;
  name: string;
  id: string;
  label: string;
  pattern?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
}

const InputField: React.FC<InputFieldProps> = ({ type, name, id, label, pattern, required, onChange }) => {
  return (
    <div className="relative z-0 w-full mb-4 group">
      <input
        type={type}
        name={name}
        id={id}
        className="block w-72 h-8 py-6 mt-5 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer autofill-bg-transparent"
        placeholder=" "
        pattern={pattern}
        required={required}
        onChange={onChange} // Handle the onChange event
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:font-normal peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;



       {/* <ul className='list-none text-white font-sans text-lg flex flex-col justify-center '>
        <li>All Files</li>
        <li>Favorite</li>
        <li>Recents</li>
        <li>Shared With Me</li>
        <li>Deleted Files</li>
        <li>Settings</li>
        </ul>
        <button>Create New</button> */}

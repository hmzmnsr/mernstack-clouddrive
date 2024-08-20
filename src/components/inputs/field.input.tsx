import FlexContainer from "../containers/flex.container";

interface InputFieldProps {
  type: string;
  name: string;
  id: string;
  label: string;
  pattern?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFields: React.FC<InputFieldProps> = ({
  type,
  name,
  id,
  label,
  pattern,
  required,
  value,
  onChange,
}) => {
  return (
    <FlexContainer className="w-full flex-col">
      <label htmlFor={id} className="block text-base text-customBlue mb-2">
        {label}
      </label>
      <div className="relative z-0 w-full mb-4 group">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full h-11 px-2 py-2 mt-1 text-sm text-customBlue bg-transparent border-2 border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-0 focus:border-customBlue peer"
          placeholder=" "
          pattern={pattern}
          required={required}
          value={value}
          onChange={onChange}
        />
      </div>
    </FlexContainer>
  );
};

export default InputFields;

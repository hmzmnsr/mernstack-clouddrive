import FlexContainer from "../containers/flex.container";

interface ICheckBoxProps {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const CheckBox: React.FC<ICheckBoxProps> = ({
  name,
  id,
  label,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <FlexContainer className="">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="mr-2"
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor={id} className={`text-base text-customBlue ${className}`}>
        {label}
      </label>
    </FlexContainer>
  );
};

export default CheckBox;

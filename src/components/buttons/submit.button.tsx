import React from "react";

interface MyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SubmitButton: React.FC<MyButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`text-white focus:outline-none text-sm w-full px-36 py-3 text-center rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;

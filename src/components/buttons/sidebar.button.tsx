import React from "react";

interface ISidebarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SidebarButton: React.FC<ISidebarButtonProps> = ({
  children,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={` bg-customBlueTwo text-white rounded-xl hover:bg-red-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default SidebarButton;

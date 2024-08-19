import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FlexContainer: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return <div className={`w-full flex ${className}`}>{children}</div>;
};

export default FlexContainer;

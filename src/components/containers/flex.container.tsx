import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FlexContainer: React.FC<ContainerProps> = ({
  children,
  className = "w-full", 
}) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default FlexContainer;

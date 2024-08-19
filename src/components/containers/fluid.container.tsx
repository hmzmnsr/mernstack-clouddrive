import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`h-screen w-screen overflow-y-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;

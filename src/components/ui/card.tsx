import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:translate-y-[-4px] ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ className = "", children }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};
import { CardProps } from "@/shared/types";
import React from "react";

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="border border-[#262626] bg-[#1A1A1A] p-4 rounded-xl min-w-[206px]">
      {children}
    </div>
  );
};

export default Card;

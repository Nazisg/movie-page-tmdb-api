import { ButtonProps } from "@/shared/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({ icon, bg, onClick }) => {
  return (
    <button
      className={`border border-[#262626] bg-[${bg}] p-3 rounded-lg`}
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="w-[1.3rem]" />
    </button>
  );
};

export default Button;

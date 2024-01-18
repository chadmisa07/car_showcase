"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

function CustomButton({
  text,
  containerStyles,
  handleClick,
  buttonType,
  textStyles,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={buttonType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{text}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-fill"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;

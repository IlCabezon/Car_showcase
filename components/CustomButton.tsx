"use client";

// native
import Image from "next/image";

// types
import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  btnType = "button",
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="right icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
}

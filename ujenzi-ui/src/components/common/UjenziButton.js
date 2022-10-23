import React from "react";

export default function UjenziButton({
  buttonType,
  buttonStyle,
  handleSubmit,
  buttonText,
  buttonIcon,
  iconStyle,
}) {
  return (
    <button
      onSubmit={handleSubmit}
      type={buttonType}
      className={`h-[50px] bg-ujenzi-blue hover:bg-ujenzi-white hover:text-ujenzi-blue rounded-[5px] items-center flex text-ujenzi-white place-content-center px-6 py-1 border-2 border-ujenzi-blue font-bold text-[16px] ${
        buttonStyle ? buttonStyle : ""
      } `}
    >
      {buttonText}
      <span className={`${iconStyle ? iconStyle : ""}`}>
        {buttonIcon && buttonIcon ? buttonIcon : ""}
      </span>
    </button>
  );
}

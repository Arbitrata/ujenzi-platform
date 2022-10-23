import React from "react";

export const UjenziLogo = ({ logoStyle }) => {
  return (
    <div className={`h-[60px] w-[110px]${logoStyle ? logoStyle : ""}`}>
      <img
        className="h-[100%] w-full max-w-[100%]"
        alt="Ujenzi"
        src="/UJENZILOGO.png"
      />
    </div>
  );
};

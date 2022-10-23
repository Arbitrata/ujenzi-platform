import React from "react";

export default function UjenziInput({
  label,
  index,
  value,
  name,
  error,
  inputStyle,
  required,
  onChange,
  placeholder,
  inputType,
  textarea,
  textareaStyle,
}) {
  return (
    <div className="block mt-4">
      <label className=" text-ujenzi-darkgray font-medium text-left text-md block pb-1">
        {label}
      </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className={`bg-ujenzi-white border text-md block px-[20px] h-[150px]  rounded-[5px] w-[500px] border-ujenzi-blue  shadow-sm cursor-text focus:outline-none ${
            textareaStyle ? textareaStyle : ""
          } `}
        />
      ) : (
        <input
          key={index}
          name={name}
          type={inputType}
          value={value}
          className={`text-md block px-[20px] h-[50px]  rounded-[5px] w-[500px] 
          bg-ujenzi-white border border-ujenzi-blue  shadow-sm cursor-text focus:outline-none ${
            inputStyle ? inputStyle : ""
          }`}
          id={label}
          required={required}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      {error && (
        <div role="alert" className="block text-[13px] font-medium text-[]">
          {error}
        </div>
      )}
    </div>
  );
}

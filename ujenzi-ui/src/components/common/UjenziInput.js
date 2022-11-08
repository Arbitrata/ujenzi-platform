import React from "react";


export default function UjenziInput({
  label,
  index,
  value,
  name,
  errors,
  inputStyle,
  required,
  onChange,
  placeholder,
  inputType,
  textarea,
  textareaStyle,
}) {

  function validate(input){
    if(/^\s/.test(input.value))
      input.value = '';
  }

  return (
    <div className="block mt-4">
      <label className=" text-ujenzi-darkgray font-semibold text-left text-[13px] block pb-0">
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
          required={required}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
      {errors && (
        <div className="text-[12px] w-[100%] font-bold text-[#FF3000]">
          {errors}
        </div>
      )}
    </div>
  );
}

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

  function validate(input){
    if(/^\s/.test(input.value))
      input.value = '';
  }

  return (
    <div className="block mt-4">
      <label className=" text-ujenzi-darkgray font-medium text-left text-[15px] block pb-1">
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
        id='noWhiteSpaceAtTheStart' oninput="validate(this)"
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
      {error && (
        <div className="text-[12px] w-[100%] font-bold text-[#FF3000]">
          {error}
        </div>
      )}
    </div>
  );
}

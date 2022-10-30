import React from "react";
import { BsXCircleFill } from "react-icons/bs";

import UjenziButton from "./UjenziButton";

function UjenziModal(props) {
  const {
    showModal = true,
    children,
    title,
    closeButtonText,
    submitButtonText,
    headerStyle,
    modalViewHeight,
    bodyStyle,
    footerStyle,
    onClose,
    isSubmitButtonPresent = false,
    onSubmit,
    submitButtonStyle,
    closeButtonStyle,
    isSecondaryButtonPresent = false,
    secondaryButtonText,
    secondaryButtonStyle,
    onSecondaryButtonClick,
  } = props;

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className={`relative w-auto my-6 mx-auto max-w-3xl ${
                modalViewHeight ? modalViewHeight : ""
              }`}
            >
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-2">
                <div
                  className={`flex items-center justify-between py-3 px-2 border-b border-solid border-ujenzi-lightgrey rounded-t ${
                    headerStyle ? headerStyle : ""
                  }`}
                >
                  <h3 className="text-[18px] text-ujenzi-darkgray font-semibold">
                    {title}
                  </h3>
                  <UjenziButton
                    onClickButtonHandler={onClose}
                    buttonIcon={true}
                    buttonStyle={"border-none text-ujenzi-blue bg-[#FFFFFF]"}
                    icon={<BsXCircleFill size={20} />}
                  />
                </div>
                <div
                  className={`relative my-2 py-4 px-2 flex-auto ${
                    bodyStyle ? bodyStyle : ""
                  }`}
                >
                  {children}
                </div>
                <div
                  className={`flex items-center justify-end space-x-3 py-4 px-2 border-t border-solid border-ujenzi-darkgrey rounded-b ${
                    footerStyle ? footerStyle : ""
                  }`}
                >
                  <UjenziButton
                    buttonText={closeButtonText}
                    buttonStyle={`bg-transparent text-ujenzi-darkgray w-[100px] hover:bg-transparent hover:border-none hover:text-ujenzi-darkgray ${
                      closeButtonStyle ? closeButtonStyle : ""
                    }`}
                    onClickButtonHandler={onClose}
                  />
                  {isSecondaryButtonPresent && (
                    <UjenziButton
                      buttonText={secondaryButtonText}
                      buttonStyle={`w-[150px] ${
                        secondaryButtonStyle ? secondaryButtonStyle : ""
                      }`}
                      onClickButtonHandler={onSecondaryButtonClick}
                    />
                  )}
                  {isSubmitButtonPresent && (
                    <UjenziButton
                      buttonType="submit"
                      buttonText={submitButtonText}
                      buttonStyle={`w-[150px] ${
                        submitButtonStyle ? submitButtonStyle : ""
                      }`}
                      onClickButtonHandler={onSubmit}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default UjenziModal;

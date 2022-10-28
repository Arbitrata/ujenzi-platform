import React from "react";
import { UjenziLogo } from "./../common/UjenziLogo";
import UjenziButton from "./../common/UjenziButton";
import UjenziForm from "./../common/UjenziForm";
import { Link } from "react-router-dom";

class UjenziSingInPage extends UjenziForm {
  state = {};
  render() {
    return (
      <div className="w-[100vw] h-[100vh] max-h-[700px] mx-w-[1728px] mx-h-[1117] bg-ujenzi-darkgray flex">
        <div className="w-[47%] h-[100%] bg-ujenzi-white pl-[90px] pt-3 block">
          <UjenziLogo />
          <div className="w-[490px] h-[530px] shadow mt-[30px] shadow-ujenzi-darkgray relative grid place-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHeOPPVYe7Xe1fQRthYmcVhRn58oeNDdrcxA&usqp=CAU"
              alt="building"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
        <div className="w-[53%] h-[100%] bg-ujenzi-lightgreen pr-[90px] pt-6">
          <div className="h-[50px] w-[100%] flex place-items-center pl-[300px]">
            <span className="text-[16px] font-bold text-ujenzi-darkgray pr-4">
              Already have an account?
            </span>
            <Link to="/signup">
              <UjenziButton
                handleSubmit={"/"}
                buttonType={"submit"}
                buttonText={"Sign Up"}
                buttonStyle={
                  "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
                }
              />
            </Link>
          </div>
          <div className="w-[100%] h-[90%] block pt-[50px] pl-[90px]">
            {this.renderInput("useremail", "Email", "email", "w-[550px]")}
            {this.renderInput(
              "password",
              "Enter Your Password",
              "text",
              "w-[550px]"
            )}

            <div className="flex grid-cols-2 gap-3 justify-between pr-8 pt-8">
              {this.renderButton("Back")}
              {this.renderButton("Sign In")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UjenziSingInPage;

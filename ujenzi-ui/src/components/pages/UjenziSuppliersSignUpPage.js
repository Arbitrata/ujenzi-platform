import React from "react";
import UjenziForm from "./../common/UjenziForm";
import UjenziButton from "./../common/UjenziButton";
import { UjenziLogo } from "./../common/UjenziLogo";

class UjenziSuppliersSignUpPage extends UjenziForm {
  state = {};
  render() {
    return (
      <div className="bg-ujenzi-lightgreen w-[100%] h-[100vh] max-h-[1117px] pb-10 pt-4">
        <div className="h-[10%] w-[100vw] flex justify-between px-[70px] place-items-center">
          <UjenziLogo />
          <div className=" flex justify-between place-items-center">
            <span className="text-[16px] font-bold text-ujenzi-darkgray pr-4">
              Already have an account?
            </span>
            <UjenziButton
              handleSubmit={""}
              buttonText={"Sign in"}
              buttonStyle={
                "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
              }
            />
          </div>
        </div>
        <div className="w-[100vw] h-[90%] grid place-items-center pt-10">
          <form onSubmit={this.handleSubmit} className="block h-fit w-fit">
            {this.renderInput("username", "Name", "text", "w-[550px]")}
            {this.renderInput("useremail", "Email", "email", "w-[550px]")}
            {this.renderInput(
              "phonenumber",
              "Phone Number",
              "number",
              "w-[550px]"
            )}
            <div className="flex grid-cols-2 gap-3">
              {this.renderInput("password", "Password", "text", "w-[270px]")}
              {this.renderInput(
                "passwordconfirmation",
                "Confirm Password",
                "text",
                "w-[270px]"
              )}
            </div>
            <div className="flex grid-cols-2 gap-3 justify-between pt-4 w-[550px]">
              {this.renderButton("Back")}
              {this.renderButton("Next")}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UjenziSuppliersSignUpPage;

import React from "react";
import UjenziForm from "./../common/UjenziForm";
import UjenziButton from "./../common/UjenziButton";
import { UjenziLogo } from "./../common/UjenziLogo";
import { Link } from "react-router-dom";

class UjenziSuppliersSignUpPage2 extends UjenziForm {
  state = {};
  render() {
    return (
      <div className="w-[100vw] max-h-[800px] h-[100vh] mx-w-[1428px] mx-h-[1117] flex">
        <div className="w-[47%] h-[100%] bg-ujenzi-white pl-[90px] pt-4 block">
          <UjenziLogo />
          <Link to={""}>
            <div className="w-[350px] h-[300px] shadow mt-[110px] ml-[100px]  hover:shadow-ujenzi-darkgray hover:text-ujenzi-darkgrey hover:bg-ujenzi-lightgrey relative grid place-items-center">
              <img
                className="w-[100%] h-[100%]"
                src={""}
                alt={""}
              />
              <h1 className="w-[100%] h-[100%] grid text-md rounded-[10px] font-bold place-items-center text-ujenzi-lightgrey hover:text-ujenzi-darkgrey absolute">
                Upload a cover image
              </h1>
            </div>
          </Link>
        </div>

        <div className="w-[53%] h-[100%] bg-ujenzi-lightgreen pr-[70px] pt-4">
          <div className="h-[50px] w-[100%] flex place-items-center pl-[300px]">
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
          <form
            onSubmit={this.handleSubmit}
            className="w-[100%] h-[90%] block pt-[90px] pl-[80px]"
          >
            {this.renderSelect(
              "location",
              "Select Location"," ",
              "w-[550px]"
            )}
            {this.renderTextarea(
              "value",
              "Type a short Description Here",
              "w-[550px]"
            )}
            <div className="flex grid-cols-2 gap-3 justify-between pr-6 pt-4">
              {this.renderButton("Back")}
              {this.renderButton("Done")}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UjenziSuppliersSignUpPage2;

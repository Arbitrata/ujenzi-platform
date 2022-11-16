import React from "react";
import UjenziForm from "./../common/UjenziForm";
import UjenziButton from "./../common/UjenziButton";
import { UjenziLogo } from "./../common/UjenziLogo";
import { Link, Navigate } from "react-router-dom";
import Joi from "joi-browser";

class UjenziSuppliersSignUpPage extends UjenziForm {
  state = {
    data: {
      username: " ",
      useremail: " ",
      phonenumber: " ",
      password: " ",
      confirmpassword: " ",
    },
    errors: {},
    submitted: false,
  };

  schema = {
    username: Joi.string().required().label("User Name").min(5),
    useremail: Joi.string().required().label("User Email").email(),
    phonenumber: Joi.string().required().label("Phone Number").min(10),
    password: Joi.string().required().label("Password").min(5),
    confirmpassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .label("Confirm Password")
      .options({ language: { any: { allowOnly: "must match password" } } }),
  };

  doSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    return (
      <div className="bg-ujenzi-lightgreen w-[100%] h-[100vh] max-h-[1117px] pb-10 pt-4">
        <div className="h-[10%] w-[100vw] flex justify-between px-[70px] place-items-center">
          <UjenziLogo />
          <div className=" flex justify-between place-items-center">
            <span className="text-[16px] font-bold text-ujenzi-darkgray pr-4">
              Already have an account?
            </span>
            <Link to="/signin">
              <UjenziButton
                handleSubmit={""}
                buttonText={"Sign In"}
                buttonStyle={
                  "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
                }
              />
            </Link>
          </div>
        </div>
        <div className="w-[100vw] h-[90%] grid place-items-center pt-4">
          <form onSubmit={this.handleSubmit} className="block h-fit w-fit">
            {this.renderInput("username", "Name", "text", "w-[550px]")}
            {this.renderInput("useremail", "Email", "email", "w-[550px]")}
            {this.renderInput(
              "phonenumber",
              "Phone Number",
              "number",
              "w-[550px]"
            )}
            <div className="flex grid-cols-2 gap-3 w-[550px]">
              {this.renderInput("password", "Password", "text", "w-[270px]")}
              {this.renderInput(
                "confirmpassword",
                "Confirm Password",
                "text",
                "w-[270px]"
              )}
            </div>
            <div className="flex grid-cols-2 gap-3 justify-between pt-4 w-[550px]">
              <Link to={"/"}>
                <UjenziButton
                  buttonStyle={
                    "bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-ujenzi-blue text-ujenzi-blue"
                  }
                  buttonText={"back"}
                />
              </Link>
              {this.renderButton("Next")}
            </div>
            {this.state.submitted && <Navigate to={"/suppliersignup1"} />}
          </form>
        </div>
      </div>
    );
  }
}

export default UjenziSuppliersSignUpPage;
